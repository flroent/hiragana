import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Container,
  Col,
  Row,
  Card,
} from 'react-bootstrap';

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'lightGray',
    height: '100vh',
  },
  upRow: {
    height: '80%',
    backgroundColor: 'red',
  },
  downRow: {
    backgroundColor: 'green',
    borderRadius: '1em',
    height: '30%',
    padding: '0.4em 0em',
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    width: '20%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  cardCol: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '50%',
  },
};

const Play = () => (
  <Container style={styles.mainContainer}>
    <Row style={styles.upRow}>
      <Col>ENG</Col>
    </Row>
    <Row style={styles.downRow}>
      <Col xs="12" lg="6" style={styles.cardCol}>
        <Card bg="primary" text="white" style={styles.card}>
          Shu
        </Card>
        <Card bg="primary" text="white" style={styles.card}>
          Shu
        </Card>
        <Card bg="primary" text="white" style={styles.card}>
          Shu
        </Card>
        <Card bg="primary" text="white" style={styles.card}>
          Shu
        </Card>
      </Col>
      <Col xs="12" lg="6" style={styles.cardCol}>
        <Card bg="primary" text="white" style={styles.card}>
          Shu
        </Card>
        <Card bg="primary" text="white" style={styles.card}>
          Shu
        </Card>
        <Card bg="primary" text="white" style={styles.card}>
          Shu
        </Card>
        <Card bg="primary" text="white" style={styles.card}>
          Shu
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Play;
