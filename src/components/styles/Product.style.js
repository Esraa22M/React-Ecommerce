import styled from "styled-components";
export let CardFooterContainer = styled.div`
 background-color:var(--color-orange-darker);
 font-size:15px;
 color:white;
 `;
export let ProductWrapper =styled.div`
 .img-container:hover .card-img-top{
  transform: scale(1.2);
}
.img-container:hover .button-visiblity{
    display:inline-block;
}
.button-visiblity{
  position: absolute;
  bottom: 20px;
  right: 40px;
  display:none;
}
.card:hover{
  box-shadow:2px 2px 5px 0;
}
.card-img-top , .card{
    transition:all 1s linear;
}
  

`;