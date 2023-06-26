import React from 'react'

import { connect } from 'react-redux'

import env from './../../Config/Env'
import { withRouter } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { isEmpty } from './../../Helpers/Helper'
import StoreManager from './../../Config/StoreManager'

const storeManager = new StoreManager();

class Header extends React.Component {

	constructor() {
		super()
		this.logOutUser = this.logOutUser.bind(this)
	}

	logOutUser() {
		storeManager.reset()
		location.href = location.origin
	}

    render() {
        return (
            <header>
		    	<div className="row">
			        <nav className="navbar navbar-expand-lg navbar-light py-0">
			            <div className="logo-section col-md-12">
			                <h1>Sample React APP for <span className="red-text">AWS CodePipeline</span></h1>
			                <hr/>
			            </div>
			        </nav>
		        </div>
			</header>
        )
    }
}

const mapStateToProps = (state, ownProps = {}) => {
    return {
        users: state.users
    }
}

export default withRouter(connect(mapStateToProps)(Header))