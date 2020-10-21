import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Character extends Component {
  render() {
    const { characters } = this.props;

    return (
      <div>
        {characters.map((character) => {
          return <Link className="character-name" to={`/quote/${character.id}`} key={character.id}>{character.name}</Link>;
        })}
      </div>
    );
  }
}

Character.propTypes = {
  characters: PropTypes.array,
};

export default Character;
