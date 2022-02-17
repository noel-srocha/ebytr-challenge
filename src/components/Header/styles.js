import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 20%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
    }

    h1 {
      color: #fff;
    }
  }

  button {
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
