import React from 'react'

export default ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<span href="#" className="navbar-brand">
				Navbar
				<i className="badge badge-pill badge-secondary m-2">{totalCounters}</i>
			</span>
		</nav>
	)
}
