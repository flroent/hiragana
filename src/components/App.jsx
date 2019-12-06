import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import HiraganaType from './HiraganaType';
import Play from './Play';
import Error404 from './Error404';

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

  resetLevel = deletedCategorie => {
    const { categories, level } = this.state;
    const numberOfCategories = categories.length - 1;
    if (
      (level === '4' && numberOfCategories === 0) ||
      (level === '8' && numberOfCategories < 2) ||
      (level === '16' && numberOfCategories < 3)
    ) {
      this.setState(({ categories }) => ({
        ...this.state,
        categories: categories.filter(
          categorie => categorie !== deletedCategorie
        ),
        level: ''
      }));
    }
  };

  removeCategorieToState = categorie => {
    this.setState(({ categories }) => ({
      ...this.state,
      categories: categories.filter(
        actualCategories => actualCategories !== categorie
      )
    }));
    this.resetLevel(categorie);
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
      <Router>
        <Container style={styles.wrapper} className='App'>
          <Switch>
            <Route exact path='/'>
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
            </Route>
            <Route exact path='/play'>
              <Play />
            </Route>
            <Route>
              <Error404 />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
