import styled from 'styled-components';

export const Container = styled.div`
  max-height: 220px;
  max-width: 1025px;

  border-bottom: 2px solid var(--light-gray-opacity);

  display: flex;
  align-items: center;

  img {
    height: 150px;
    border-radius: 50%;
  }

  div {
    margin-left: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
      margin-top: 50px;

      display: flex;
      align-items: center;

      ul {
        width: 100%;

        display: flex;
        align-items: flex-start;

        li {
          a {
            font-size: 18px;

            line-height: 25px;
            font-weight: Regular;
            color: var(--text-opacity);

            &.active {
              color: var(--text);
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
