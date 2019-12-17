import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Jumbotron,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const styles = {
  jumbotron: {
    background: 'none',
    height: '80%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    textAlign: 'center',
  },
  row: {
    height: '100%',
  },
};

const Header = () => (
  <Jumbotron style={styles.jumbotron} fluid>
    <Row style={styles.row}>
      <Col xs="12">
        <Container style={styles.container}>
          <h2>LOGO</h2>
        </Container>
      </Col>
      <Col xs="12">
        <Container style={styles.container}>
          <h1>Learn hiragana</h1>
          <p>Practice and train your hiragana skills</p>
        </Container>
      </Col>
    </Row>
  </Jumbotron>
);

export default Header;
