import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default createGlobalStyle`

*{
  margin : 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus{
  outline: 0;
}

html, body , #root{
  min-height: 100%;
  width: 100%;
  
  display: flex;
}


body{
  -webkit-font-smoothing: antialiased !important;
  background-color: var(--background);
}

body, input , button, textarea {
  color: var(--text);
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
}

a{
  text-decoration: none;
}

button{
  cursor: pointer;
}

button, input{
  border: 0;
}

li {
  list-style: none;
}

:root{
--background : #F6F6F9;
--menu-background : #f2f2f5;
--light-blue : #5085e8;
--dark-blue:#0341b164;

--text : #454545;
--text-opacity : #45454580;
--light-text : #d3d3d3;

--light-gray : #d3d8e0;
--light-gray-opacity : #d3d8e067;
}
`;
