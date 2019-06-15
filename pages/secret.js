import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth'

class Secret extends React.Component {

  // renderSecretPage() {
  //   const {isAuthenticated} = this.props.auth;
  //
  //   if (isAuthenticated) {
  //     return (
  //       <BaseLayout {...this.props.auth}>
  //         <BasePage>
  //           <h1> This is my secret page! </h1>
  //           <p>Secret Content Here</p>
  //         </BasePage>
  //       </BaseLayout>
  //     )
  //
  //   } else {
  //     return (
  //       <BaseLayout {...this.props.auth}>
  //         <BasePage>
  //           <h1> You are not logged in </h1>
  //         </BasePage>
  //       </BaseLayout>
  //     )
  //   }
  // }


  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1> This is my secret page! </h1>
          <p>Secret Content Here</p>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(Secret);