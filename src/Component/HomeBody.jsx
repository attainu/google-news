import React, { Component } from 'react'
import NewsCard from './NewsCard'
import WeatherCard from './WeatherCard'
import './css/HomeBody.css'

class HomeBody extends Component {
    render() {
        return (
            <section className='homeBody'>
                <section className='topCards' >
                    <NewsCard/>
                    <WeatherCard/>
                </section>
                Home Page
            </section>
        )
    }
}

export default HomeBody
