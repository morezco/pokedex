/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

function getScrollPosition({
  element,
  useWindow,
}: {
  element?: any;
  useWindow: any;
}) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

export function useScrollPosition(
  effect: Function,
  deps: Array<any>,
  element?: React.Ref<React.ReactElement>,
  useWindow?: any,
  wait?: any,
) {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout: any = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}

export const useSmoothWindowScrollScrolling = (
  startingStepSize: number,
  dependencies: Array<any>,
  upperLimit?: number,
  lowerLimit?: number,
) => {
  useEffect(() => {
    if (
      window.scrollY <= (lowerLimit || Infinity) &&
      window.scrollY >= (upperLimit || 0)
    ) {
      const step = (i: number) => {
        if (i) {
          window.scrollTo(0, window.scrollY + i);
          window.requestAnimationFrame(step.bind(undefined, i - 1));
        }
      };
      window.requestAnimationFrame(step.bind(undefined, startingStepSize));
    }
  }, [...dependencies]);
};
