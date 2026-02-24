// I made some helper functions, may make a basic library at some point
const select = Object.assign(document.querySelector.bind(document), { all: document.querySelectorAll.bind(document) })
const listen = (type) => new class { #type; constructor(type) { this.#type = type } for(element, cb) { element.addEventListener(this.#type, cb); return this } }(type)

const [
	updateTitleButton,
	colorRedButton,
	yahooButton,
	newClassButton,
	imageOffsetButton,
	appendButton,
	purdueButton
] = select.all('button')

const elements = {
	secondParagraph: select('p:nth-of-type(2)'),
	yahoo: select("li:has(a[href='http://www.yahoo.com'])"),
	newClass: select.all('.new'),
	logo: select('img'),
	links: select('ol'),
	purdueTemplate: select('template').content
}

listen('click')
	.for(updateTitleButton, () => document.title = 'PowerPoint Demo')
	.for(colorRedButton, () => elements.secondParagraph.classList.add('red'))
	.for(yahooButton, () => elements.yahoo.classList.toggle('hidden'))
	.for(newClassButton, () => elements.newClass.forEach(element => element.classList.add('bg-yellow')))
	.for(imageOffsetButton, () => elements.logo.style.translate = CSS.px(parseInt(elements.logo.style.translate || '0') + 10))
	.for(appendButton, () => document.body.appendChild(document.createTextNode(" ISTE 240 ")))
	.for(purdueButton, () => elements.links.prepend(elements.purdueTemplate.cloneNode(true)))
