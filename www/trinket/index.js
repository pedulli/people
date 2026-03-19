import * as $ from './trinket.js'
import html, { input } from './html.js'

$.mount(html.body(document.body), function () {

	const state = $.signal(1)

	return ({
		[html.form]: {
			method: 'POST',
			action: 'https://wp.zybooks.com/form-viewer.php',

			[input.requiredText('fullName')]: 'Full Name: ',
			[input.requiredEmail('email')]: 'Email Address: ',
			[input.tel('phone')]: 'Phone Number: ',
			[input.requiredDate('date')]: 'Choose a Date: ',

			[html.section]: {
				[html.h2]: $.signal(() => state.value + 1),

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

			[html.button]: 'Submit Form'
		}
	})
})
