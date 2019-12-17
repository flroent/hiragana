import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, withRouter } from 'react-router-dom';
import './ResponsiveFonts.css';
import Home from './Home';
import Play from './Play';
import Error404 from './Error404';

const styles = {
  wrapper: { fontFamily: "'Rubik', sans-serif", height: '100vh' }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
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

  render() {
    return (
      <Container style={styles.wrapper} className='App'>
        <Switch>
          <Route exact path='/'>
            <Home
              categories={this.state.categories}
              onCategorieClick={this.onCategorieClick}
              addAllCategories={this.addAllCategories}
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
    );
  }
}

export default withRouter(App);
