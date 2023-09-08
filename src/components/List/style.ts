import styled from 'styled-components'

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`
