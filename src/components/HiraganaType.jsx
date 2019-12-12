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
  Alert,
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
    fontSize: '1.2rem',
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
  ['dakutens', 'composés'],
];

const levels = ['4', '8', '12'];

const HiraganaType = ({
  onCategorieClick,
  addAllCategories,
  categories,
  level,
  changeStateLevel,
  setErrorMode,
  error,
  errorType,
}) => {
  const selectLevel = (selectedLevel) => () => {
    switch (selectedLevel) {
      case '4':
        categories.length >= 1
          ? changeStateLevel(selectedLevel)
          : setErrorMode(1);
        break;
      case '8':
        categories.length >= 2
          ? changeStateLevel(selectedLevel)
          : setErrorMode(2);
        break;
      case '12':
        categories.length >= 3
          ? changeStateLevel(selectedLevel)
          : setErrorMode(3);
        break;
      default:
        setErrorMode(1);
    }
  };

  return (
    <Container style={styles.container}>
      <Row style={styles.titleRow}>
        <Col style={styles.titleCol} xs="12" lg="9">
          <h2>Categories</h2>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        {categoriesButtons[0].map((categorie) => (
          <Col xs="4" lg="1" key={`${categorie}Col`}>
            <Button
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
          <Col xs="12" lg="3" key={`${categorie}Col`}>
            <Button
              style={styles.button}
              variant={categories.includes(categorie) ? 'success' : 'info'}
              key={categorie}
              onClick={onCategorieClick(categorie)}
            >
              {categorie.toUpperCase()}
            </Button>
          </Col>
        ))}
        <Col xs="12" lg="3">
          <Button
            style={styles.button}
            onClick={addAllCategories(categoriesButtons)}
          >
            Select all
          </Button>
        </Col>
      </Row>
      <Row style={styles.titleRow}>
        <Col style={styles.titleCol} xs="12" lg="9">
          <h2>Cells</h2>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        {levels.map((arrayLevel) => (
          <Col xs="12" lg="3" key={`${arrayLevel}Col`}>
            <Button
              className={arrayLevel === '12' ? 'd-none d-lg-block' : ''}
              style={styles.button}
              variant={arrayLevel === level ? 'success' : 'info'}
              key={arrayLevel}
              onClick={selectLevel(arrayLevel)}
            >
              {arrayLevel.toUpperCase()}
            </Button>
          </Col>
        ))}
      </Row>
      <Row style={styles.titleRow}>
        {error ? (
          <Alert variant="danger">
            Please select at least
            {` ${errorType} `}
            categorie
            {errorType === 1 ? ' .' : 's .'}
          </Alert>
        ) : (
          <></>
        )}
      </Row>
      <Row style={styles.playButtonRow}>
        <Button
          as={level === '' ? Button : Link}
          to="/play"
          size="lg"
          variant="danger"
          disabled={level === ''}
        >
          Play
        </Button>
      </Row>
    </Container>
  );
};

export default HiraganaType;
