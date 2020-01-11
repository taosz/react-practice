import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Counters from './components/Counters'

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 4 }
		]
	}

	constructor() {
		super()
		this.handleDelete = this.handleDelete.bind(this)
		this.handleIncrement = this.handleIncrement.bind(this)
		this.handleReset = this.handleReset.bind(this)
	}

	handleDelete(counterId) {
		const counters = this.state.counters.filter(c => c.id !== counterId)
		this.setState({ counters })
	}

	handleIncrement(counterId) {
		const counters = this.state.counters.map(counter => {
			counter.id === counterId && counter.value++
			return counter
		})
		this.setState({ counters })
	}

	handleReset() {
		const counters = this.state.counters.map(counter => ({ ...counter, value: 0 }))
		console.log(counters)
		this.setState({ counters })
	}

	render() {
		return (
			<React.Fragment>
				<Navbar totalCounters={this.state.counters.filter(counter => counter.value).length} />
				<Counters
					onDelete={this.handleDelete}
					onIncrement={this.handleIncrement}
					onReset={this.handleReset}
					counters={this.state.counters}
				/>
			</React.Fragment>
		)
	}

}

export default App
