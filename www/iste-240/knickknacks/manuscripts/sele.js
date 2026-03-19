// selejs by Tristie

let current = null
const symbols = {
	children: Symbol('Child Nodes'),
	events: Symbol('Events'),
}

export const select = (function sel(root = document) {
	return Object.assign(root.querySelector.bind(root), {
		all: root.querySelectorAll.bind(root),
		id: (id) => root.getElementById(id),
		from: (innerRoot) => {
			if (typeof innerRoot === 'string') return sel(sel(root)(innerRoot))
			else return sel(innerRoot)
		},
		new(el, props = ({ children }) => ({})) {
			const element = (function () {
				if (typeof el === 'string') return document.createElement(el)
				else if (el instanceof HTMLElement) return el.cloneNode(true)
				else throw new TypeError('invalid element type: ' + el)
			})()

			const attrs = typeof props === 'function' ? props(symbols) : props

			for (let [key, value] of Reflect.ownKeys(attrs).map((key) => [key, attrs[key]])) {
				if (key === symbols.children && Array.isArray(value)) {
					for (const child of value) {
						if (typeof child === 'string') element.appendChild(this.text(child))
						else element.appendChild(child)
					}

					continue
				}

				if (key === 'class' && Array.isArray(value)) value = value.join(' ')

				element.setAttribute(key, value)
			}

			return element
		},
		text: (text) => document.createTextNode(text),
		state(init) {
			if (typeof init !== 'object') throw new TypeError('invalid initial state')

			return new Proxy(Object.defineProperties(init, {
				[symbols.events]: {
					value: new Map,
					writable: false,
				},
				[symbols.state]: {
					value: true,
					writable: false
				}
			}), {
				get(target, property) {
					if (!target.hasOwnProperty(property)) return
					if (property === symbols.events) return target[property]
					if (current) {
						const currentEvents = target[symbols.events].get(property) ?? new Set
						currentEvents.add(current)
						current = null
					}
					return target[property]
				},
				set(target, property, value) {
					if (!target.hasOwnProperty(property)) return
					target[property] = value
					const currentEvents = target[symbols.events].get(property) ?? new Set
					for (const event of currentEvents)
						event(value)
				}
			})
		}
	})
})()

export default select

class State {
	constructor(initial = {}) {}
	
}