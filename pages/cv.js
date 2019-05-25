import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Cv extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1> This is my CV... you should take a look! </h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Cv;