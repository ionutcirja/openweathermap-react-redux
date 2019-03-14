import styled from 'styled-components';

export const Hour = styled.li`
  display: inline-block;
  list-style-type: none;
  margin-right: 40px;
`;

export const Details = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.2rem;
  color: ${({ colour }) => colour};
`;

export const Title = styled.h3`
  margin: 30px 0 10px;
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${({ colour }) => colour};
`;
