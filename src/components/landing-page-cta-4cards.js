import React from 'react'
import Layout from '../layouts/layout1'
import Kitchen1 from '../imgs/naomi-hebert-MP0bgaS_d1c-unsplash.jpg'
import Kitchen2 from '../imgs/rustic-vegan-z3QZ6gjGRt4-unsplash.jpg'
import Kitchen3 from '../imgs/sidekix-media-I_QC1JICzA0-unsplash.jpg'
import Kitchen4 from '../imgs/sidekix-media-VYI9oIKl1wE-unsplash.jpg'





export default function component1() {
    return (
<Layout>

    <section className="bg-light">
    <div className="container">
        <header className="jumbotron my-4 text-center">
        <h1 className="display-3">A Warm Welcome!</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
        <a href="/contact" className="btn btn-primary btn-lg">Call to action!</a>
        </header>

    <div className="row text-center">

      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src={Kitchen1} alt=""/>
          <div className="card-body">
            <h4 className="card-title">Quartz Countertops</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div className="card-footer">
            <a href="http://eastcoast-granite.com/products/countertops/quartz" className="btn btn-primary">Save On Quartz Countertops!</a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src={Kitchen2} alt=""/>
          <div className="card-body">
            <h4 className="card-title">Quartzite Countertops</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
          </div>
          <div className="card-footer">
            <a href="http://eastcoast-granite.com/products/countertops/quartz" className="btn btn-primary">Save On Quartzite Countertops!</a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src={Kitchen3} alt=""/>
          <div className="card-body">
            <h4 className="card-title">Granite Countertops</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div className="card-footer">
            <a href="http://eastcoast-granite.com/products/countertops/granite" className="btn btn-primary">Save On Granite Countertops!</a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src={Kitchen4} alt=""/>
          <div className="card-body">
            <h4 className="card-title">Marble Countertops</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
          </div>
          <div className="card-footer">
            <a href="http://eastcoast-granite.com/products/countertops/marble" className="btn btn-primary">Save On Marble Countertops!</a>
          </div>
        </div>
      </div>

    </div>
  </div>


</section>
</Layout>
    )
}
