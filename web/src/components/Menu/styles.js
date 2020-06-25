import styled from 'styled-components';

export const Container = styled.header`
  width: 290px;
  height: 100%;

  background-color: var(--menu-background);

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 920px) {
    width: 100%;
    height: 80px;

    position: fixed;

    z-index: 40;

    box-shadow: 0px 4px 8px -5px rgba(0, 0, 0, 0.4);
    padding: 0 15px;

    > div {
      width: 100%;
      height: 100%;

      position: relative;

      margin: 0;

      display: flex;
      align-items: center;
      justify-content: space-between;

      section {
        width: 50px;
        height: 50px;
      }

      > div {
        display: flex;
      }

      ul {
        display: none;
      }
    }
  }
`;

export const MenuContainer = styled.div`
  width: 220px;
  height: 100%;

  margin: 50px 0 0 70px;

  position: fixed;
  left: 0;

  > div {
    display: none;

    > a {
      border-bottom: 2px solid var(--light-text);

      & + a {
        margin-left: 15px;
      }

      &.active {
        border-color: var(--light-blue);
        font-weight: normal;
        opacity: 1;
      }
    }
  }

  > section {
    width: 60px;
    height: 60px;

    background: var(--light-blue);
    box-shadow: 0px 13px 30px var(--dark-blue);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: none;
  }

  a {
    font-size: 18px;
    color: var(--text);

    opacity: 0.7;

    display: flex;
    align-items: center;

    transition: opacity 200ms ease;

    > svg {
      margin-right: 10px;
    }

    &:hover {
      opacity: 1;
    }

    &.active {
      font-weight: bold;
      opacity: 1;
    }
  }

  ul {
    margin-top: 50px;

    h4 {
      margin-top: 30px;
      font-size: 18px;
    }

    button {
      margin-top: 30px;

      display: flex;
      align-items: center;

      border: 0;
      background: none;

      font-size: 18px;
      font-weight: Medium;

      opacity: 0.7;

      svg {
        margin-right: 10px;
        color: var(--light-blue);
        transition: 200ms ease;
      }

      &:hover {
        opacity: 1;

        svg {
          transform: scale(1.2);
          color: lightcoral;
        }
      }
    }

    li {
      margin-top: 30px;

      span {
        font-size: 12px;

        margin-left: 10px;
        opacity: 0.7;
      }
    }
  }
`;
