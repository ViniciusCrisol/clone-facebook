import styled from 'styled-components';
import { fadeIn } from '../../../styles/animations';

export const Container = styled.div`
  max-height: 240px;
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
      form {
        position: relative;

        > button {
          background: none;

          position: absolute;
          top: -15px;

          svg {
            margin-right: 10px;
            color: var(--light-text);

            transition: 200ms ease;
          }

          &:hover {
            svg {
              color: var(--light-blue);
              transform: scale(1.1);
            }
          }
        }

        .active {
          background-color: white;
          box-shadow: 0px 3px 1px var(--light-gray-opacity);
          animation: 700ms ${fadeIn} ease-out;
          color: var(--text-opacity);
        }

        textarea {
          margin-top: 15px;
          font-size: 17px;

          padding: 5px;
          border-radius: 10px;

          width: 520px;
          height: 100px;

          background: none;
          resize: none;
          border: 0;

          opacity: 1;
        }
      }
    }

    footer {
      height: 50px;
      margin-top: 30px;

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
