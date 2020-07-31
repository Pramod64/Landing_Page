import React, { Component } from 'react'

export default class Header extends Component{
    render(){
        return(
    <div class="hero-area">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-7">
              <div class="hero-content">
                  <h5>Present your service</h5>
                  <h2>Make landing page fast and easily.</h2>
                  <p>Create custom landing pages with Shades that convert more visitors than any website—no coding required.</p>
              </div>
            </div>
           
            <div class="col-lg-7 col-xl-6">
                <div class="subscription-form">
                  <form action="">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Enter your email"></input>
                          <button class="submit-btn btn--hover-shine ">Subscribe</button>
                        </div>
                        <p class="form-text">Trused by over 50,000+ customers</p>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </div>
        )
    }
}
