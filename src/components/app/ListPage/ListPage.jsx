import React from 'react';
import { getCharacters } from '../services/characters-api';
import Character from '../DetailPage/Character';

class ListPage extends React.Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const characters = await getCharacters();
    this.setState({ data: characters });
  }

  render() {
    return (
      <div>
        <h1>Futurama Quote Finder</h1>
        <h3>Characters:</h3>
        <Character characters={this.state.data}/>
      </div>
    );
  }
}

export default ListPage;
