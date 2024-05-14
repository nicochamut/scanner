import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import ProductDetails from "./ProductDetails";
import BarCodeComponent from "../BarCodeComponent/BarCodeComponent";
import Exceptions from "./Exceptions";
import axios from "axios";

const ProductCard = ({ prod }) => {
  const [product, setProduct] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [productExist, setProductExist] = useState(false);
  const [error, setError] = useState(false); // Estado para controlar si hay un error

  const inputRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      inputRef.current.focus();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const setTimer = () => {
    setTimeout(() => {
      setProductExist(false);
      setError(false);
    }, 8500);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestData = {
      cod_scanner: inputValue,
    };
    axios
      .post(
        `https://us-central1-scannerapp-0.cloudfunctions.net/api/getProductById`,
        requestData
      )
      .then((response) => {
        setProduct(response.data);
      })
      .then(() => {
        setProductExist(true);
        setTimer();
        setError(false); // Reiniciar el estado de error
      })
      .catch((error) => {
        setError(true); // Configurar el estado de error
        console.error(error);
        setTimer();
      });
    setInputValue("");
  };

  return (
    <ProductStyled>
      {error ? ( // Mostrar el mensaje de error si hay un error
        <Exceptions />
      ) : productExist ? (
        <ProductDetails product={product} />
      ) : (
        <BarCodeComponent />
      )}

      <form onSubmit={handleFormSubmit} className="input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingresa un valor"
          ref={inputRef}
        />
      </form>
    </ProductStyled>
  );
};

const ProductStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 2rem;
  .input {
    opacity: 0;
  }
  .error-message {
    color: red;
    margin-bottom: 10px;
  }
`;

export default ProductCard;
