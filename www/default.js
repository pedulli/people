if (location.host === 'people.rit.edu' && !location.pathname.startsWith('/~')) {
	location.pathname = `/~${location.pathname.slice(1)}`
}

let darkTheme = localStorage.getItem('darkTheme') === 'true'

if (darkTheme) document.body.classList.add('dark')

themeSwitcherButton?.addEventListener('click', () => {
	document.body.classList.toggle('dark')
	localStorage.setItem('darkTheme', (darkTheme = !darkTheme))
})
