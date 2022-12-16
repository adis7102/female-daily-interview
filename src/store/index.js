const initialState = {
  loading: false,
  listProduct: [],
  isLogin: false
};

export default (state = initialState, action) => {
  const { type } = action || {};

  switch (type) {
    case "LOADING":
      return {
        ...state,
        loading: action?.loading,
      };
    case "USER_LOGIN":
      return {
        ...state,
        isLogin: true
      };
    case "USER_LOGOUT":
      return {
        ...state,
        isLogin: false
      }
    case "GET_LIST_PRODUCT":
      return {
        ...state,
        listProduct: action?.listProduct,
      };
    default:
      return state;
  }
};
