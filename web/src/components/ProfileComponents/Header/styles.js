import styled from 'styled-components';
import { fadeIn } from '../../../styles/animations';

export const Container = styled.div`
  border-bottom: 2px solid var(--light-gray-opacity);

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    position: relative;

    input[type='file'] {
      display: none;
    }

    > label {
      position: absolute;
      left: 110px;

      width: 45px;
      height: 45px;

      border-radius: 50%;
      background-color: var(--light-blue);
      border: 4px solid var(--background);

      display: flex;
      flex-shrink: none;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      transition: 200ms ease;

      > svg {
        color: white;
        transition: 200ms ease;
      }

      &:hover {
        transform: scale(1.05);
      }
    }

    img {
      height: 150px;
      width: 150px;

      border-radius: 50%;
      object-fit: cover;
    }

    > main {
      max-width: 620px;
      width: 100%;
      margin-left: 30px;
      position: relative;

      h1 {
        font-size: 26px;
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
          position: absolute;
          top: -35px;
          right: 40px;

          width: 30px;
          height: 30px;

          background: none;

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
            right: 0;
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

          animation: 700ms ${fadeIn} ease;

          color: var(--text-opacity);
        }

        textarea {
          margin-top: 15px;
          font-size: 17px;

          padding: 5px;
          border-radius: 10px;

          width: 100%;
          height: 110px;

          background: none;
          resize: none;
          border: 0;
        }
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
`;
