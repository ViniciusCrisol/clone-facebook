import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-height: 250px;

  border-bottom: 2px solid #ebebeb;

  img {
    height: 170px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 30px;

    main {
      max-width: 970px;

      h1 {
        font-size: 30px;
      }

      p {
        margin-top: 15px;
        font-size: 17px;

        opacity: 0.6;
      }
    }

    footer {
      height: 50px;

      display: flex;
      align-items: center;

      margin-top: 50px;

      ul {
        width: 100%;

        display: flex;
        align-items: flex-start;

        li {
          button {
            background: none;
            border: 0;

            font-size: 18px;

            line-height: 25px;
            font-weight: Regular;
            color: #45454580;
          }

          &.active {
            button {
              color: #454545;
            }
          }

          & + li {
            margin-left: 30px;
          }
        }
      }
    }
  }
`;
