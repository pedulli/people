import * as trinket from '../../../../trinket/trinket.js'
import html from '../../../../trinket/html.js'

const pages = {
	Home: '/',
	Independence: '/history/independence.html',
	Notable: '/history/notable.html'
}

export default (rootPath) => ({
	[html.nav]: {
		[html.ul]: trinket.each.in(pages, (textContent, href) => ({
			[html.li]: {
				[html.a]: { textContent, href: new URL(rootPath + href, location) }
			}
		}))
	}
})
