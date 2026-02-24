// I made a nice little helper function for bulk event listening
const listen = (type) => new class { #type; constructor(type) { this.#type = type } for(element, cb) { element.addEventListener(this.#type, cb); return this } }(type)

const [
	updateTitleButton,
	colorRedButton,
	yahooButton,
	newClassButton,
	imageOffsetButton,
	appendButton,
	purdueButton
] = document.querySelectorAll('button')

const elements = {
	secondParagraph: document.querySelectorAll('p')[1],
	yahoo: document.querySelector("li:has(a[href='http://www.yahoo.com'])"),
	newClass: document.querySelectorAll('.new'),
	logo: document.querySelector('img'),
	links: document.querySelector('ol'),
	purdueTemplate: document.querySelector('template').content
}

listen('click')
	.for(updateTitleButton, () => document.title = 'PowerPoint Demo')
	.for(colorRedButton, () => elements.secondParagraph.classList.add('red'))
	.for(yahooButton, () => elements.yahoo.classList.toggle('hidden'))
	.for(newClassButton, () => elements.newClass.forEach(element => element.classList.add('bg-yellow')))
	.for(imageOffsetButton, () => elements.logo.style.translate = CSS.px(parseInt(elements.logo.style.translate || '0') + 10))
	.for(appendButton, () => document.body.appendChild(document.createTextNode(" ISTE 240 ")))
	.for(purdueButton, () => elements.links.prepend(elements.purdueTemplate.cloneNode(true)))
