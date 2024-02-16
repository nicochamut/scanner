import styled from "styled-components";
import { DivBarcode } from "../BarCodeComponent/BarCodeComponent";

const ProductDetails = ({ product }) => {
  const { DESCRIART, Precio, COD_SCANER } = product;
  return (
    <StyledDetails>
      <div className="codart">
        <h3>Cod artículo:</h3>
        <h2>{COD_SCANER}</h2>
      </div>
      <div className="nombre">
        <h1>{DESCRIART}</h1>
      </div>
      <div className="precio">
        <h1>${Precio}</h1>
      </div>
    </StyledDetails>
  );
};

const StyledDetails = styled(DivBarcode)`
  font-size: 1rem;

  h3,
  h4,
  h1,
  h2 {
    padding-left: 4rem;
  }
  div {
    width: 100%;
  }
  .codart {
    width: 100%;
    height: 8rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #2b2b2b;

    h3 {
      font-size: 1.2rem;
      margin-bottom: -15px;
    }
  }

  .nombre {
    background: #2b2e2b;
    color: #ffffff;
    height: 5rem;
    display: flex;
    align-items: center;
  }

  .precio {
    font-size: 2rem;
    background: linear-gradient(to right, #000000, #000000);
  }
`;

export default ProductDetails;
