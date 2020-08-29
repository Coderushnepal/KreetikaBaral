export const createPoem = (poem) => {
  return (dispatch, getStore) => {
    //make async call to database
    dispatch({ type: "CREATE_POEM", poem });
  };
};
