import styled from "styled-components";
import Product from "../Product";
export let ButtonContainer = styled.button`
  text-transform:capitalize;
  /* background-color:#E93E21; */
  background-color:var(--color-orange-darker);
  outline:0;
  border:0;
  height:40px;
  box-shadow: rgb(0 0 0 / 10%) 0 2px 4px;
  color:white;
  padding:0 10px;
  line-height:40px;
  border-radius:2px;
  transition: box-shadow .2s;
  cursor: pointer;
  &:focus{
   outline:none;
  }
`
export let ProductContainer = styled.span`
&:hover{
 color:var(--color-orange-darker);
 border-bottom: 3px solid var(--color-orange-darker);
 padding:32px 0;

}
`
export let NavWrapper = styled.div`
.nav-link{
    color:white !important;
    font-size:1.3rem;
    text-transform:capitalize;
}
 background-color:var(--color-dark);
`