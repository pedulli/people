// Important context: I am evil
// The author is not responsible for any resulting brain damage from reading this code
// I may write a normal version of this if I get the time

void (function ({ A, B, C, D, E }) {
	A.button.addEventListener('click', () => A.p.classList.toggle('green'))

	B.form.addEventListener('submit', (event) => {
		event.preventDefault()
		const formData = new FormData(B.form)
		alert(`${formData.get('first')} ${formData.get('last')}`)
	})

	C.button.addEventListener('click', () => alert(C.select.options.length))

	D.p.addEventListener('mouseenter', ({ target }) =>
		target.classList.add('green'),
	)
	D.p.addEventListener('mouseleave', ({ target }) =>
		target.classList.remove('green'),
	)

	E.form.addEventListener('submit', (event) => {
		event.preventDefault()
		const { first, second } = {
			...Object.fromEntries(new FormData(E.form).entries()),
		}

		E.span.innerText =
			event.submitter.innerText === 'Divide'
				? first / second
				: first * second
	})
})(
	new Proxy(
		{},
		{
			get({}, section) {
				globalThis.cache ??= new Map()
				if (!(section instanceof Symbol))
					return new Proxy(
						{},
						{
							get(_, element) {
								const selector = `#section${section} ${element}`
								let cached = globalThis.cache.get(selector)
								if (cached) return cached
								cached = document.querySelector(selector)
								globalThis.cache.set(selector, cached)
								return cached
							},
						},
					)
			},
		},
	),
)
