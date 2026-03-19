import { html, trinket, util } from "../trinket.js"

const counter = trinket(1)

export default {
	[html.form]: util.form(({ optional, required }) => ({
		method: 'post',
		action: 'https://wp.zybooks.com/form-viewer.php',

		[required.text('fullName')]: 'Full Name: ',
		[required.email('email')]: 'Email Address: ',
		[optional.tel('phone')]: 'Phone Number: ',
		[required.date('date')]: 'Choose a Date: ',

		[html.section]: {
			[html.h2]: "Technologies",

			[html.fieldset]: {

			}
		}
	}))
}
// ...util.fields(() => ({
// 	[required.text('fullName')]: 'Full Name: ',
// 	[required.email('email')]: 'Email Address: ',
// 	[optional.tel('phone')]: 'Phone Number: ',
// 	[required.date('date')]: 'Choose a Date: '
// })),

// [html.section]: {
// 	[html.h2]: "Technologies",

// 	[html.fieldset]: {
// 		[html.legend]: 'Experience Level',
// 		[html.span]: 'Select your experience level: ',

// 		...util.fields(({ required, optional, fieldset }) => ({
// 			[fieldset('Experience Level')]: {
// 				[required.radio('experience')]: 'Beginner',
// 				[optional.radio('experience')]: 'Intermediate',
// 				[optional.radio('experience')]: 'Advanced',
// 			},

// 			[fieldset('Topics of Interest')]: {
// 				[optional.checkbox('topics[]')]: 'HTML',
// 				[optional.checkbox('topics[]')]: 'CSS',
// 				[optional.checkbox('topics[]')]: 'JavaScript',
// 			}
// 		}))
// 	},


// }
// }
