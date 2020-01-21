/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    padding: '2em 1em',
    backgroundColor: 'lightGray',
    borderRadius: '1em',
    marginBottom: '8em',
  },
  button: {
    width: '100%',
    marginBottom: '1em',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  playButtonRow: {
    display: 'flex',
    justifyContent: 'center',
    margin: '4em 0',
  },

  titleRow: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em 0',
  },
  titleCol: {
    padding: '0',
  },
};

const categoriesButtons = [
  ['a', 'k', 's', 't', 'n', 'h', 'm', 'r', 'ywn'],
  ['Dakuten', 'Handakuten'],
];

const HiraganaType = ({
  onCategorieClick,
  addAllCategories,
  categories,
  onPlayClick,
}) => (
  <Container style={styles.container}>
    <Row style={styles.titleRow}>
      <Col style={styles.titleCol} xs="12" xl="9">
        <h2 className="title">Categories</h2>
      </Col>
    </Row>
    <Row style={styles.buttonRow}>
      {categoriesButtons[0].map((categorie) => (
        <Col xs="4" xl="1" key={`${categorie}Col`}>
          <Button
            className="categorieButton"
            style={styles.button}
            variant={categories.includes(categorie) ? 'success' : 'info'}
            key={categorie}
            onClick={onCategorieClick(categorie)}
          >
            {categorie.toUpperCase()}
          </Button>
        </Col>
      ))}
    </Row>
    <Row style={styles.buttonRow}>
      {categoriesButtons[1].map((categorie) => (
        <Col xs="12" lg="4" xl="3" key={`${categorie}Col`}>
          <Button
            className="categorieButton"
            style={styles.button}
            variant={categories.includes(categorie) ? 'success' : 'info'}
            key={categorie}
            onClick={onCategorieClick(categorie)}
          >
            {categorie}
          </Button>
        </Col>
      ))}
      <Col xs="12" lg="4" xl="3">
        <Button
          className="categorieButton"
          style={styles.button}
          onClick={addAllCategories(categoriesButtons)}
        >
          Select all
        </Button>
      </Col>
    </Row>

    <Row style={styles.playButtonRow}>
      <Button
        className="categorieButton"
        as={categories.length < 1 ? Button : Link}
        to="/play"
        size="lg"
        variant="danger"
        disabled={categories.length < 1}
      >
        Play
      </Button>
    </Row>
  </Container>
);

export default HiraganaType;
