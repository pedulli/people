import * as trinket from './trinket.js'

const html = trinket.createEntity((tagName, ...extra) => {
	const element = toValidTag(tagName)
	if (!element) return null

	return new Element(element, ...extra)
})

export default html

const inputHelper = (required) => new Proxy({}, {
	get(_, type) {
		return trinket.createComponent(([name, input = {}], properties) => {
			const labelProps = {}
			const inputProps = { required, type, name, ...input }
			let labelBefore = true

			if (typeof properties === 'object') {
				Object.assign(labelProps, properties)
			}

			if (typeof properties !== 'object') {
				labelProps.textContent = properties
				if (['radio', 'checkbox', 'hidden', 'submit'].includes(type)) {
					inputProps.value = properties
					labelBefore = false
				}
			}

			return {
				[html.label]: {
					...(labelBefore ? labelProps : {}),
					[html.input]: inputProps,
					...(!labelBefore ? labelProps : {}),
				}
			}
		})
	}
})

export const inputUtil = {
	optional: inputHelper(undefined),
	required: inputHelper('required')
}

class Element {
	constructor(element) {
		this.element = element
	}

	set(key, value) {
		if (value instanceof HTMLElement)
			this.element.appendChild(value)
		else if (key && (key !== 'textContent')) {
			if (key in this.element) this.element[key] = value
			else this.element.setAttribute(key, value)
		}
		else if (this.element.tagName === 'INPUT')
			this.element.setAttribute('name', value)
		else
			this.element.insertAdjacentText('beforeend', value)
	}

	get() {
		return this.element
	}
}

function toValidTag(tag) {
	const element = document.createElement(tag)

	return element.toString() === '[object HTMLUnknownElement]' ? null : element
}
