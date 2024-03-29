import React, { useEffect, useState } from 'react';
import ItemBox from '../views/components/ItemBox';
import NewsFooter from '../views/sections/News-page/NewsFooter'
import { NavLink } from 'react-router-dom'
import HomeIcon from '../images/icons/bx-home-alt.svg'
import RightChevron from '../images/icons/bx-chevrons-right.svg'
import ContactFooter from './sections/Contact-page/ContactFooter'
import Header from './sections/Header';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/news');
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          console.error('Failed to fetch news:', response.status);
        }
      } catch (error) {
        console.error('Error during news fetch:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
   <Header headerShadow={true} />
    <div className="news-breadcrumbs">
        <img src={HomeIcon} alt="Home-icon" />
        <NavLink to="/">Home</NavLink>
        <img src={RightChevron} alt="Right-chevron" />
        <NavLink to="/news">News</NavLink>
    </div>
      <h1 className="our-news-text">Our News</h1>
    <div className="news-container">
      {news.map((item) => (
        <ItemBox key={item.id} item={item} />
      ))}
    </div>
    <div>
      <NewsFooter />
      <ContactFooter />
    </div>
    </>
  );
};

export default News;
