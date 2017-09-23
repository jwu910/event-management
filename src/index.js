'use strict'; // Why?

import JSXComponent from 'metal-jsx';
import InputField from './components/InputField';

class Form extends JSXComponent {

	render() {
		return (
			<div class="border" id="form">
				<h1>{this.props.headerText}</h1>
				<InputField
					Id="FullName"
					placeholder="Full Name"
					maxLength={15}
				/>
				<InputField
					Id="Age"
					placeholder="Age"
					pattern="[0-9]{1,3}"
					maxLength={3}
				/>
				<h4>Hallooo</h4>
			</div>
		)
	}
}

Form.PROPS = {
	headerText: {
		value: "This is some default Header Text"
	}
}

export { Form };
export default Form;