import React from 'react'
import Computer from '../Computer.svg';

export default function Home() {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
            <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <h1>
                  Boost your problem solving speed with
                  <strong className='brand-name'> Zummit online test</strong>
                </h1>
                <h2 className='my-3'>
                  We have team of more experience Teacher
                </h2>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img my-3'>
                <img src={Computer} className='img-fluid animated' alt='computer img' style = {{ width: "600px", height:"inherit"}}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
