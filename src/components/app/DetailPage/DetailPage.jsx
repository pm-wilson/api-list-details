import React from 'react';
import { getDetails } from '../services/details-api';

class DetailDisplay extends React.Component {
  state = {
    detailData: {},
  }

  async componentDidMount() {
    const id = window.location.search.slice(1);
    const displayData = await getDetails(id);
    this.setState({ detailData: displayData });
  }

  render() {
    if(this.state.detailData.name) {
      return (
        <div>
          <h1>Detail page for {this.state.detailData.name}</h1>
          <div>Status: {this.state.detailData.status}</div>
          <div>Species: {this.state.detailData.species}</div>
          <div>Gender: {this.state.detailData.gender}</div>
          <div>Origin: {this.state.detailData.origin.name}</div>
          <div>Location: {this.state.detailData.location.name}</div>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default DetailDisplay;
