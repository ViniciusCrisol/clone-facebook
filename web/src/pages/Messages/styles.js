import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    background: lightblue;

    flex: 1;
  }

  form {
    width: 100%;

    background: lightcoral;

    display: flex;

    input {
      flex: 1;
    }

    button {
      margin-left: 15px;
      width: 120px;
    }
  }
`;
