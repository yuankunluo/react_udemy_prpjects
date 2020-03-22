import { takeEvery , call, put } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';
// firebase
import {
    firestore,
    convertCollectionSnapshoToMap
  } from '../../firebase/firebase.utils';



export function* fetchCollectionAsync(){

    try {
        const collectionRef = firestore.collection('collections');
        const snapshop = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshoToMap, snapshop);    
        yield put(fetchCollectionSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
 
}

export function* fetchCollectionsStart(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionAsync
    );
}