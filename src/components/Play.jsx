import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Container,
  Col,
  Row,
  Button,
  Nav,
} from 'react-bootstrap';
import './ResponsiveFonts.css';

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '0',
  },
  navContainer: {
    height: '10%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navRow: { height: '20%' },
  upContainer: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  upSpan: {
    display: 'flex',
    justifyContent: 'center',
  },
  kanjiUpRow: {
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downContainer: {
    padding: '1em',
    marginBottom: '2em',
  },
  kanjiRow: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kanjiCol: {
    padding: '0',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  kanjiButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    justifyContent: 'center',
  },
};

const kanjis = ['ぴぴ', 'ぴ', 'し', 'しゃ', 'しゃ', 'しゃ', 'しゃ', 'しゃ'];

const Play = () => (
  <Container style={styles.mainContainer}>
    <Container style={styles.navContainer}>
      <Row style={styles.navRow}>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link className="kanjiButton" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
    </Container>
    <Container className="upContainer" style={styles.upContainer}>
      <span className="upSpan" style={styles.upSpan}>
        SHU
      </span>
    </Container>
    <Container className="downContainer" style={styles.downContainer}>
      <Row style={styles.kanjiRow}>
        {kanjis.map((kanji) => (
          <Col
            xs="3"
            xl="1"
            style={styles.kanjiCol}
            key={kanjis.findIndex((el) => el === kanji)}
          >
            <Button
              className="kanjiButton"
              style={styles.kanjiButton}
              bg="primary"
              text="white"
            >
              {kanji}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  </Container>
);

export default Play;
