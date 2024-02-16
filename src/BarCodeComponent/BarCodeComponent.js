import styled from "styled-components"
import image from '../images/barcode.png'



const BarCodeComponent = () => {
 
    return(<DivBarcode>
        <div className="divcard">

           <div className="titulo">
              <h2>Escaneá tu producto</h2>
           </div>

           <div className="imagen">
              <img src={image} alt="imagw"/>
           </div>

         
        </div>
    </DivBarcode>)
}

export const DivBarcode = styled.div`

height: 35rem ;
width: 50rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
border-radius: 8px;
box-shadow: 8px 23px 24px -10px rgba(0,0,0,0.8);
color: #ffffff;
background: #929e91;


img{
    width:43rem;
   
}

.divcard{
    width: 100%;
    display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 30rem;


}
.titulo{

    background: #2b2e2b;;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 2.57rem;

}
.imagen{

height: 17rem ;
display: flex;
    justify-content: center;
    align-items: center;
    
}
`
export default BarCodeComponent