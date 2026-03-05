import * as trinket from './trinket.js'
import html, { input } from './html.js'

const output = trinket.build({
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
				[input.requiredRadio('experience')]: 'Beginner',
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

		[html.button]: 'Submit Form'
	}
})

for (const element of output)
	document.body.appendChild(element)
