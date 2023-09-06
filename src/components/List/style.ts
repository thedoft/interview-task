import styled from 'styled-components'

export const StyledList = styled.ul`
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`
