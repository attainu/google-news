import React, { Component } from 'react'
import Navbar from '../Component/Navbar'
import './css/HomePage.css'

export class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default Homepage
