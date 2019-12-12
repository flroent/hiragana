import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Container,
  Col,
  Row,
  Card
} from 'react-bootstrap';

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '0'
  },
  navContainer: {
    height: '10%'
  },
  navRow: { height: '20%' },
  upContainer: {
    height: '60%',
    padding: '1em'
  },

  kanjiUpRow: {
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  downContainer: {
    backgroundColor: 'grey',
    borderRadius: '.3em',
    height: '30%',
    padding: '1em',
    marginBottom: '2em'
  },
  kanjiRow: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  kanjiCol: {
    padding: '0',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  kanjiCard: {
    width: '80%',
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem'
  }
};

const kanjis = [
  'SHU',
  'SH1',
  'SHE',
  'SHR',
  'SHD',
  'SHF',
  'SHG',
  'SHP'
  // 'SHU',
  // 'SH1',
  // 'SHE',
  // 'SHR',
];

const Play = () => (
  <Container style={styles.mainContainer}>
    <Container style={styles.navContainer}>
      <Row style={styles.navRow}>x</Row>
    </Container>
    <Container style={styles.upContainer}></Container>
    <Container style={styles.downContainer}>
      <Row style={styles.kanjiRow}>
        {kanjis.map(kanji => (
          <Col
            xs='3'
            xl='1'
            style={styles.kanjiCol}
            key={kanjis.findIndex(el => el === kanji)}
          >
            <Card
              style={styles.kanjiCard}
              bg='primary'
              text='white'
              key={kanji}
            >
              {kanji}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Container>
);

export default Play;
