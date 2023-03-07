import { DefaultTitle } from '@/styles/Global';
import styled from 'styled-components';

export const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 500px) {
    grid-column: 13 / 1;
  }

  /* @media (max-width: 750px) {
    grid-column: 12 / 2;
  } */
`;

export const Title = styled(DefaultTitle)`
  text-align: center;
`;

export const ListConsultants = styled.ul`
  width: 100%;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  list-style: none;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const Consultant = styled.li`
  transition: 0.4s transform;

  &:hover {
    transform: scale(1.04);
  }
`;
