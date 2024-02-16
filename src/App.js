import { GlobalStyles } from "./GlobalStyles";
import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";
import imageoleum from './images/oleum.webp'

function App() {


  return (
    <StyledApp className="App">
        <GlobalStyles />
       <ProductCard />
       <div className="imageoleum">
              <img  className="imageoleum" src={imageoleum} alt="imagw"/>
           </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`

.imageoleum{

  position: absolute ;
  right: 1rem;
   bottom: 0.8rem;
  width: 15rem;
  border-radius: 20px;
  box-shadow: 2px 2px 1px #1b1b1b4f;
}

`

export default App;
