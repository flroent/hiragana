import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Header from './Header';
import HiraganaType from './HiraganaType';
import GameType from './GameType';

const styles = {
  buttonDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '4em'
  },
  wrapper: { fontFamily: "'Rubik', sans-serif" }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], gameMode: [], cells: 0 };
  }

  addCategorieToState = categorie => {
    this.setState({
      ...this.state,
      categories: [...this.state.categories, categorie]
    });
  };

  removeCategorieToState = categorie => {
    this.setState({
      ...this.state,
      categories: this.state.categories.filter(
        actualCategories => actualCategories !== categorie
      )
    });
  };

  onCategorieClick = categorie => {
    return () =>
      this.state.categories.includes(categorie)
        ? this.removeCategorieToState(categorie)
        : this.addCategorieToState(categorie);
  };

  render() {
    return (
      <Container style={styles.wrapper} className='App'>
        <Header />
        <HiraganaType
          categories={this.state.categories}
          onCategorieClick={this.onCategorieClick}
        />
        <GameType />
        <div style={styles.buttonDiv}>
          <Button variant='primary' size='lg'>
            Play
          </Button>
        </div>
      </Container>
    );
  }
}

export default App;
