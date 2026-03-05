import * as trinket from './trinket.js'

const html = trinket.createEntity((tagName, ...extra) => {
	const element = toValidTag(tagName)
	if (!element) return null

	return new Element(element, ...extra)
})

export default html

export const input = trinket.lib.useDynamicNamespace(({ path, options: [name] }) => {
	const required = path[0].startsWith('required') ? 'required' : undefined
	const type = path[0] = path[0].replace('required', '').toLowerCase()

	if (path.length !== 1) throw new Error('invalid util params')

	return trinket.registerComponent((attributes) => {
		const labelProps = {}
		const inputProps = { required, type, name }
		let labelBefore = true

		if (typeof attributes === 'object')
			Object.assign(labelProps, attributes)

		if (typeof attributes !== 'object') {
			labelProps.textContent = attributes
			if (['radio', 'checkbox', 'hidden', 'submit'].includes(type)) {
				inputProps.value = attributes
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
})

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
