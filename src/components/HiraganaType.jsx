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

const levels = ['easy', 'medium', 'pro'];

const HiraganaType = ({
  onCategorieClick,
  addAllCategories,
  categories,
  level,
  changeStateLevel,
}) => {
  const selectLevel = (selectedLevel) => () => {
    switch (selectedLevel) {
      case 'easy':
        categories.length >= 1
          ? changeStateLevel(selectedLevel)
          : alert('choose at least one categorie');
        break;
      case 'medium':
        categories.length >= 2
          ? changeStateLevel(selectedLevel)
          : alert('choose at least two categorie');
        break;
      case 'pro':
        categories.length >= 3
          ? changeStateLevel(selectedLevel)
          : alert('choose at least three categorie');
        break;
      default:
        console.log('Sorry, we are out of fuck.');
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
          <Col xs="4" lg="1">
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
          <Col xs="12" lg="3">
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
          <h2>Level</h2>
        </Col>
      </Row>
      <Row style={styles.buttonRow}>
        {levels.map((arrayLevel) => (
          <Col xs="12" lg="3">
            <Button
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
      <Row style={styles.row} />
      <Row style={styles.playButtonRow}>
        <Button size="lg" variant="danger">
          Play
        </Button>
      </Row>
    </Container>
  );
};

export default HiraganaType;
