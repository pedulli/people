import * as trinket from '../../../../trinket/trinket.js'
import html from '../../../../trinket/html.js'

const pages = {
	'Home': './',
	'History': 'history.html'
}

export default () => ({
	[html.nav]: {
		[html.ul]: trinket.each.in(pages, (textContent, href) => ({
			[html.li]: {
				[html.a]: { textContent, href }
			}
		}))
	}
})
