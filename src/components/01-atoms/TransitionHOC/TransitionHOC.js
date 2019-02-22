import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {RouteTransition} from './TransitionHOC.styled';

const TransitionHOC = (props) => {
  const {children, transition = true} = props;
  return (
    <CSSTransition classNames="fade" in={transition} appear timeout={250}>
      <RouteTransition className="fade" transition={transition}>
        {children}
      </RouteTransition>
    </CSSTransition>
)};

export default TransitionHOC;

