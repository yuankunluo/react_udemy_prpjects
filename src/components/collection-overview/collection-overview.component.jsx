import React from 'react';
import './collection-overview.styles.scss';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

// Components
import CollectionPreview from '../collection-preview/collection-preview.component';


const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...otherProps }) => (
            <CollectionPreview key={id} {...otherProps} />
            ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
  });
  
export default connect(mapStateToProps)(CollectionOverview);