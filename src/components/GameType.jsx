import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from 'react-bootstrap';

const styles = {
  container: {
    backgroundColor: 'lightGray',
    borderRadius: '1em',
    marginBottom: '4em',
  },
  row: {
    padding: '1em',
  },
  buttonGroup: {
    padding: '1em',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  gameOption: {
    backgroundColor: 'grey',
    borderRadius: '1em',
    marginBottom: '2em',
    height: '15em',
  },
};

const GameType = () => (
  <Container style={styles.container}>
    <Row style={styles.row}>
      <h2>Choose game type</h2>
    </Row>
    <Row style={styles.row}>
      <Col xs="12" lg="6">
        <Container style={styles.gameOption}>
          <Row style={styles.row}>
            <h3>Disposition</h3>
          </Row>
          <Row style={styles.row}>
            <ButtonGroup style={styles.buttonGroup} size="sm">
              <Button>
                ENG
                <br />
                JAP
              </Button>
              <Button variant="secondary">
                JAP
                <br />
                ENG
              </Button>
              <Button variant="secondary">MIX</Button>
            </ButtonGroup>
          </Row>
        </Container>
      </Col>
      <Col xs="12" lg="6">
        <Container style={styles.gameOption}>
          <Row style={styles.row}>
            <h3>Cells</h3>
          </Row>
          <Row style={styles.row}>
            <ButtonGroup style={styles.buttonGroup} size="lg">
              <Button>8</Button>
              <Button variant="secondary">12</Button>
              <Button variant="secondary">16</Button>
            </ButtonGroup>
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default GameType;
