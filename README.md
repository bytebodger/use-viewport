# use-viewport

`useViewport()` is a custom React Hook that reports on the current height, width, and size moniker of the current viewport. It uses a `window` listener to auto-update whenever the size of the viewport changes.

## Usage

```javascript
const SomeComponent = () => {
   const viewport = useViewport();
   
   return <>
      <div>The viewport is currently {viewport.width} pixels wide.</div>
      <div style={{display: viewport.size === 'xs' ? 'inherit' : 'none'}}>
         This div only displays on "xs"-sized viewports.
      </div>
      <div style={{display: viewport.size === 'xl' ? 'none' : 'inherit'}}>
         This div disappears once the viewport reaches an "xl" size.
      </div>
   </>;
}
```

## Methods

### useViewport()

```javascript
const API = {
   arguments: {
      initialViewportSizes: {
         optional,
         format: 'an array of viewportSize objects',
         defaultValue: [
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
         ],
      },
   },
   returns: {
      getViewportSizes: Function,
      height: Integer,
      setViewportSizes: Function,
      size: string,
      width: Integer,
   },
}
```

**Examples:**

```javascript
const SomeComponent = () => {
   const viewport = useViewport();
   
   return <>
      <div>The viewport is {viewport.height} pixels high.</div>
   </>
}
```

The Hook automatically sets a listener on the `window` object and the `height`, `width`, and `size` values will update upon any change in viewport size.

### .getViewportSizes()

```javascript
const API = {
   arguments: {
      // none
   },
   returns: [
      'viewportSize Objects'
   ],
}
```

Every object in the array will have the following data:

```javascript
const viewportSize = {
   name: string,
   minWidth: Integer,
   maxWidth: Integer,
}
```

**Examples:**

```javascript
const SomeComponent = () => {
   const viewport = useViewport();
   console.log(viewport.getViewportSizes());
   /*
      outputs the default viewport sizes:
      [
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
     ]
    */
   
   return <></>
}
```

### .setViewportSizes()

```javascript
const API = {
   arguments: {
      sizes: {
         required,
         format: 'Array of viewportSize Objects',
      },
   },
   returns: void,
}
```

**Examples:**

```javascript
const SomeComponent = () => {
   const viewport = useViewport();
   
   useEffect(() => {
      viewport.setViewportSizes([
         {
            name: 'big',
            minWidth: 1200,
            maxWidth: Number.MAX_SAFE_INTEGER,
         },
         {
            name: 'small',
            minWidth: 1,
            maxWidth: 1199,
         },
      ]);
   }, []);
   
   return <></>
}
```

Since `useViewport()`'s values are stateful, setting viewport size directly in the body of a functional component will lead to endless re-renders. That's why this example is shown inside of `useEffect()`.
