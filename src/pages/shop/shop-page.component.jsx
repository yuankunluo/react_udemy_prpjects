import React from 'react';
import './shop-page.styles.scss';
// set collection routes.
import { Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

// Components
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionContainer from '../../components/collection-overview/collection-overview.container';


class ShopPage extends React.Component {

  componentDidMount() {  
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match} = this.props;
    return (
      <div className='shop-page'>
        <Route 
          exact path={`${match.path}`} 
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
