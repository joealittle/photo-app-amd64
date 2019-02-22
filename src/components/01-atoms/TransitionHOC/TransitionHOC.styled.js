import styled from 'styled-components';

export const RouteTransition = styled.section`
  position: relative;
  opacity: ${props => props.transition ? '0' : '1'};
  transition: opacity 0.6s ease-out;

  &.fade-enter-done {
    opacity: 1;
  }
`;

