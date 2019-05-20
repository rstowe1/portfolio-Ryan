import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends React.Component {

  constructor(props){
    super(props);
    this.someVariable = 'just some variable'
  }

  alertName (title) {
    alert(title);
  }
  render() {
    <BaseLayout>
      <h1>Lets see where this goes</h1>
    </BaseLayout>
  }
}

export default SuperComponent;