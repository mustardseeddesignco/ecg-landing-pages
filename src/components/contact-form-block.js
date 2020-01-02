import React from 'react'
import Layout from '../layouts/layout1'
import ContactForm from '../components/form/contact'


export default function contact() {
    return (
        <Layout>
        <div className="bg-light">
            <div className="container py-5">
                <div className="d-flex flex-column flex-lg-row">
                    <div className="col">
                    <h1 className="text-uppercase display-4">custom kitchen countertops</h1>
                    <h3 className="display-5">Installed Today!</h3>
                    <p>Nisi nulla ex pariatur eu eiusmod sunt fugiat pariatur nisi aliquip nisi culpa. Magna amet id et et velit anim incididunt magna fugiat aute commodo amet labore anim. Eiusmod aute consectetur pariatur labore aliquip nostrud deserunt cupidatat tempor minim excepteur do. Cillum nulla veniam eu dolore id. Proident non tempor pariatur dolor Lorem non. Esse ad laboris culpa fugiat ullamco consequat duis proident proident labore.</p>
                    </div>
                    <div className="col">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}
