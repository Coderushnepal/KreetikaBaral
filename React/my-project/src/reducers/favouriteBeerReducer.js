import {
  ADD_FAVOURITE_BEER,
  REMOVE_FAVOURITE_BEER,
  ERROR_FETCHING_BEER,
} from "../constants/actions";

const initialState = {
  favouriteBeers: [],
  error: null,
};

const favouriteBeersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_BEER:
      return {
        ...state,
        favouriteBeers: [...state.favouriteBeers, action.payload],
      };
    case REMOVE_FAVOURITE_BEER:
      return {
        ...state,
        favouriteBeers: state.favouriteBeers.filter(
          (beer) => beer.id !== action.payload
        ),
      };
    case ERROR_FETCHING_BEER:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default favouriteBeersReducer;