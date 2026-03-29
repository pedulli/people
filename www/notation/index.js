import 'https://cdn.jsdelivr.net/npm/@tabmate/core/dist/tabmate.umd.min.js'

let references = 'must exist in'

window.tabmate.tabmate(input)
input.addEventListener('input', go)
mei.addEventListener('input', ({ target }) => go(references = target.checked ? 'mei' : 'must exist in'))

go()

function go() {
	const value = input.value
	const tables = {}
	const rawTables = value.matchAll(/(?<tableName>[a-z][a-z0-9$_]{0,63})\s{0,}\(\s{0,}(?<pk>(?:[a-z0-9$_](?:\s{0,}=\s{0,}[a-z0-9_$]{0,}\.[a-z0-9$_]{0,})?[,\s;]{0,}\s{0,}){1,}\s{0,})\)(?:(?:\s{0,}{\s{0,}(?<keys>(?:[a-z0-9$_](?:\s{0,}=\s{0,}[a-z0-9$_]{0,}\.[a-z0-9$_]{0,})?[,\s;]{0,}\s{0,}){0,})\s{0,}})|(?!\s{0,}{)|\s{0,}{\s{0,}}|\s{0,}\{)/img)

	for (const { groups: { tableName, pk, keys } } of rawTables) {
		const name = tableName.toUpperCase()
		if (name in tables) continue
		tables[name] = columns(pk, keys)
		if (!tables[name]) delete tables[name]
	}

	output.innerHTML = ''

	for (const [tableName, columnData] of Object.entries(tables)) {
		const table = []
		let primaryFound = false
		let refs = []

		for (const [key, { primary, foreign }] of Object.entries(columnData).reverse()) {
			let column = key.toLowerCase()

			if (foreign) {
				if (tables[foreign.table]?.[foreign.column]?.primary !== true) continue
				refs.push(`<div>	${tableName}(${key}) ${references} ${foreign.table}(${foreign.column})</div>`)
				column = `<i>${column}<i>`
			}

			if (primary) {
				primaryFound = true
				column = `<u>${column}</u>`
			}

			table.push(column)
		}

		if (!primaryFound) continue

		output.innerHTML += `<div>${tableName}(${table.join(', ')})</div>${refs.join('')}<br>`
	}
}

function columns(pk, keys) {
	const normalize = (key) => key ? key.trim().replace(/( |,|;)\1+/g, '$1').replace(/\n+/g, ',').replaceAll(';', ',').split(',').map(k => k.trim()).filter(Boolean) : []
	const resolve = (key, primary) => {
		if (key.includes('=')) {
			const [table, column] = key.split(' = ')[1].split('.')
			return [key.split(' = ')[0].replaceAll(' ', '_').toLowerCase(), {
				foreign: { table: table.toUpperCase(), column: column.replaceAll(' ', '_').toLowerCase() },
				primary,
			}]
		} else return [key.replaceAll(' ', '_').toLowerCase(), {
			foreign: false,
			primary,
		}]
	}

	const primaryKeys = normalize(pk)
	const normalKeys = normalize(keys)

	if (!primaryKeys.length) return

	return {
		...Object.fromEntries(normalKeys.reverse().map(key => resolve(key))),
		...Object.fromEntries(primaryKeys.reverse().map(key => resolve(key, true)))
	}
}