import React from "react"
import CTA4Cards from '../components/landing-page-cta-4cards'
import CTA3Cards from '../components/material-cards'
import SimpleLanding from '../components/simple-landing-page'
import ContactFormBlock from '../components/contact-form-block'

export default () => (
    <div>
          <h1 className="ml-5 pt-5 pb-5">Landing Page CTA 4 Cards</h1>
            <CTA4Cards />
        <h1 className="ml-5 pt-5 pb-5">CTA 3 Cards</h1>
            <CTA3Cards/>
        <h1 className="ml-5 pt-5 pb-5">CTA 3 Cards</h1>
            <SimpleLanding/>
        <h1 className="ml-5 pt-5 pb-5">Contact Form Block</h1>
            <ContactFormBlock />
    </div>
)


