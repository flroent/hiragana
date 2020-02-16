/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  // eslint-disable-next-line indent
  // eslint-disable-next-line no-trailing-spaces
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const categoriesButtons = [
  ['a', 'k', 's', 't', 'n', 'h', 'm', 'r', 'ywn'],
  ['Dakutens', 'Handakutens'],
];

const HiraganaType = ({
  onCategorieClick,
  addAllCategories,
  categories,
  onPlayClick,
}) => (
  <Container
    className="p-5 mb-5 animated bounceInLeft"
    style={{ backgroundColor: 'lightGray', borderRadius: '1em' }}
  >
    <Row className="mb-5">
      <Col className="p-0" xs="12" xl="9">
        <h2 className="title">Categories</h2>
        <span className="text-black-50">Pick at least one </span>
        <span>&#128522;</span>
      </Col>
    </Row>
    <Row className="d-flex justify-content-center">
      {categoriesButtons[0].map((categorie) => (
        <Col className="p-1" xs="4" lg="1" key={`${categorie}Col`}>
          <Button
            className="w-100"
            variant={categories.includes(categorie) ? 'success' : 'light'}
            key={categorie}
            onClick={onCategorieClick(categorie)}
          >
            {categorie.toUpperCase()}
          </Button>
        </Col>
      ))}
    </Row>
    <Row className="d-flex justify-content-center mb-5">
      {categoriesButtons[1].map((categorie) => (
        <Col className="p-1" xs="12" lg="3" key={`${categorie}Col`}>
          <Button
            className="w-100 "
            variant={categories.includes(categorie) ? 'success' : 'light'}
            key={categorie}
            onClick={onCategorieClick(categorie)}
          >
            {categorie}
          </Button>
        </Col>
      ))}
      <Col className="p-1" xs="12" lg="3">
        <Button className="w-100" onClick={addAllCategories(categoriesButtons)}>
          Select all
        </Button>
      </Col>
    </Row>
    <Row className="d-flex justify-content-center">
      <Button
        as={categories.length < 1 ? Button : Link}
        to="/play"
        size="lg"
        variant="danger"
        disabled={categories.length < 1}
        onClick={onPlayClick()}
      >
        Play
      </Button>
    </Row>
  </Container>
);

export default HiraganaType;
