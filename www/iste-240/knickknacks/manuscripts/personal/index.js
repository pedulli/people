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
			...NavBar(),
			[html.main]: {
				[html.h1]: title,
				...trinket.each.of(sections, (section) => typeof section === 'string' ? { [html.p]: section } : {})
			}
		})
	}
})))
