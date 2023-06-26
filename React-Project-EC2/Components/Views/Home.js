import React from 'react'

import { Link } from 'react-router-dom'

import env from "./../Config/Env"
import MainPageLayout from './Layouts/MainPageLayout'

class Home extends React.Component {
	constructor() {
		super();

        this.randon_number = Math.floor((Math.random() * 100) + 1)

        this.generateUserName = this.generateUserName.bind(this)
	}

    generateUserName() {
        let name = this.refs.name.value
        let username = name + "_" + this.randon_number.toString()

        this.refs.username.value = username
    }

    render() {
        return (
            <MainPageLayout> 
            	<main>
                    <div className="row"> 
                        <div className="col-md-12">
                            <p className="btn btn-primary version-text">Version 1.0</p>
                        </div>
                        <div className="col-md-12">
                            <h4>Congratulations! You successfully built and deployed your code.</h4>
                        </div>
                        <div className="col-md-12 body">
                            <p>This is a sample application to generate username based on the name you provide.</p>
                        </div>
                        <form action="javascript:void(0)">
                            <div className="form-row align-items-center">
                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                                    <input type="text" ref="name" onChange={this.generateUserName} className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
                                </div>
                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input type="text" ref="username" className="form-control" id="inlineFormInputGroup" placeholder="Username" disabled />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>  
                </main>
            </MainPageLayout>
        )
    }
}

export default Home