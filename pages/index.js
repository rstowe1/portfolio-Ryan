import React from "react";
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import {Button, Container, Row, Col} from 'reactstrap';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['Accountant', 'Lease Accounting Expert', 'Developer', 'Process Improvement', 'Business Automation', 'Technology Connoisseur', 'Team Player']
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardsAnimationInterval && clearInterval(this.cardsAnimationInterval);
  }

  animateCard() {

    this.cardsAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      })
    }, 10000);
  }

  render() {
    const {isAuthenticated, user} = this.props.auth;
    const {isFlipping} = this.state;
    return (
      <BaseLayout
        className="cover" {...this.props.auth}
        headerType='index'
        title='Ryan W. Stowe | Portfolio'>
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png"/>
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img alt='Ryan W. Stowe | Wedding Picture' className="image" src="/static/images/ME.jpg"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"/>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Get your projects done </h2>
                        <div className="hero-section-content-intro">
                          Professional and top quality web development services.
                        </div>
                      </div>
                      <img alt='Ryan W. Stowe | Wedding Picture' className="image" src="/static/images/ME.jpg"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"/>
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
                  <h2>
                    Take a look around.
                  </h2>
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