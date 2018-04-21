# react-isomorphic-portals

Create react portals on the server

## Installation

Using npm:

```sh
$ npm install --save react-isomorphic-portals
```

Using yarn:

```sh
$ yarn add react-isomorphic-portals
```

## Usage

On the server, create a `PortalCollector` and pass it as the `value` prop
of a `PortalCollectorProvider`:

```js
import { PortalCollector, PortalCollectorProvider } from 'react-isomorphic-portals';
import { renderToString } from 'react-dom/server';

// Where your server renders the application:

const collector = new PortalCollector();

const app = renderToString(
  <PortalCollectorProvider value={collector}>
    <App />
  </PortalCollectorProvider>
);
```

To create a portal, import `createPortal` from this module.

```js
import { createPortal } from 'react-isomorphic-portals';

const Modal = () => 'This is a modal component';

const ModalContainer = () => createPortal(<Modal />, 'modal-root');
```

Note that this module's `createPortal` function receives an element ID
as its second argument, not a DOM element.

The `PortalCollector`'s `renderPortalsToStaticMarkup` method returns an object
containing all rendered portals. These should then be added to the HTML.
This can be done with whatever template engine you want.

Here's an example using template strings:

```js
const portals = collector.renderPortalsToStaticMarkup();

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Page Title</title>
</head>
<body>
  <div id="root">${app}</div>
  <div id="modal-root">${portals['modal-root']}</div>
</body>
</html>
`;
```

Another thing you'll need to do is remove the server rendered portals
on the client before the first render. This can be done like this:

```js
document.getElementById('modal-root').childNodes.forEach(node => node.remove());
```

This is needed because React will ignore the server renderer portals
and add the portals another time.

## API

### `createPortal(children: React$Node, elementId: string): React$Node

The first argument (`children`) is any renderable React child,
such as an element, string, or fragment.
The second argument (`elementId`) is the ID of a DOM element.

### `PortalCollector`

Collects portals on the server for rendering to static markup.

#### `renderPortalsToStaticMarkup(): { [elementId: string]: Array<string> }

Returns an object whose keys are the DOM element IDs passed to `createPortal`
and whose values are arrays of renderer portals.

These arrays should be added to the HTML on the server.

### `PortalCollectorProvider`

Provides a `PortalCollector` context that is used when calling `createPortal`
on the server.

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
