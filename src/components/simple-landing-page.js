import React from 'react'
import './simple-landing-page.css'
import Layout from '../layouts/layout1'

export default function simplelandingpage() {
    return (
        <Layout>
        <section className="bg p-5 text-sm-left text-lg-right">
            <h1 className="text-white text-uppercase display-2 text-shadow">custom kitchen countertops</h1>
            <h3 className="text-white text-uppercase display-5 pb-4 text-shadow">Get them today</h3>
            <a class="btn btn-info text-uppercase cta-btn" href="#">Find Out More</a>
            <div>
        <br/>
        </div>
        </section>
        <section>

        </section>
        </Layout>
    )
}
