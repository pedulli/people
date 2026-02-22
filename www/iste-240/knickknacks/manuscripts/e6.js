const captionElement = document.querySelector('figcaption')
const imageElement = document.querySelector('figure > img')
const thumbnailListElement = document.querySelector('ul')

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
	const navItemElement = document.querySelector('template').content.cloneNode(true)
	const thumbnailElement = navItemElement.querySelector('img')
	const buttonElement = navItemElement.querySelector('button')
	const preloadElement = new Image

	preloadElement.src = `knickknacks/depictions/e6/${image}.jpg`

	thumbnailElement.src = `knickknacks/depictions/e6/${image}.thumb.jpg`
	thumbnailElement.alt = `switch to "${images[image]}" image`

	thumbnailListElement.appendChild(navItemElement)

	buttonElement.addEventListener('mousedown', swap)
	buttonElement.addEventListener('click', swap)

	function swap() {
		imageElement.src = preloadElement.src
		captionElement.textContent = images[image]
	}
}

document.querySelector('button').click()