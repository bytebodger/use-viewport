import { useViewport } from './use.viewport';
import { render } from '@testing-library/react';
import { useEffect } from 'react';

const customSizes = [
   {
      name: 'foo',
      minWidth: 300,
      maxWidth: 500,
   },
   {
      name: 'bar',
      minWidth: 800,
      maxWidth: 1000,
   },
];

test('getViewportSizes() returns the viewportSizes array of objects', () => {
   const TestComponent = () => {
      const viewport = useViewport();
      expect(viewport.getViewportSizes()).toEqual([
         {
            name: 'xs',
            minWidth: Number.MIN_SAFE_INTEGER,
            maxWidth: 543,
         },
         {
            name: 'sm',
            minWidth: 544,
            maxWidth: 767,
         },
         {
            name: 'md',
            minWidth: 768,
            maxWidth: 1023,
         },
         {
            name: 'lg',
            minWidth: 1024,
            maxWidth: 1279,
         },
         {
            name: 'xl',
            minWidth: 1280,
            maxWidth: Number.MAX_SAFE_INTEGER,
         },
      ]);
      return <></>;
   };
   render(
      <TestComponent/>);
});

test('setViewportSizes() sets viewportSizes to the new array of objects', () => {
   const TestComponent = () => {
      const viewport = useViewport();
      useEffect(() => {
         viewport.setViewportSizes(customSizes);
         expect(viewport.getViewportSizes()).toEqual(customSizes);
      }, []);
      return <></>;
   };
   render(
      <TestComponent/>);
});

test('getViewportSizes() returns the customSizes when the Hook is initialized with them', () => {
   const TestComponent = () => {
      const viewport = useViewport(customSizes);
      expect(viewport.getViewportSizes()).toEqual(customSizes);
      return <></>;
   };
   render(
      <TestComponent/>);
});
