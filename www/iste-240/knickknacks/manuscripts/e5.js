/*
*	Made by Tristie
*	260212
*/

const $ = // Offbrand jQuery
	document.querySelector.bind(document)

	
SectionA: {
	const buttonElement = $('#changeStyleButton')
	const moveButtonElement = $('#moveTextButton')
	const textElement = $('#sectionA > p')

	buttonElement.addEventListener('click', () =>
		textElement.classList.toggle('green'))

	moveButtonElement.addEventListener('click', () => {
		const currentOffset = parseInt(textElement.style.translate || 0)

		textElement.style.translate = CSS.px(currentOffset + 10)
	})
}


SectionB: {
	const formElement = $('#sectionB > form')
	const countButtonElement = $('#inputCountButton')

	formElement.addEventListener('submit', (event) => {
		event.preventDefault()

		const [firstName, lastName] = new FormData(formElement).values()

		alert(firstName + ' ' + lastName)
	})
	
	countButtonElement.addEventListener('click', () => {
		const inputElements = formElement.querySelectorAll('input')
		const textInputElements = [...inputElements].filter(({ type }) => type === 'text')

		console.log('Number of total inputs: ' + inputElements.length)
		console.log('Number of text inputs: ' + textInputElements.length)
	})
}

SectionC: {
	const parentElement = $('#sectionC')
	const buttonElement = $('#sectionC > button')
	const selectElement = $('#sectionC > select')

	buttonElement.addEventListener('click', () =>
		parentElement.style.backgroundColor = selectElement.value)
}


SectionD: {
	const selectElement = $('#sectionC > select')
	const textElement = $('#sectionD > p')

	textElement.addEventListener('mouseenter', () =>
		textElement.style.color = selectElement.value)

	textElement.addEventListener('mouseleave', () =>
		textElement.style.color = 'black')
}


SectionE: {
	const formElement = $('#sectionE > form')
	const textElement = $('#sectionE span')

	formElement.addEventListener('submit', (event) => {
		event.preventDefault()

		const [first, second] = new FormData(event.target).values()

		textElement.textContent = // I assure you I know what I'm doing here
			eval?.(first + event.submitter.dataset.operator + second)
	})
}
