import { Component } from "react";
import { connect } from "react-redux";
import { delItem } from "../actions";

class TodoList extends Component {
	render() {
		const delItem = (e) => {
			const id = e.target.parentElement.querySelector('.id').innerHTML;
			this.props.delItem(parseInt(id));
		}

		return <div className="todo-list">
			<h1>TASKS</h1>
			{ this.props.list.map( (item, index) => {
				return <div className="todo-item" key={index} >
					<div className="id hidden">{ index }</div>
					<p>{ item }</p>
					<button className="del-button" onClick={delItem} > Delete </button>
				</div>
			} ) }
		</div>
	}
}

function mapStateToProps(state) {
	return {
		list: state.list
	}
}

const mapDispatchToProps = { delItem }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)