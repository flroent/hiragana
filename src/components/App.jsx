import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import HiraganaType from './HiraganaType';

const styles = {
  wrapper: { fontFamily: "'Rubik', sans-serif" }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: [], gameMode: [], cells: 0 };
  }

  addCategorieToState = categorie => {
    this.setState(({ categories }) => ({
      ...this.state,
      categories: [...categories, categorie]
    }));
  };

  removeCategorieToState = categorie => {
    this.setState(({ categories }) => ({
      ...this.state,
      categories: categories.filter(
        actualCategories => actualCategories !== categorie
      )
    }));
  };

  onCategorieClick = categorie => {
    return () =>
      this.state.categories.includes(categorie)
        ? this.removeCategorieToState(categorie)
        : this.addCategorieToState(categorie);
  };

  addAllCategories = array => {
    return () => {
      const allCategories = [];
      array.map(categories =>
        categories.map(categorie => allCategories.push(categorie))
      );
      allCategories.forEach(categorie => {
        if (!this.state.categories.includes(categorie)) {
          this.addCategorieToState(categorie);
        }
      });
    };
  };

  render() {
    return (
      <Container style={styles.wrapper} className='App'>
        <Header />
        <HiraganaType
          categories={this.state.categories}
          onCategorieClick={this.onCategorieClick}
          addAllCategories={this.addAllCategories}
        />
      </Container>
    );
  }
}

export default App;
