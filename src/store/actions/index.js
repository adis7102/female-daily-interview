import fetcher from "../../fetch/index.js";
import jwtToken from "../../helpers/jwtToken.js";

export const setLoading = (status) => {
  return {
    type: "LOADING",
    loading: status,
  };
};

export function setUser(user){
  return{
    type : 'USER_LOGIN',
    user
  }
}

export const loginAPI = (url, email) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetcher(url, {
      method: "POST"
    })
      .then((data) => {
        const user = data?.[0] || {};
        const token = jwtToken(user);

        localStorage.setItem("token", token);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)));
  };
};

export const getProfile = (url) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetcher(url, {
      method: "GET",
    })
      .then((data) => {
        dispatch({
          type: "GET_PROFILE",
          username: data,
        });
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)));
  };
};


export const setLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch({
      type : "SET_LOGOUT"
    })
  }
}

export const getListData = (url) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetcher(url, {
      method: "GET",
    })
      .then((data) => {
        dispatch({
          type: "GET_LIST_PRODUCT",
          listProduct: data,
        });
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)));
  };
};

export const addData = (url, body) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetcher(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((data) => {
        dispatch(getListData(url));
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)));
  };
};

export const editData = (url, id, body) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetcher(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((data) => {
        dispatch(getListData(url));
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)));
  };
};

export const deleteData = (url, id) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    fetcher(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((data) => {
        dispatch(getListData(url));
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => dispatch(setLoading(false)));
  };
};