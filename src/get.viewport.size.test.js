import { getViewportSize } from './get.viewport.size';

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

test('getViewportSize() returns proper size names', () => {
   expect(getViewportSize(100)).toEqual('xs');
   expect(getViewportSize(600)).toEqual('sm');
   expect(getViewportSize(900)).toEqual('md');
   expect(getViewportSize(1100)).toEqual('lg');
   expect(getViewportSize(2000)).toEqual('xl');
});

test('getViewportSize() returns proper size names with custom viewportSizes array', () => {
   expect(getViewportSize(400, customSizes)).toEqual('foo');
   expect(getViewportSize(900, customSizes)).toEqual('bar');
   expect(getViewportSize(2000, customSizes)).toEqual('unknown');
});
