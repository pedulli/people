import * as trinket from './trinket.js'

const html = trinket.lib.useDynamicNamespace(({ path: [tagName], options: [binding] }) => {
	let element = toValidTag(tagName)
	if (!element) return null

	if (binding && binding instanceof HTMLElement && binding.tagName === element.tagName)
		element = binding

	return trinket.lib.registerEntity(new Element(element))
})

export default html

export const input = trinket.lib.useDynamicNamespace(({ path, options: [name, restOpts] }) => {
	const required = path[0].startsWith('required') ? 'required' : undefined
	const type = path[0] = path[0].replace('required', '').toLowerCase()

	if (path.length !== 1) throw new Error('invalid util params')

	return trinket.lib.registerComponent((attributes) => {
		const labelProps = {}
		const inputProps = { required, type, name, ...restOpts }
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
