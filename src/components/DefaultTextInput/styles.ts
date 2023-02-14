import styled from 'styled-components';

export const ContainerInput = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.selection};
  font-weight: 600;
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.gray};
  background-color: ${({ theme }) => theme.grayLigthed};
  color: gray;
  padding: 18px 25px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 15px;
  color: ${({ theme }) => theme.comment};
  transition: 0.4s border-color;

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }

  &:focus {
    border-color: ${({ theme }) => theme.comment};
  }
`;
