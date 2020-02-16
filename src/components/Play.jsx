/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Container,
  Col,
  Row,
  Button,
  Nav
} from 'react-bootstrap';

const Play = ({ hiraganaToGuess, guessList, wrongBtn, goodBtn }) => (
  <Container className='h-100 p-0 d-flex flex-column justify-content-around vh-100'>
    <Nav
      className='justify-content-end animated bounceInDown'
      activeKey='/home'
    >
      <Nav.Item>
        <Nav.Link className='pt-1 pr-0' href='/'>
          <Button variant='primary'>Home</Button>
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Container
      className='d-flex h-50 flex-column justify-content-center animated bounceInLeft'
      style={{ backgroundColor: 'lightGray', borderRadius: '1em' }}
    >
      <Row>
        <Col
          className='h-100 d-flex flex-column justify-content-center'
          xs='12'
        >
          {hiraganaToGuess ? (
            <span className='text-center display-1'>
              {hiraganaToGuess.eng.toUpperCase()}
            </span>
          ) : (
            <span className='text-center'>
              Click on <b>home</b> and pick at least one categorie &#128529;
            </span>
          )}{' '}
        </Col>
      </Row>
    </Container>
    <Container className='mb-1 h-25 animated bounceInLeft'>
      <Row className='d-flex h-75 justify-content-center'>
        {guessList.map(kanji => (
          <Col
            className='p-1 h-75'
            xs='3'
            xl='1'
            key={guessList.findIndex(el => el === kanji)}
          >
            <Button
              id={`btn-${guessList.findIndex(el => el === kanji)}`}
              className='w-100 h-75 p-0 mb-1 d-flex flex-column justify-content-center align-items-center text-center font-weight-bolder'
              variant='warning'
              onClick={
                kanji === hiraganaToGuess.jap
                  ? goodBtn(`btn-${guessList.findIndex(el => el === kanji)}`)
                  : wrongBtn(`btn-${guessList.findIndex(el => el === kanji)}`)
              }
              size='lg'
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
