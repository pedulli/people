import * as trinket from '../../../../trinket/trinket.js'
import html, { mountClientSideRouter } from '../../../../trinket/html.js'
import content from './content.json' with { type: 'json' }
import NavBar from './navbar.js'

const rootPath = location.pathname.substring(0, location.pathname.search('iste-240/personal') + 17)
const rootNode = document.getElementById('trinket-root')

mountClientSideRouter({ rootNode, rootPath }, trinket.each.in(content, (key, { title, sections }) => ({
	[key]: {
		title,
		content: () => ({
			...NavBar(rootPath),
			[html.main]: {
				[html.h1]: title,
				...trinket.each.of(sections, (section) => {
					if (typeof section !== 'object')
						return { [html.p]: section }
					else if (section.type === 'list') {
						if (Array.isArray(section.values))
							return {}//trinket.each.of()
						else
							return {
								[html.ul]: trinket.each.in(section.values, (key, textContent) => ({
									[html.li]: {
										[html.b]: key,
										textContent
									}
								}))
							}
					}
					return {}
				})
			}
		})
	}
})))
