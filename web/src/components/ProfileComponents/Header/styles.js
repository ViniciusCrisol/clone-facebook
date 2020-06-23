import styled from 'styled-components';
import { fadeIn } from '../../../styles/animations';

export const Container = styled.div`
  border-bottom: 2px solid var(--light-gray-opacity);
  display: flex;

  img {
    height: 150px;
    border-radius: 50%;
  }

  > div {
    margin-left: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > main {
      position: relative;

      h1 {
        font-size: 30px;
      }

      > button {
        width: 30px;
        height: 30px;

        position: absolute;
        right: -70px;
        top: 22px;

        background: none;

        transition: 200ms ease;

        svg {
          color: var(--light-text);
        }

        &:hover {
          transform: scale(1.1);

          svg {
            color: var(--light-blue);
            transition: 200ms ease;
          }
        }
      }

      form {
        position: relative;

        > button {
          width: 30px;
          height: 30px;
          background: none;

          position: absolute;
          top: -15px;
          right: 40px;

          span {
            position: absolute;
            right: -8px;
            top: -10px;

            width: 23px;
            height: 23px;

            border-radius: 50%;
            background-color: var(--light-text);

            display: flex;
            align-items: center;
            justify-content: center;
          }

          svg {
            color: var(--light-text);

            transition: 200ms ease;
          }

          & + button {
            right: 0px;
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

          width: 620px;
          height: 80px;

          background: none;
          resize: none;
          border: 0;
        }
      }
    }

    footer {
      height: 50px;

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

    @media (max-width: 1250px) {
      width: 100%;

      main {
        form {
          textarea {
            width: 100%;
            height: 140px;
          }
        }
      }
      footer {
        display: none;
      }
    }
  }
`;
