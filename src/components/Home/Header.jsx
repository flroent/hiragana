import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Jumbotron,
  Row,
  Col,
} from 'react-bootstrap';

const Header = () => (
  <Jumbotron className="bg-white animated bounceInDown">
    <Row>
      <Col className="text-center" xs="12">
        <h1>
          Practice and  memorize Japanese Hiragana
          <span> &#128522;</span>
        </h1>
      </Col>
    </Row>
  </Jumbotron>
);

export default Header;
