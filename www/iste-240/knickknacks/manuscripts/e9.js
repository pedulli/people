import * as trinket from '../../../trinket/trinket.js'
import html, { inputUtil } from '../../../trinket/html.js'
const { required, optional } = inputUtil

const output = trinket.build({
	[html.form]: {
		method: 'POST',
		action: 'https://wp.zybooks.com/form-viewer.php',

		[required.text('fullName')]: 'Full Name: ',
		[required.email('email')]: 'Email Address: ',
		[optional.tel('phone')]: 'Phone Number: ',
		[required.date('date')]: 'Choose a Date: ',

		[html.section]: {
			[html.h2]: "Technologies",

			[html.fieldset]: {
				[html.legend]: 'Experience Level',
				[required.radio('experience')]: 'Beginner',
				[optional.radio('experience')]: 'Intermediate',
				[optional.radio('experience')]: 'Advanced',
			},

			[html.fieldset]: {
				[html.legend]: 'Topics of Interest',
				[optional.checkbox('topics[]')]: 'HTML',
				[optional.checkbox('topics[]')]: 'CSS',
				[optional.checkbox('topics[]')]: 'JavaScript',
			}
		},

		[html.label]: {
			textContent: 'Extra Comments',
			[html.textArea]: {
				name: 'comments'
			}
		},

		[html.button]: 'Register for Workshop'
	}
})

for (const element of output)
	document.body.appendChild(element)