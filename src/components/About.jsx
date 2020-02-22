import React from 'react';
import {
  Container, Row, Col, Badge, Nav, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Contact = () => (
  <Container className="animated bounceInLeft">
    <Nav
      className="justify-content-end animated bounceInDown mb-5 mt-3"
      activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link className="pt-1 pr-0" as={Link} to="/">
          <Button variant="primary">Home</Button>
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Row>
      <Col xs="12">
        <h2 className="mb-3">Contact</h2>
      </Col>
      <Col xs="12">
        <p className="mb-5">
          Questions ? Remarks ? Bugs ? Want to send me a gift
{' '}
          <span>&#127873; </span>
          ?
          <br />
          <b>Write to :</b>
        </p>
      </Col>
      <Col className="d-flex justify-content-center mb-5" xs="12">
        <Badge className="p-3" variant="secondary"><span style={{ fontSize: '1.2rem' }}>contact@flo.rent</span></Badge>
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        <h2 className="mb-3">
          Nerd area
{' '}
          <span>&#129302; </span>
        </h2>
      </Col>
      <Col className="mb-5" xs="12">
        <p>
          This webapp is made with love, passion,
{' '}
          <a target="_blank" href="https://www.reactjs.org">React</a>
          ,
{' '}
          <a target="_blank" href="https://react-bootstrap.github.io/">React Bootstrap</a>
          {' '}
          and
{' '}
          <a target="_blank" href="https://daneden.github.io/animate.css/">Animate.css</a> .
</p>
        <p>
          Read or download the code source on
{' '}
          <a target="_blank" href="https://github.com/flroent/hiragana">github</a> .
        </p>
      </Col>
    </Row>
  </Container>
);

export default Contact;
