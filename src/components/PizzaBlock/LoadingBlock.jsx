import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="128" cy="139" r="120" />
      <rect x="0" y="270" rx="3" ry="3" width="280" height="26" />
      <rect x="0" y="310" rx="5" ry="5" width="280" height="84" />
      <rect x="5" y="420" rx="3" ry="3" width="99" height="24" />
      <rect x="141" y="420" rx="23" ry="23" width="132" height="40" />
    </ContentLoader>
  );
}

export default LoadingBlock;
