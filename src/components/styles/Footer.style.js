import styled from "styled-components";

export let FooterContainer = styled.footer`
  background-color: var(--color-dark);
`;
export let Footer = styled.div`
  justify-content:space-around;
flex-wrap: wrap;
  display: flex;
  margin:auto;
  width:80%;
`;
export let FooterColumn = styled.div`
display:flex;
flex-direction:column;
 align-items:left;
 flex-wrap: wrap;
 @media (max-width:840px) {
    align-items: center;
    margin:20px;
  }
 
`;
export let FooterHeading = styled.div`
  color: var(--color-orange-darker);
  padding-bottom:10px;
  border-bottom:1px solid var(--color-orange-darker);
  margin-bottom:10px;

  /* font-family: "Lobster", cursive; */
`;
export let FooterMainHeading = styled.div`font-family: 'Lobster', cursive;
font-weight: bolder;
display:flex;

justify-content:center;
align-items:center;
color:var(--color-blue-primary);
padding:2rem;
font-size: 50px;;
 @media (max-width: 840px) {
   font-size:30px;
 }`
export let LinkContainer = styled.p`
  text-align: left ;

 padding-left:0;
 a{
     color:white;
     text-decoration:none;
     text-align:left;
     &:hover{
         color:var(--color-orange-darker);
         transition:0.3s ease-in-out;
     }
     
 }

`
export let OrangeDot = styled.span`
    height: 25px;
    margin:0 10px;
    width: 25px;
    text-align:center;
    background-color:var(--color-blue-primary);
    border-radius: 50%;
    display: inline-block;
`
export let FormContainer = styled.div`
margin-top:10px;
input{
    padding:0 10px;
  line-height:40px;
  height:40px;
  border-radius:4px 0 0 4px;
  outline:none;
  border:none;
  margin-left:2px;
  &:focus{
      outline:none;
  }
  ::placeholder{
     color:#b1b1b1;
  }
}
`
