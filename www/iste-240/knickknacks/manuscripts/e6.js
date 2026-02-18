const imageSrc = (name, thumb = false) => `knickknacks/depictions/e6/${name + (thumb ? '.thumb' : '')}.jpg`
const thumbnailListElement = document.querySelector('ul')
const imageElement = document.querySelector('figure > img')
const captionElement = document.querySelector('figcaption')

const images = {
	trail: 'trail',
	bridge: 'hike',
	fruit: 'fruit',
	hills: 'mountain pretty',
	river: 'more pretty',
	swan: 'swan pretty',
	waterfall: 'waterfall ugly',
	lizard: 'gecko awesome'
}

for (const image in images) {
	const button = document.createElement('button')
	const thumbnail = document.createElement('img')

	thumbnail.src = imageSrc(image, true)
	button.appendChild(thumbnail)
	thumbnailListElement.appendChild(
		document.createElement('li')
			.appendChild(button))

	button.addEventListener('click', () => {
		imageElement.src = imageSrc(image)
		imageElement.alt = images[image]
		captionElement.textContent = images[image]
	})
}