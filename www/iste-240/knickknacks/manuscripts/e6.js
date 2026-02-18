const imageSrc = (name, thumb = false) => `knickknacks/depictions/e6/${name + (thumb ? '.thumb' : '')}.jpg`
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
	lizard: 'Awesome gecko'
}

for (const image in images) {
	const button = document.createElement('button')
	const listItem = document.createElement('li')
	const thumbnail = document.createElement('img')

	thumbnail.src = imageSrc(image, true)
	thumbnail.alt = `switch to "${images[image]}" image`
	button.appendChild(thumbnail)
	listItem.appendChild(button)
	thumbnailListElement.appendChild(listItem)

	button.addEventListener('click', () => {
		imageElement.src = imageSrc(image)
		captionElement.textContent = images[image]
	})
}

document.querySelector('button').click()