import { actions } from './actions';

const initialState = {
  openFilter: false,
};

export default function modalsReducer(state = initialState, action) {
  let reduced;
  switch (action.type) {
    case actions.OPEN_FILTER:
      reduced = {
        ...state,
        ...action.payload,
      };
      break;

    case actions.CLOSE_FILTER:
      reduced = {
        ...state,
        ...action.payload,
      };
      break;

    default:
      reduced = state;
  }
  return reduced;
}