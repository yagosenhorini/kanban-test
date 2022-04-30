import { rem } from 'polished';
import styled from 'styled-components';

export const FormWrapper = styled.section`
  top: 25%;
  left: 50%;
  width: 100%;
  position: absolute;
  transform: translateX(-50%);
`;

export const FieldsetForm = styled.fieldset`
  width: 100%;
  border: none;
  margin-bottom: ${rem(20)};
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: ${rem(14)};
  margin-top: ${rem(10)};
  margin-left: ${rem(10)};
  color: ${({ theme }) => theme.colors.darkRed};
`;
