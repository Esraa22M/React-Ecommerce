import styled from "styled-components";
export let Wrapper = styled.div`
  display: flex;
  direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Be Vietnam Pro", sans-serif;
  width: 100%;
`;
export let PandaWrapper = styled.div`
  letter-spacing: 0.3rem;
  color: var(--color-orange-darker);
  text-align: center;
  font-weight: bolder;
  @media (max-width: 800px) {
   font-size:100px;
 }
  font-size: 200px;
  line-height: 25px;
`;
