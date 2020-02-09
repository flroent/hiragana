import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, withRouter } from 'react-router-dom';
import './ResponsiveFonts.css';
import Home from './Home';
import Play from './Play';
import Error404 from './Error404';
import hiraganasList from '../store';

const styles = {
  wrapper: { fontFamily: "'Rubik', sans-serif", height: '100vh' }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      hiraganas: [],
      hiraganaToGuess: '',
      guessList: []
    };
  }

  addCategorieToState = categorie => {
    const kanas = hiraganasList.filter(
      basicCat => basicCat.cat === categorie.toLowerCase()
    );
    this.setState(({ categories, hiraganas }) => ({
      ...this.state,
      categories: [...categories, categorie],
      hiraganas: [...hiraganas, ...kanas[0].kanas]
    }));
  };

  removeCategorieToState = categorie => {
    const kanas = hiraganasList.filter(
      basicCat => basicCat.cat === categorie.toLowerCase()
    );
    this.setState(({ categories, hiraganas }) => ({
      ...this.state,
      categories: categories.filter(
        actualCategories => actualCategories !== categorie
      ),
      hiraganas: hiraganas.filter(
        actualHiraganas => !kanas[0].kanas.includes(actualHiraganas)
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

  randomHiragana = () => {
    const { hiraganas } = this.state;
    let hiragana = this.state.hiraganas[
      Math.floor(Math.random() * hiraganas.length)
    ];
    return hiragana;
  };

  randomHiraganaCategories = () => {
    const cats = [];
    for (let i = 0; i <= 7; i++) {
      let num = Math.floor(Math.random() * Math.floor(hiraganasList.length));
      if (!cats.includes(num)) {
        cats.push(num);
      } else {
        let newNum = num;
        while (cats.includes(newNum)) {
          newNum = Math.floor(Math.random() * Math.floor(hiraganasList.length));
        }
        cats.push(newNum);
      }
    }
    return cats;
  };

  randomHiraganaList = () => {
    const cats = this.randomHiraganaCategories();
    const kanas = cats.map(
      cat =>
        hiraganasList[cat].kanas[
          Math.floor(
            Math.random() * Math.floor(hiraganasList[cat].kanas.length)
          )
        ].jap
    );
    return kanas;
  };

  onPlayClick = () => {
    return () => {
      const kanaGuess = this.randomHiragana();
      const casesChoice = this.randomHiraganaList();
      if (!casesChoice.includes(kanaGuess)) {
        casesChoice[
          Math.floor(Math.random() * Math.floor(casesChoice.length))
        ] = kanaGuess.jap;
      }
      this.setState(() => ({
        ...this.state,
        hiraganaToGuess: kanaGuess,
        guessList: casesChoice
      }));
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
              onPlayClick={this.onPlayClick}
            />
          </Route>
          <Route exact path='/play'>
            <Play
              hiraganaToGuess={this.state.hiraganaToGuess}
              guessList={this.state.guessList}
              onPlayClick={this.onPlayClick}
            />
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
