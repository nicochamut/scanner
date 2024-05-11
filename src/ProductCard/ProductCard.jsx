import styled from "styled-components";

import React, { useEffect, useState, useRef } from "react";

import ProductDetails from "./ProductDetails";
import BarCodeComponent from "../BarCodeComponent/BarCodeComponent";

import axios from "axios";

const ProductCard = ({ prod }) => {
  const [product, setProduct] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState({});
  const [productExist, setProductExist] = useState(false);

  const inputRef = useRef();

  // Enfocar el input cuando el componente se monta
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const setTimer = () => {
    setTimeout(() => {
      setProductExist(false);
    }, 8500);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   setResult(inputValue);
  //   setInputValue(0);
  //   setProductExist(true);
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Configurar el objeto de datos para la solicitud POST
    const requestData = {
      cod_scanner: inputValue,
    };
    // Enviar la solicitud POST
    axios
      .post(
        `https://us-central1-scannerapp-0.cloudfunctions.net/api/getProductById`,
        requestData
      )
      .then((response) => {
        setProduct(response.data);
        // Si es necesario, puedes actualizar el estado o realizar otras acciones basadas en la respuesta
      })
      .then((d) => {
        setProductExist(true);
        setTimer();
      })
      .catch((error) => {
        // Manejar cualquier error que ocurra durante la solicitud POST
        console.error(error);
      });

    // Restablecer el estado de inputValue y setProductExist
    setInputValue("");
  };

  return (
    <ProductStyled>
      {productExist ? (
        <ProductDetails product={product} />
      ) : (
        <BarCodeComponent />
      )}

      <form onSubmit={handleFormSubmit}>
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
`;

export default ProductCard;
