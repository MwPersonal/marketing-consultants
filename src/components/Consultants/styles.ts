import { DefaultTitle } from '@/styles/Global';
import styled from 'styled-components';

export const Container = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled(DefaultTitle)`
  font-weight: 600;
  text-align: center;
`;

export const ListConsultants = styled.ul`
  width: 100%;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, 270px);
  justify-content: center;
  list-style: none;
`;

export const Consultant = styled.li`
  transition: 0.4s transform;

  & img {
    aspect-ratio: 12 / 22;
  }

  &:hover {
    transform: scale(1.04);
  }
`;
