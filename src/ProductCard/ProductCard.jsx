import styled from "styled-components";

import React, { useEffect, useState, useRef } from "react";

import ProductDetails from "./ProductDetails";
import BarCodeComponent from "../BarCodeComponent/BarCodeComponent";

const ProductCard = ({ prod }) => {
  const [product, setProduct] = useState(null);

  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [productExist, setProductExist] = useState(false);

  // Función para manejar el enfoque del input
  const handleFocusInput = () => {
    inputRef.current.focus(null);
  };

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();

    fetch(`http://http://192.168.100.31/4000/products/${result}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));

    document.addEventListener("click", handleFocusInput);

    setTimeout(() => {
      setProductExist(false);
    }, 9500);
  }, [result]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setResult(inputValue);
    setInputValue(0);
    setProductExist(true);
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
          // style={{ opacity: 0 }}
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
