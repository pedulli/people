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

	moveButtonElement.addEventListener('click', () =>
		textElement.style.translate = CSS.px(
			parseInt(textElement.style.translate || 0) + 10
		))
}


SectionB: {
	const formElement = $('#sectionB > form')

	formElement.addEventListener('submit', (event) => {
		event.preventDefault()
		if (event.submitter.id)
			return howmany($('#sectionB'))

		const [firstName, lastName] = new FormData(event.target).values()
		alert(firstName + ' ' + lastName)
	})

	function howmany(parentElement) {
		const inputElements = parentElement.querySelectorAll('input')
		const textInputElements = [...inputElements].filter(({ type }) => type === 'text')

		console.log(`Number of total inputs: ${inputElements.length}`)
		console.log(`Number of text inputs: ${textInputElements.length}`)
	}
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

		textElement.innerText = // I assure you I made sure this eval is safe
			eval?.(first + event.submitter.dataset.operator + second)
	})
}
