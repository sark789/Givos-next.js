import React, { useContext, useEffect, useState } from "react";
import {
  PageTransitionEnter,
  PageTransitionExit,
  PageTransitionExiting,
} from "./PageTransitionAnimations";
import { PageTransitionOverlay } from "./PageTransitionElements";
import { Transition, TransitionGroup } from "react-transition-group";
import { MenuContext } from "../../utils/MenuContext";

const PageTransition = ({ router, children }) => {
  const [isMenuOpened, setIsMenuOpened] = useContext(MenuContext);
  const { isRouteFromMenu } = isMenuOpened;

  return (
    <>
      <PageTransitionOverlay className="page-transition" />
      <TransitionGroup>
        <Transition
          timeout={isRouteFromMenu ? 300 : 900}
          key={router.asPath}
          onEnter={() =>
            PageTransitionEnter({
              isRouteFromMenu: isRouteFromMenu,
              location: router.pathname,
              containerRef: ".page-transition",
            })
          }
          onExiting={(node) =>
            PageTransitionExiting({
              node: node,
              isRouteFromMenu: isRouteFromMenu,
            })
          }
          onExit={() => PageTransitionExit({ location: router.pathname })}
          in={true}
          appear={true}
        >
          {children}
        </Transition>
      </TransitionGroup>
    </>
  );
};

export default PageTransition;
