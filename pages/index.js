import React from "react";
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import {Button, Container, Row, Col} from 'reactstrap';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.roles = ['Accountant', 'Lease Accounting Expert', 'Developer', 'Process Improvement', 'Business Automation', 'Technology Connoisseur', 'Team Player']
  }

  render() {
    const {isAuthenticated, user} = this.props.auth;
    return (
      <BaseLayout className="cover" {...this.props.auth} headerType='index'>
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png"/>
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/static/images/ME.jpg"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {isAuthenticated && <span><b>{user.name}</b> </span>}
                    Welcome to the portfolio website of Ryan W Stowe.
                    Get informed, collaborate and discover projects I have worked on through the years!
                  </h1>
                </div>

                <Typed
                  loop
                  typeSpeed={65}
                  backSpeed={65}
                  strings={this.roles}
                  shuffle={true}
                  backDelay={1050}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />

                <div className="hero-welcome-bio">
                  <h1>
                    Take a look around.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>


    )
  }
}

export default Index;