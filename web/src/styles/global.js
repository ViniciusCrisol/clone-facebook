import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin : 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body , #root{
  min-height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

body{
  -webkit-font-smoothing: antialiased !important;
  background-color: #F6F6F9;
}

body, input , button {
  color: #454545;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
}

a{
  text-decoration: none;
}

button{
  cursor: pointer;
}

li {
  list-style: none;
}
`;
