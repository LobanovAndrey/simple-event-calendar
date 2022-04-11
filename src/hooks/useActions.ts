import { allActionCreators } from './../store/reducers/action-creators';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppDispatch } from './../store/index';

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(allActionCreators, dispatch);
}