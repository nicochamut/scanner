import { GlobalStyles } from "./GlobalStyles";
import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";
import imageoleum from "./images/oleum.webp";
import FullScreenButton from "./FullScreen/FullScreenButton";

function App() {
  return (
    <StyledApp className="App">
      <GlobalStyles />
      <FullScreenButton className="fullscreen" />
      <ProductCard />

      <div className="imageoleum">
        <img className="imageoleum" src={imageoleum} alt="imagw" />
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  .imageoleum {
    position: absolute;
    right: 1rem;
    bottom: 2rem;
    width: 8rem;
    border-radius: 20px;
    box-shadow: 2px 2px 1px #1b1b1b4f;
  }
  .fullscren {
    position: relative;
    top: 2rem;
    left: 2rem;
  }
`;

export default App;
