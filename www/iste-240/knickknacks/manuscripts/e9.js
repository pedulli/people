import * as trinket from '../../../trinket/trinket.js'
import html, { input } from '../../../trinket/html.js'

trinket.mount(html.body(document.body), {
	[html.form]: {
		method: 'POST',
		action: 'https://wp.zybooks.com/form-viewer.php',

		[input.requiredText('fullName')]: 'Full Name: ',
		[input.requiredEmail('email')]: 'Email Address: ',
		[input.tel('phone')]: 'Phone Number: ',
		[input.requiredDate('date')]: 'Choose a Date: ',

		[html.section]: {
			[html.h2]: "Technologies",

			[html.fieldset]: {
				[html.legend]: 'Experience Level',
				[input.radio('experience', { checked: true })]: 'Beginner',
				[input.radio('experience')]: 'Intermediate',
				[input.radio('experience')]: 'Advanced',
			},

			[html.fieldset]: {
				[html.legend]: 'Topics of Interest',
				[input.checkbox('topics[]')]: 'HTML',
				[input.checkbox('topics[]')]: 'CSS',
				[input.checkbox('topics[]')]: 'JavaScript',
			}
		},

		[html.button]: 'Register for Workshop'
	}
})