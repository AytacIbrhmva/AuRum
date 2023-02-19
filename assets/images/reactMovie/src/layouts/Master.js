import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'

export default class Master extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
