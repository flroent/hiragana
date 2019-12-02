import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Container,
  Row,
  Button,
  ButtonGroup,
} from 'react-bootstrap';

const styles = {
  container: {
    backgroundColor: 'lightGray',
    borderRadius: '1em',
    marginBottom: '2em',
  },
  buttonGroup: {
    width: '100%',
    margin: '0',
  },
  button: {
    borderRadius: '0',
  },
  row: {
    padding: '1em',
  },
};

const buttonGroups = {
  row1: ['a', 'k', 's', 't', 'n'],
  row2: ['h', 'm', 'r', 'ywn'],
  row3: ['dakutens', 'composes'],
};

const HiraganaType = ({ onCategorieClick, categories }) => (
  <Container style={styles.container}>
    <Row style={styles.row}>
      <h2>Choose hiragana</h2>
    </Row>
    <Row style={styles.row}>
      <p>Choose categories</p>
    </Row>
    <Row style={styles.row}>
      <ButtonGroup style={styles.buttonGroup}>
        {buttonGroups.row1.map((categorie) => (
          <Button
            variant={categories.includes(categorie) ? 'danger' : 'primary'}
            style={styles.button}
            key={categorie}
            onClick={onCategorieClick(categorie)}
          >
            {categorie.toUpperCase()}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup style={styles.buttonGroup}>
        {buttonGroups.row2.map((categorie) => (
          <Button
            variant={categories.includes(categorie) ? 'danger' : 'primary'}
            style={styles.button}
            key={categorie}
            onClick={onCategorieClick(categorie)}
          >
            {categorie.toUpperCase()}
          </Button>
        ))}
      </ButtonGroup>
      <ButtonGroup style={styles.buttonGroup}>
        {buttonGroups.row3.map((categorie) => (
          <Button
            variant={categories.includes(categorie) ? 'danger' : 'primary'}
            style={styles.button}
            key={categorie}
            onClick={onCategorieClick(categorie)}
          >
            {categorie.toUpperCase()}
          </Button>
        ))}
      </ButtonGroup>
    </Row>
    <Row style={styles.row}>
      <Button size="lg">All</Button>
    </Row>
  </Container>
);

export default HiraganaType;
