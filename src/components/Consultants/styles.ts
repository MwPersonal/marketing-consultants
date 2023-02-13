import styled from 'styled-components';

export const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.p`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
`;

export const ListConsultants = styled.ul`
  width: 100%;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
`;

export const Consultant = styled.li`
  & div {
    aspect-ratio: auto 429 / 765;
  }
`;
