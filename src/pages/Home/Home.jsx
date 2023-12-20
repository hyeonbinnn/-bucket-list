import React from 'react';
import Header from './../../components/Header/Header';
import Banner from './../../components/Banner/Banner';
import Main from './../../components/Main/Main';
import Footer from './../../components/Footer/Footer';

export const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Main posts />
      <Footer />
      {/* {posts && posts.map((post) => <h2 key={post.id}>{post.title}</h2>)} */}
    </div>
  );
};
