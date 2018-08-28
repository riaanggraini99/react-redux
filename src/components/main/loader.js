import React, { Component } from 'react'
import loaderImage from '../../assest/loader.gif'
import './loader.css'

export default class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <img src={loaderImage} alt="loader"/>


            </div>
        )
    }
}
