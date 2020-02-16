/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import HomeNav from './HomeNav';
import Header from './Header';
import HiraganaType from './HiraganaType';

// eslint-disable-next-line react/prop-types
const Home = ({
  categories,
  addAllCategories,
  onCategorieClick,
  onPlayClick,
}) => (
  <>
    <HomeNav />
    <Header />
    <HiraganaType
      categories={categories}
      onCategorieClick={onCategorieClick}
      addAllCategories={addAllCategories}
      onPlayClick={onPlayClick}
    />
  </>
);

export default Home;
