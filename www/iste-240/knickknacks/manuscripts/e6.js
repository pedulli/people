const thumbnailListElement = document.querySelector('ul')
const imageElement = document.querySelector('figure > img')
const captionElement = document.querySelector('figcaption')

const images = {
	trail: 'Forested trail',
	bridge: 'Bridge over river',
	fruit: 'Peach tree',
	hills: 'Hilly region',
	river: 'River going through valley',
	swan: 'Swan with reflextion on lake',
	waterfall: 'Very nice waterfall',
	lizard: 'Awesome gecko',
}

for (const image in images) {
	const buttonElement = document.createElement('button')
	const listItemElement = document.createElement('li')
	const thumbnailElement = document.createElement('img')
	const preloadElement = new Image

	thumbnailElement.src = `knickknacks/depictions/e6/${image}.thumb.jpg`
	thumbnailElement.alt = `switch to "${images[image]}" image`
	thumbnailElement.draggable = false
	preloadElement.src = `knickknacks/depictions/e6/${image}.jpg`
	buttonElement.appendChild(thumbnailElement)
	listItemElement.appendChild(buttonElement)
	thumbnailListElement.appendChild(listItemElement)

	buttonElement.addEventListener('mousedown', swap)
	buttonElement.addEventListener('click', swap)

	function swap() {
		imageElement.src = preloadElement.src
		captionElement.textContent = images[image]
	}
}

document.querySelector('button').click()