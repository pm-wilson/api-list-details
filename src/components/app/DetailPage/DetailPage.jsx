import React from 'react';
import { getDetails } from '../services/details-api';
import '../App.css';
import { Link } from 'react-router-dom';

class DetailDisplay extends React.Component {
  state = {
    detailData: {},
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const displayData = await getDetails(id);
    this.setState({ detailData: displayData });
  }

  render() {
    if(this.state.detailData.name) {
      return (
        <div>
          <h1>Detail page for {this.state.detailData.name}</h1>
          <p>Status: {this.state.detailData.status}</p>
          <p>Species: {this.state.detailData.species}</p>
          <p>Gender: {this.state.detailData.gender}</p>
          <p>Origin: {this.state.detailData.origin.name}</p>
          <p>Location: {this.state.detailData.location.name}</p>
          <img src={this.state.detailData.image} alt={this.state.detailData.name} width="auto" height="500"/>
          <Link to="/">Back</Link>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default DetailDisplay;
