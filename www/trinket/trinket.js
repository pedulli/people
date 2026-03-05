const TrinketRegistry = new Map
let current = null

export function mount(parent, trinket) {
	const input = {
		[parent]: lib.maybeCall(trinket)
	}
	const output = Object.entries(input)
		.map(([key, value]) => render(key, value))
		.map(e => e.get())

	TrinketRegistry.clear()
	return output
}

export function build(trinket) {
	const input = lib.maybeCall(trinket)
	const output = Object.entries(input)
		.map(([key, value]) => render(key, value))
		.map(e => e.get())

	TrinketRegistry.clear()
	return output
}

function render(parent, children) {
	const entity = TrinketRegistry.get(parent)
	if (!entity) throw new Error('invalid entity: ' + parent)

	if (typeof children !== 'object') {
		entity.set(null, children)
		return entity
	}

	for (const [child, attributes] of Object.entries(children).reduce((acc, [key, value]) => {
		const component = TrinketRegistry.get(key)

		if (!component || !key.startsWith('c/'))
			return [...acc, [key, value]]

		render(parent, component(value))

		return acc

	}, [])) {
		if (TrinketRegistry.has(child)) entity.set(null, render(child, attributes).get())
		else entity.set(child, attributes)
	}

	return entity
}

export function signal(initial) {
	// soon
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
