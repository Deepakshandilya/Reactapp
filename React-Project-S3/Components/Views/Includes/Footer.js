import React from 'react'

import { Link } from 'react-router-dom'
import env from "./../../Config/Env"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col-12">
                        <p>Copyright © 2021 SHUBHAM. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer