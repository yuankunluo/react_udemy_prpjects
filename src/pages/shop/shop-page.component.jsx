import React from 'react';
import './shop-page.styles.scss';
// set collection routes.
import { Route } from 'react-router-dom';

// Components
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

// Sub Pages
import CollectionPage from '../collection/collection.component';


const ShopPage = ({ match }) => (
  <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  
  </div>
);



export default ShopPage;
