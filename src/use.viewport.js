import { useEffect, useState } from 'react';
import { getViewportSize } from './get.viewport.size';
import { defaultViewportSizes } from './default.viewport.sizes';
import { allow } from '@toolz/allow';
import { viewportSizeInstance } from './viewport.size.instance';

export const useViewport = (initialViewportSizes = defaultViewportSizes) => {
   allow.setFailureBehavior(allow.failureBehavior.WARN);
   allow.anArrayOfInstances(initialViewportSizes, viewportSizeInstance);
   const [height, setHeight] = useState(window.innerHeight);
   const [size, setSize] = useState(getViewportSize(window.innerWidth, initialViewportSizes));
   const [width, setWidth] = useState(window.innerWidth);
   
   const getViewportSizes = () => viewportSizes;
   
   const setViewportSizes = (sizes = []) => {
      allow.anArrayOfInstances(sizes, viewportSizeInstance);
      viewportSizes = sizes;
      setSize(getViewportSize(window.innerWidth, viewportSizes));
   };
   
   let viewportSizes = initialViewportSizes;
   
   useEffect(() => {
      const handleWindowResize = () => {
         setHeight(window.innerHeight);
         setSize(getViewportSize(window.innerWidth, viewportSizes));
         setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
   }, []);
   
   return {
      getViewportSizes,
      height,
      setViewportSizes,
      size,
      width,
   };
};
