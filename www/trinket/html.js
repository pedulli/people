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

export const mountClientSideRouter = (...[{ rootNode, rootPath }, routes]) => {

	goto(location.pathname)

	void ([...rootNode.querySelectorAll('a[href]')]).forEach(a => a.addEventListener('mousedown', (event) => {
		if (
			URL.canParse(event.currentTarget.href) &&
			(() => {
				let url = new URL(event.currentTarget.href)
				return url.hostname === location.hostname && url.pathname.startsWith(rootPath)
			})()
		) {
			event.preventDefault()
			goto(new URL(event.currentTarget.href).pathname)
			mountClientSideRouter({ rootNode, rootPath }, routes)
		}
	}))

	window.addEventListener('popstate', () => {
		goto(location.pathname)
		mountClientSideRouter({ rootNode, rootPath }, routes)
	})

	function goto(route) {
		const page = trinket.lib.maybeCall(routes[route.replace(rootPath, '')])

		if (!page) throw 'page not found'

		if (route !== location.pathname)
			history.pushState(null, null, route)

		rootNode.innerHTML = ''
		document.title = page.title ?? undefined
		trinket.mount(html.div(rootNode), page.content)
	}
}

class Element {
	constructor(element) {
		this.element = element
	}

	set(key) {
		return (value) => {
			if (value instanceof HTMLElement)
				this.element.appendChild(value)
			else if (key && (key !== 'textContent')) {
				if (key.startsWith('on')) this.element.addEventListener(key.substring(2), value)
				if (key in this.element) this.element[key] = value
				else this.element.setAttribute(key, value)
			} else if (this.element.tagName === 'INPUT')
				this.element.setAttribute('name', value)
			else
				this.element.insertAdjacentText('beforeend', value)
		}
	}

	get() {
		return this.element
	}

	remove() {
		this.element.remove()
	}
}

function toValidTag(tag) {
	const element = document.createElement(tag)

	return element.toString() === '[object HTMLUnknownElement]' ? null : element
}
