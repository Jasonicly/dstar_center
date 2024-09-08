import React from 'react';
import NewsPage from '../components/NewsPage';
import WhatsAppButton from '../components/WhatsAppButton';

function News() {
  return (
    <div className="home">
    <NewsPage />
    <WhatsAppButton />
    </div>
  );
}

export default News;
