// Trinket.js
// Made by Tristie

const TrinketRegistry = new Map
const TrinketSignal = Symbol()
let current = null

export function mount(parent, trinket) {
	const input = {
		[parent]: lib.maybeCall(trinket)
	}
	const output = Object.entries(input)
		.map(([key, value]) => render(key, value))
		.map(e => e.get())

	// TrinketRegistry.clear()
	return output
}

export function build(trinket) {
	const input = lib.maybeCall(trinket)
	const output = Object.entries(input)
		.map(([key, value]) => render(key, value))
		.map(e => e.get())

	// TrinketRegistry.clear()
	return output
}

function render(parent, children) {
	const entity = TrinketRegistry.get(parent)
	if (!entity) throw new Error('invalid entity: ' + parent)

	children = resolveSignal(children, (children) => {
		if (typeof children !== 'object') {
			current = entity.set(null)
			current = void current(children)

			return undefined
		}

		return children
	})

	if (!children) return entity

	for (const [child, attributes] of Object.entries(children).reduce((acc, [key, value]) => {
		const component = TrinketRegistry.get(key)

		if (!component || !key.startsWith('c/'))
			return [...acc, [key, resolveSignal(value)]]

		render(parent, component(resolveSignal(value)))

		return acc

	}, [])) {
		if (TrinketRegistry.has(child)) entity.set(null)(render(child, attributes).get())
		else resolveSignal(attributes, (attributes) => entity.set(child)(attributes))
	}

	return entity
}

function resolveSignal(signal, sideEffect = (args) => args) {
	if (typeof signal !== 'object' || !(TrinketSignal in signal))
		return sideEffect(signal)

	current = null
	const peek = lib.maybeCall(signal[TrinketSignal])

	current = () => sideEffect(signal.value)

	if (typeof peek === 'object' && TrinketSignal in peek)
		current = () => signal.value

	const res = resolveSignal(current())
	current = null
	return res
}

export function signal(value) {
	if (typeof value === 'function') {
		current = value
		current = void current()
	}

	const effects = new Set()

	return {
		get value() {
			if (current) effects.add(current)
			return lib.maybeCall(value)
		},

		set value(updated) {
			if (typeof value === 'function') return
			value = updated
			for (const effect of effects) effect()
		},

		[Symbol.toPrimitive]: () => lib.maybeCall(value),
		[TrinketSignal]: value
	}
}

export const each = {
	of: (elements, cb) => elements.reduce((acc, curr) => Object.assign(acc, cb(curr)), {}),
	in: (elements, cb) => Object.entries(elements).reduce((acc, curr) => Object.assign(acc, cb(...curr)), {}),
}

export const lib = {
	registerEntity(entity) {
		const id = `e/${crypto.randomUUID()}`
		TrinketRegistry.set(id, entity)

		return id
	},
	registerComponent(component) {
		const id = `c/${crypto.randomUUID()}`
		TrinketRegistry.set(id, component)

		return id
	},
	useDynamicNamespace: (map, path = []) => {
		return new Proxy((...options) => map({ path, options }), {
			get(_, prop) {
				if (prop === Symbol.toPrimitive || prop === 'toJSON') {
					return () => map({ path, options: [] });
				}
				return lib.useDynamicNamespace(map, [...path, prop])
			}
		})
	},
	maybeCall(fn, ...opts) {
		if (typeof fn !== 'function')
			return fn
		else return fn(...opts)
	}
}
