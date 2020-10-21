import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Character extends Component {
  render() {
    const { characters } = this.props;

    return (
      <div>
        {characters.map((character) => {
          return <div key={character.Name}>{character.Name}</div>;
        })}
      </div>
    );
  }
}

Character.propTypes = {
  characters: PropTypes.array,
};

export default Character;
