'use strict'; // Why?

import JSXComponent from 'metal-jsx';
import {bindAll, uniqueId} from 'lodash';


class InputField extends JSXComponent {
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		value_:
	// 	}
	// }
	_updateFieldValue(event) {
		this.setState({textValue_: event.target.value})

		if (this.props.textValue_.length > parseInt(this.props.maxLength)) {
			this.props.textValue_ = '';
			event.target.value = '';
			alert('Max length of ' + this.props.maxLength + ' exceeded!');
		}
	}
	render() {
		return (
			<div class="block">
				<input type="text"
					class="input-field"
					id={"input" + this.props.Id}
					onInput={this._updateFieldValue.bind(this)}
					pattern={this.props.pattern}
					placeholder={this.props.placeholder}
				/>
			<h3>h{this.props.textValue_}</h3>
			</div>
		)
	}
}

InputField.state = {
	setter: '_updateFieldValue',
	value_: {
		value: "TEST"
	}
}

InputField.PROPS = {
	placeholder: "Input Field Default Placeholder Text",
	pattern: ""
}

export default InputField