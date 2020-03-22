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
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Sub Pages
import CollectionPage from '../collection/collection.component';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

  constructor(){
    super();
    this.state  = {
      loading: true
    }
  }
 
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot( async onSnapshot =>  {
      const collectionsMap = convertCollectionSnapshoToMap(onSnapshot);
      updateCollections(collectionsMap);
      this.setState({
        loading: false
      })
    } );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
        render={ (props) => 
          <CollectionOverviewWithSpinner isLoading={loading} {...props} />
        }    />
        <Route
          path={`${match.path}/:collectionId`}
          render = {
            (props) => 
              <CollectionPageWithSpinner isLoading={loading} {...props} />
          }
        />
      </div>
    );
  }
}

const mapDispatchesToProps = (dispatch) => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchesToProps)(ShopPage);
