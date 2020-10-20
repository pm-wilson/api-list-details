import React from 'react';
import { getCharacters } from '../services/characters-api';

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
        <div>
          {this.state.data.map((character, i) => {
            return <div key={character.Name}>{character.Name}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default ListPage;