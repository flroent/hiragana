import React from 'react';
import {
  Container, Row, Col, Alert, Card, Nav, Button
} from 'react-bootstrap';
import hiraganasList from '../store';

const Charts = () => (
  <Container className="animated bounceInLeft">
    <Nav
      className="justify-content-end animated bounceInDown mb-5 mt-3"
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link className="pt-1 pr-0" href="/">
          <Button variant="primary">Home</Button>
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Row className="mb-5">
      <Col>
        <h1>Hiragana charts</h1>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col>
        <Alert variant="secondary">
          Never heard about hiragana ? You must read
{' '}
          <a
            target="_blank"
            className="text-black"
            href="https://en.wikipedia.org/wiki/Hiragana"
          >
            this
          </a>
          {' '}
          buddy
{' '}
          <span> &#129299;</span>
        </Alert>
      </Col>
    </Row>
    <Row className="mb-5">
      <Nav className="w-100 justify-content-center mb-5">
        {hiraganasList.map((categorie) => (
          <Nav.Item key={`navitem-${categorie.cat}`}>
            <Nav.Link href={`#${categorie.cat.toUpperCase()}`}>
              {categorie.cat.toUpperCase()}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Row>
    {hiraganasList.map((categorie) => (
      <section
        id={categorie.cat.toUpperCase()}
        key={`section-${categorie.cat}`}
      >
        <Row className="mb-2">
          <Col xs="12">
            <h2 className="mb-3">{categorie.cat.toUpperCase()}</h2>
          </Col>
          {categorie.kanas.map((kana) => (
            <Col className="p-2 mb-3" xs="6" sm="2" key={`col-${kana.eng}`}>
              <Card>
                {' '}
                <Card.Body className="bg-light">
                  <Card.Title className="text-center">{kana.jap}</Card.Title>
                  <Card.Text className="text-center">
                    {kana.eng.toUpperCase()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    ))}
  </Container>
);

export default Charts;
