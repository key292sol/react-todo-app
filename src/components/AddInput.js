import { Component } from "react";
import { connect } from "react-redux";

import { addItem } from "../actions";

class AddInput extends Component {
	state ={
		text: ''
	}

	render() {
		const handleChange = (e) => {
			this.setState({ text: e.target.value })
			// console.log(e.target.value, this.state)
		}

		const addTodoItem = (e) => {
			this.props.addItem(this.state.text)
			this.setState({ text: '' })
			e.preventDefault();
		}

		return <div className="add-input">
			<form onSubmit={addTodoItem} >
				<input type="text" onChange={handleChange} text={this.state.text} />
				<input type="submit" value="Add" />
			</form>
		</div>
	}
}

const mapDispatchToProps = { addItem }

export default connect(null, mapDispatchToProps)(AddInput)