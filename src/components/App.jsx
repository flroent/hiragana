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
    this.state = {
      categories: [],
      level: '',
      error: { bool: false, type: '' }
    };
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

  changeStateLevel = level => {
    this.setState({
      ...this.state,
      level: level,
      error: { bool: false, type: '' }
    });
  };

  setErrorMode = error => {
    this.setState({
      ...this.state,
      level: '',
      error: { bool: true, type: error }
    });
  };

  render() {
    return (
      <Container style={styles.wrapper} className='App'>
        <Header />
        <HiraganaType
          categories={this.state.categories}
          onCategorieClick={this.onCategorieClick}
          addAllCategories={this.addAllCategories}
          level={this.state.level}
          changeStateLevel={this.changeStateLevel}
          setErrorMode={this.setErrorMode}
          error={this.state.error.bool}
          errorType={this.state.error.type}
        />
      </Container>
    );
  }
}

export default App;
