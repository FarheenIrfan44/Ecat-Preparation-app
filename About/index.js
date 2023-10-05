import React, { useState } from 'react';
<>
  {/* About lightbox*/}
  <div className="lightbox-wrapper" id="about" data-simplebar="">
    <div className="container">
      <div className="lightbox-close">
        <div className="close-btn" data-modal-close="">
          <span className="btn-line" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="lightbox-content">
            <div className="row">
              <div className="col-12">
                <div className="section-heading page-heading">
                  <p className="section-description">Get to know me</p>
                  <h2 className="section-title">About Me</h2>
                  <div className="animated-bar" />
                </div>
              </div>
            </div>
            {/* Info section*/}
            <div className="info-section single-section">
              <div className="row align-items-center">
                {/* Picture part*/}
                <div className="col-12 col-lg-5 info-img">
                  <img
                    className="img-fluid img-thumbnail"
                    src="img/info-img.jpg"
                    alt="About Picture"
                  />
                </div>
                {/* Content part*/}
                <div className="col-12 col-lg-7 info-content">
                  <div className="content-block">
                    <h2 className="content-subtitle">Who am i?</h2>
                    <h6 className="content-title">
                      I'm Emma Smith, a visual UX/UI Designer and Web Developer
                    </h6>
                    <div className="content-description">
                      <p>
                        I am a freelancer based in the United Kingdom and i have
                        been building noteworthy UX/UI designs and websites for
                        years, which comply with the latest design trends. I
                        help convert a vision and an idea into meaningful and
                        useful products. Having a sharp eye for product
                        evolution helps me prioritize tasks, iterate fast and
                        deliver faster.
                      </p>
                    </div>
                    <address className="content-info">
                      <div className="row">
                        <div className="col-12 col-md-6 single-info">
                          <span>Name:</span>
                          <p>Emma Smith</p>
                        </div>
                        <div className="col-12 col-md-6 single-info">
                          <span>Email:</span>
                          <p>
                            <a href="mailto:emma@example.com">
                              emma@example.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 single-info">
                          <span>Age:</span>
                          <p>21</p>
                        </div>
                        <div className="col-12 col-md-6 single-info">
                          <span>From:</span>
                          <p>Liverpool, UK</p>
                        </div>
                      </div>
                    </address>
                    <div className="d-block d-sm-flex align-items-center">
                      <a
                        className="btn content-download button-main button-scheme"
                        href="#0"
                        role="button"
                      >
                        Download CV
                      </a>
                      <ul className="list-unstyled list-inline content-follow">
                        <li className="list-inline-item">
                          <a href="#0">
                            <i className="icon ion-logo-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#0">
                            <i className="icon ion-logo-instagram" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#0">
                            <i className="icon ion-logo-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#0">
                            <i className="icon ion-logo-github" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#0">
                            <i className="icon ion-logo-facebook" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
