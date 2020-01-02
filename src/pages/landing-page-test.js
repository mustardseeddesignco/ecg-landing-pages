import React from 'react'
import Layout from '../layouts/layout1'
import ContactForm from '../components/form/contact'
import CTA4Cards from '../components/landing-page-cta-4cards'
import CTA3Cards from '../components/material-cards'

export default () => (
    <Layout>
        <h1>Test</h1>
        <CTA4Cards />
        <CTA3Cards />
        <div className="p-5">
        <ContactForm />
        </div>
    </Layout>
)