import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home';
import Play from './Play';
import Charts from './Charts';
import About from './About';
import Error404 from './Error404';
import hiraganasList from '../store';

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

  setGame = () => {
    let kanaGuess = this.randomHiragana();
    while (kanaGuess.jap === this.state.hiraganaToGuess.jap) {
      kanaGuess = this.randomHiragana()
    }
    let casesChoice = this.randomHiraganaList();
    let doublon = []
    if (kanaGuess) {
      doublon = casesChoice.filter(kana => kana === kanaGuess.jap)
      if (doublon.length > 0) {
        let newCasesChoice = casesChoice.filter(kana => kana !== doublon[0]);
        const otherKana = this.state.hiraganas.filter(kana => kana.jap !== kanaGuess);
        newCasesChoice.push(otherKana[0].jap);
        casesChoice = newCasesChoice;
      }
    }
    casesChoice[Math.floor(Math.random() * Math.floor(casesChoice.length))] =
      kanaGuess.jap;
    this.setState(() => ({
      ...this.state,
      hiraganaToGuess: kanaGuess,
      guessList: casesChoice
    }));
  };

  onPlayClick = () => {
    return () => this.setGame();
  };

  wrongBtn = btnId => {
    return () => {
      const btn = document.getElementById(btnId);
      btn.classList.add('bg-danger');
      btn.classList.add('border-danger');
      btn.classList.add('text-white');
      btn.classList.add('animated');
      btn.classList.add('shake');
      setTimeout(() => {
        btn.classList.remove('bg-danger');
        btn.classList.remove('border-danger');
        btn.classList.remove('text-white');
        btn.classList.remove('animated');
        btn.classList.remove('shake');
      }, 800);
    };
  };

  goodBtn = btnId => {
    return () => {
      const btn = document.getElementById(btnId);
      btn.classList.remove('bg-warning');
      btn.classList.remove('border-warning');
      btn.classList.add('bg-success');
      btn.classList.add('border-success');
      btn.classList.add('text-white');
      btn.classList.add('animated');
      btn.classList.add('heartBeat');
      setTimeout(() => {
        btn.classList.remove('bg-success');
        btn.classList.remove('border-success');
        btn.classList.remove('text-white');
        btn.classList.remove('animated');
        btn.classList.remove('heartBeat');
        btn.classList.add('bg-warning');
        btn.classList.add('border-warning')
        this.setGame();
      }, 800);
      ;
    }
  };

  render() {
    return (
      <Container className='App'>
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
              wrongBtn={this.wrongBtn}
              goodBtn={this.goodBtn}
            />
          </Route>
          <Route exact path='/charts'>
            <Charts />
          </Route>
          <Route exact path='/about'>
            <About />
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
