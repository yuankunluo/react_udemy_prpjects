import React from 'react';
import './shop-page.styles.scss';
// set collection routes.
import { Route } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

// Components
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Sub Pages
import CollectionPage from '../collection/collection.component';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {

  

  componentDidMount() {    
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync()
  }

  render() {
    const { match, isFeatching,  } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
        render={ (props) => 
          <CollectionOverviewWithSpinner isLoading={isFeatching} {...props} />
        }    />
        <Route
          path={`${match.path}/:collectionId`}
          render = {
            (props) => 
              <CollectionPageWithSpinner isLoading={isFeatching} {...props} />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFeatching: selectIsCollectionFetching
}) 

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
