import { allow } from '@toolz/allow';
import { defaultViewportSizes } from './default.viewport.sizes';
import { viewportSizeInstance } from './viewport.size.instance';

const is = {positive: 1};

export const getViewportSize = (width = 0, viewportSizes = defaultViewportSizes) => {
   allow.setFailureBehavior(allow.failureBehavior.WARN);
   allow.anInteger(width, is.positive).anArrayOfInstances(viewportSizes, viewportSizeInstance);
   const viewportSize = viewportSizes.find(size => width >= size.minWidth && width <= size.maxWidth);
   return !viewportSize ? 'unknown' : viewportSize.name;
};
