import { css } from 'styled-components';

export const flexCenter = (flex, justify, align) => css`
  display: ${flex};
  justify-content: ${justify};
  align-items: ${align};
`;

export const inputStyle = css`
  margin-bottom: 8px;
  padding: 1px 12px;
  width: 330px;
  height: 40px;
  border: 1px solid #ced4da;
  border-radius: 2px;
  &:hover {
    border: 1px solid #848c94;
  }
  ::placeholder {
    color: #acb5bd;
  }
`;

export const inputText = css`
  margin: 16px 0px 8px 0px;
  font-size: 14px;
  color: #495056;
  font-weight: 500;
`;
