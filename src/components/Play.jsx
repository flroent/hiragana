import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Container,
  Col,
  Row,
  Button,
  Nav,
  Badge,
} from 'react-bootstrap';
import './ResponsiveFonts.css';

const test = ['きゃ', 'しょ', 'しょ', 'しょ', 'しょ', 'しょ', 'しょ', 'しょ'];

const Play = ({ hiraganaToGuess, guessList, onPlayClick }) => (
  <Container className="h-100 p-0 d-flex flex-column justify-content-around ">
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link className="pt-1 pr-0" href="/">
          <Button className="font-weight-bolder" lg variant="success">
            Home
          </Button>
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Container
      className="d-flex h-50 flex-column justify-content-center"
      style={{ backgroundColor: 'lightGray', borderRadius: '1em' }}
    >
      <Row>
        <Col
          className="h-100 d-flex flex-column justify-content-center"
          xs="12"
        >
          <span className="text-center display-1">tst</span>
        </Col>
      </Row>
    </Container>
    <Container className="mb-1 h-25">
      <Row className="d-flex h-75 justify-content-center">
        {test.map((kanji) => (
          <Col
            className="p-1 h-75"
            xs="3"
            xl="1"
            key={test.findIndex((el) => el === kanji)}
          >
            <Button
              lg
              className="w-100 h-75 p-0 mb-1 d-flex flex-column justify-content-center align-items-center text-center font-weight-bolder"
              variant="warning"
              onClick={kanji === hiraganaToGuess.jap ? onPlayClick() : false}
              size="lg"
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
