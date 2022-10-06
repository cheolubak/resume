import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import {
  PageLoadingOverlayStyled,
  PageLoadingStyled,
} from './PageLoadingStyled';

export default function PageLoading() {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (loadingRef.current && !isLoadedRef.current) {
      Lottie.loadAnimation({
        container: loadingRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./coding.json'),
      });
      isLoadedRef.current = true;
    }
  }, []);

  return (
    <>
      <PageLoadingOverlayStyled />
      <PageLoadingStyled ref={loadingRef} />
    </>
  );
}
