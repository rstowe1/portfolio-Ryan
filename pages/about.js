import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout title="Ryan W. Stowe - Learn More About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, </h1>
                <h4 className="subtitle fadein">Welcome To My About Page</h4>
                <p className="subsubTitle fadein">Feel free to read along.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>Ryan Walker is a Fullstack developer with an emphasis in UI/UX engineering. Ryan has received his Full Stack certification from Georgia Tech, as well as working towards a certification in the use of the Amazon Web Server service.
                </p>

                  <p>It is Ryan’s, admittedly audacious goal to help modernize family businesses for the 21st century. He has worked primarily in the private sector and his time in the private sector has made him into a swiss army knife of web development. Due to lack of company resources it had become incumbent on Ryan to fill the void for the organizations he’s worked for, he’s helped to install various systems that inured toward organizational stability and prosperity at law firms such as a "white-Shoe Firm", finance companies such Silverton Mortgage, and lease accounting software SaaS company LeaseQuery.
                  </p>

                  <p>Ryan’s core belief is that if we can separate ego and help each other then there is no telling what can be accomplished. Ryan’s work with various forms of marketing analytics has helped him amass an innumerable component library that has helped him craft protocols that can be retrofitted as a bespoke approach for any business regardless of industry.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;