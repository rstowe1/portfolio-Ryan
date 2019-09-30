import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import {Row, Col} from 'reactstrap'
import {createPortfolio} from "../actions";
import portfolio from "./portfolio";

class PortfolioNew extends React.Component {
  constructor(props) {
    super();
    this.state = {
      error: undefined
    };
    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData) {
    createPortfolio(portfolioData)
      .then((portfolio) => {
        this.setState({error: undefined});
      }).catch((err) => {
      this.setState({error: err.response.data.message});
      console.error(err)
    })
  }

  render() {
    const {error} = this.state;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-create-page" title='Create a new portfolio'>
          <Row>
            <Col md="6">
              <PortfolioCreateForm initialValue={portfolio} error={error} onSubmit={this.savePortfolio}/>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(PortfolioNew);