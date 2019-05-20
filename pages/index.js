import React from "react";
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent'
import axios from 'axios';


class Index extends SuperComponent {

  static async getInitialProps() {
    let userData = {};

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      userData = response.data;
    } catch (e) {
      console.error(e);
    }

    return {initialData: [1, 2, 3, 4], userData};
  }

  constructor(props) {
    super(props);

    this.state = {
      title: 'I am an Index Page'
    };

    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }


  updateTitle = () => {
    this.setState({title: 'this is my updated index page..'});
  };

  render() {
    const {title} = this.state;
    const {userData, initialData} = this.props;

    return (
      <BaseLayout>
        <h1>This is my index page!</h1>
        <h2>{title}</h2>
        <h2>{userData.title}</h2>
        <button onClick={this.updateTitle}>Change Title</button>
      </BaseLayout>
    )
  }
}

export default Index;