import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout, getListData } from "../../store/actions";

import { URL } from "../../constants";

import Button from "../../components/Button";
import Input from "../../components/Input";

import "./styles.scss";

const ListProduct = (props) => {
  const dispatch = useDispatch();

  const { loading, profile, listProduct } = useSelector((state) => state);

  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    dispatch(
      getListData(`${URL}/?_page=1&_limit=10&_sort=product_name&_order=asc`)
    );
  }, []);

  useEffect(() => {
    if (listProduct) {
      setProducts(listProduct);
    }
  }, [listProduct]);

  useEffect(() => {
    if (productName) {
      const timeout = setTimeout(() => {
        dispatch(
          getListData(
            `${URL}/?product_name=${productName}&_page=1&_limit=10&_sort=product_name&_order=asc`
          )
        );
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [productName]);

  const handleLogout = () => {
    dispatch(setLogout());
    window.location.href = "/";
  };

  const handleSearch = (e) => {
    const { value } = e.target;

    if (value) {
      setProductName(value);
    } else {
      setProductName("");
      setTimeout(() => {
        dispatch(
          getListData(`${URL}/?_page=1&_limit=10&_sort=product_name&_order=asc`)
        );
      }, 1000);
    }
  };

  return (
    <div className="list-product">
      {!localStorage.token && <Navigate to="/login" replace />}
      <div className="list-product-header">
        <div className="button-logout">
          <Button
            variant="primary"
            onClick={handleLogout}
            width="80"
            height="40"
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="search-wrap">
        <Input
          name="search"
          title="Cari Produk"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      {loading ? (
        <div className="loading">
          <h2>loading ..</h2>
        </div>
      ) : (
        <div className="list-product-table">
          {(products || []).map((item, index) => {
            const { product_name, memory, image } = item || {};

            return (
              <div key={index} className="list-product-table-row">
                <div className="product-name">{product_name}</div>
                <div className="memory">{memory}</div>
                <div className="image">
                  <img src={image} alt={`product ${product_name}`} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ListProduct;
