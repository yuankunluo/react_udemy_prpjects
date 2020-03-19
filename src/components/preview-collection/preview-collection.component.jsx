import React from 'react';
import './preview-collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({ title, items }) => {
  return (
    <div class='collection-preview'>
      <h1 class='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...itemProps}) => (
            <CollectionItem key={id} {...itemProps}/>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
