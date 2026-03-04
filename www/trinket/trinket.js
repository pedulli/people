const GlobalRegistry = new Map
let current = null

export function build(trinket) {
	const input = typeof trinket === 'function' ? trinket() : trinket
	const output = Object.entries(input)
		.map(([key, value]) => render(key, value))
		.map(e => e.get())

	GlobalRegistry.clear()
	return output
}

function render(parent, children) {
	const entity = GlobalRegistry.get(parent)
	if (!entity) throw new Error('invalid entity: ' + parent)

	if (typeof children !== 'object') {
		entity.set(null, children)
		return entity
	}

	for (const [child, attributes] of Object.entries(children).reduce((acc, [key, value]) => {
		const component = GlobalRegistry.get(key)

		if (!component || !key.startsWith('c/'))
			return [...acc, [key, value]]

		render(parent, component(value))

		return acc

	}, [])) {
		if (GlobalRegistry.has(child)) entity.set(null, render(child, attributes).get())
		else entity.set(child, attributes)
	}

	return entity
}

export function createEntity(ext) {
	function getRef(property, ...extra) {
		const entity = ext(property, ...extra)
		if (!entity) throw new Error('invalid entity')
		const id = `e/${crypto.randomUUID()}`
		GlobalRegistry.set(id, entity)

		return id
	}
	return new Proxy({}, {
		get: (_, property) =>
			Object.assign(
				(...extra) => getRef(property, ...extra),
				{ [Symbol.toPrimitive]: () => getRef(property, []) })
	})
}

export function createComponent(cb) {
	function getSymbol(...type) {
		const id = `c/${crypto.randomUUID()}`
		GlobalRegistry.set(id, (attributes) => cb(type, attributes))

		return id
	}

	return Object.assign(getSymbol, { [Symbol.toPrimitive]: () => getSymbol([]) })
}

export function signal(initial) {
	// soon
}