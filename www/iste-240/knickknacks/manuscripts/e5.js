/*
*	Made by Tristie
*	260212
*/

const $ = // Offbrand jQuery
	document.querySelector.bind(document)


SectionA: {
	const buttonElement = $('#sectionA > button')
	const textElement = $('#sectionA > p')

	buttonElement.addEventListener('click', () => {
		textElement.classList.toggle('green')
	})
}


SectionB: {
	const formElement = $('#sectionB > form')

	formElement.addEventListener('submit', (event) => {
		const [firstName, lastName] = new FormData(event.target).values()

		alert(firstName + ' ' + lastName)

		event.preventDefault()
	})
}


SectionC: {
	const buttonElement = $('#sectionC > button')
	const selectElement = $('#sectionC > select')

	buttonElement.addEventListener('click', () =>
		alert(selectElement.options.length))
}


SectionD: {
	const textElement = $('#sectionD > p')

	textElement.addEventListener('mouseenter', () =>
		textElement.classList.add('green'))

	textElement.addEventListener('mouseleave', () =>
		textElement.classList.remove('green'))
}


SectionE: {
	const formElement = $('#sectionE > form')
	const textElement = $('#sectionE span')

	formElement.addEventListener('submit', (event) => {
		const [first, second] = new FormData(event.target).values()

		textElement.innerText = // I assure you I made sure this is safe
			eval?.(first + event.submitter.dataset.operator + second)

		event.preventDefault()
	})
}
