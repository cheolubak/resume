import React, { useEffect, useRef } from 'react';
import { LoadingOverlayStyled, LoadingStyled } from './LoadingStyled';
import Lottie from 'lottie-web/build/player/lottie_light';

export default function Loading() {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (loadingRef.current && !isLoadedRef.current) {
      Lottie.loadAnimation({
        container: loadingRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./send.json'),
      });
      isLoadedRef.current = true;
    }
  }, []);

  return (
    <>
      <LoadingOverlayStyled />
      <LoadingStyled ref={loadingRef} />
    </>
  );
}
