import ShopActionTypes from './shop.types';

// firebase
import {
  firestore,
  convertCollectionSnapshoToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionSnapshoToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
