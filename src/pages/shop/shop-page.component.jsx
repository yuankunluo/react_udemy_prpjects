import React from 'react';
import './shop-page.styles.scss';
// set collection routes.
import { Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

// Firebase Firestore.
import { firestore, convertCollectionSnapshoToMap } from '../../firebase/firebase.utils';

// Components
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

// Sub Pages
import CollectionPage from '../collection/collection.component';

class ShopPage extends React.Component {

 
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot( async onSnapshot =>  {
      const collectionsMap = convertCollectionSnapshoToMap(onSnapshot);
      updateCollections(collectionsMap);
    } );
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchesToProps = (dispatch) => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchesToProps)(ShopPage);
