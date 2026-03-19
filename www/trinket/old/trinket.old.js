let current = null

const voidElements = ['area', ' base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']
const symbols = {
	STATE: Symbol('State id symbol')
}

export const html = new Proxy({}, {
	get(_, property) {
		const tagName = property.toUpperCase()
		if (toValidTag(tagName) || tagName === 'TEXT')
			return Symbol.for('HTML:' + tagName + ':' + crypto.randomUUID())
	}
})

export function render(tree = {}, parent = document.createDocumentFragment()) {
	tree ??= {}
	for (const [key, value] of Reflect.ownKeys(tree).map(k => [k, tree[k]])) {

		if (typeof key === 'symbol') {
			const [ns, tagName] = Symbol.keyFor(key).split(':')
			if (ns !== 'HTML') throw new Error('invalid namespace: ' + ns)
			const element = toValidTag(tagName)

			resolveState(value, (resolved, dynamic) => {
				while (dynamic && element.firstChild) {
					element.removeChild(element.firstChild);
				}

				if (typeof resolved === 'object')
					return render(resolved, element)

				if (element.tagName === 'input')
					element.setAttribute('name', resolved)

				if (!voidElements.includes(element.tagName.toLowerCase()))
					element.textContent = resolved

			})

			parent.appendChild(element)

		} else if (typeof key === 'string' && !(parent instanceof DocumentFragment)) {
			if (key.startsWith('on')) {
				parent.addEventListener(key.substring(2), value)
				continue
			}
			resolveState(value, (resolved) => {
				switch (key) {
					case 'textContent': {
						parent.textContent = resolved
						break
					}
					default: {
						parent.setAttribute(key, resolved)
					}
				}
			})

		} else throw new Error('there has been an error')
	}
	return parent
}

export function trinket(value) {
	const effects = new Set
	const id = crypto.randomUUID()

	if (typeof value === 'function') {
		current = value
		current = void current()
	}

	return {
		[symbols.STATE]: { id, value, effects },

		get value() {
			if (current) {
				this[symbols.STATE].effects.add(current)
			}

			const value = this[symbols.STATE].value
			return typeof value === 'function' ? value() : value
		},

		set value(newValue) {
			if (typeof this[symbols.STATE].value === 'function')
				return undefined

			if (this[symbols.STATE].value === newValue) return newValue
			this[symbols.STATE].value = newValue
			for (const effect of this[symbols.STATE].effects)
				effect(newValue)

			return value
		}
	}
}

function toValidTag(tag) {
	const element = document.createElement(tag)

	return element.toString() === '[object HTMLUnknownElement]' ? null : element
}

function resolveState(value, sideEffect = (...args) => args) {
	if (typeof value !== 'object' || !(symbols.STATE in value))
		return void sideEffect(value, 0)

	const peek = typeof value[symbols.STATE].value === 'function' ? value[symbols.STATE].value() : value[symbols.STATE].value
	current = () => {
		const dynamic = Object.getOwnPropertySymbols(peek).length
		sideEffect(value.value, dynamic)
	}
	if (typeof peek === 'object' && symbols.STATE in peek)
		current = () => value.value

	current = void resolveState(current())
}

export const util = {
	formInputBuilder(structure) {
		const defaults = structuredClone(structure).defaults ?? {}
		if (defaults.required === true) defaults.required = ''
		delete structure.defaults
		return Object.fromEntries(Object.entries(structure).map(([textContent, props]) =>
			Object.getOwnPropertySymbols(props).length ? [html.fieldset, {
				...this.formInputBuilder({ defaults, props })
			}] :
				[html.label,
				{
					textContent,
					[html.input]: {
						...(typeof props === 'object' ? (() => {
							const res = { ...structuredClone(defaults), ...props }
							if (res.required !== false) {
								res.required = ''
								return res
							}
							delete res.required
							return res
						})() : { ...defaults, name: props })
					}
				}]))
	}
}