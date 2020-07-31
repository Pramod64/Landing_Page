import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="site-wrapper">
            <header class="site-header">
                <div class="container">
                    <div class="row justify-content-center align-items-center position-relative">
                      <div class="col-sm-3 col-6 col-lg-2 col-xl-2 order-lg-1">
                      <div class="brand-logo">
                        <a href="#logo"><img src="image/main-logo.png" alt="" /></a>
                        </div>
                      </div>
                      <div class="col-sm-8 col-lg-3 col-xl-3 d-none d-sm-block order-lg-3 offset-xl-1">
                    <div class="header-btns justify-content-end">
                        <a href="" class="btn btn-outlined--primary btn-sm">Get started</a>
                    </div>
                </div>
                      <div class="col-sm-1 col-6 col-lg-7 col-xl-6  position-static order-lg-2">
                    <div class="main-navigation">
                        <ul class="main-menu">
                            <li class="menu-item has-dropdown">
                                <a href="#features">Free Landing Pages</a>
                                    <ul class="menu-dropdown">
                                        <li class="single-item">
                                            <a href="">
                                            <h3>Mobile Application</h3> 
                                            <p>Best for Mobile App Presentation</p>
                                            </a>
                                        </li>
                                        <li class="single-item">
                                            <a href="">
                                                <h3>Web Application</h3>
                                                <p>Best for Mobile App Presentation</p>
                                            </a> 
                                        </li>
                                        <li class="single-item">
                                            <a href="">
                                                <h3>SaaS Application</h3>
                                            <p>Best for Mobile App Presentation</p>
                                        </a> 
                                        </li>
                                        <li class="single-item">
                                            <a href="">
                                                    <h3> SaaS Subscription</h3>
                                                <p>Best for Mobile App Presentation</p>
                                            </a> 
                                        </li>
                                    </ul>
                                </li>
                            <li class="menu-item "><a href="#features">Features</a></li>
                    
                            <li class="menu-item"><a href="#">Services</a></li>
                    
                            <li class="menu-item"><a href="#pricing">Pricing</a></li>
                    
                            <li class="menu-item"><a href="#contact">Contact</a></li>   
                            </ul>
                    </div>
                    <div class="mobile-menu"></div>
                </div>
                    </div>
                </div>
                </header>
        </div>
      </div>
     
    )
  }
}
