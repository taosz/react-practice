import React, { Component } from 'react'

class Counter extends Component {
	state = {
		count: this.props.counter.value
	}

	render() {
		return (
			<React.Fragment>
				<h4>Counter #{this.props.counter.id}</h4>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter.id)}
					className="btn btn-secondary "
				>Increment
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2"
				>Delete
				</button>
			</React.Fragment>
		)
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-'
		classes += this.props.counter.value === 0 ? 'warning' : 'primary'
		return classes
	}

	formatCount() {
		const { value } = this.props.counter
		return value === 0 ? 'Zero ' : value
	}
}

export default Counter
