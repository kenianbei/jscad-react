# jscad-react

## Overview

This package provides a rendering component for rendering jscad models (V2). It currently requires the alpha version of the rendering package.

## Installation

By itself it doesn't actually render any solids, it just shows a default grid view. You will need to install the @jscad/modeling package as well.

```bash
# Install the react component.
npm i -S jscad-react

# Install the jscad modeling package.
npm i -S @jscad/modeling
```

## Usage

### Typescript ([live demo](https://codesandbox.io/s/jscad-react-ts-demo-soqt1?file=/src/App.tsx))

```ts
import * as React from 'react'
import { cube } from '@jscad/modeling/src/primitives'
import { render } from 'react-dom'
import { Renderer } from 'jscad-react'

const App: React.FC = () => {
  const [solids] = React.useState<any[]>([cube([0, 0, 0], 12)])
  return <Renderer solids={solids} height={500} width={500} />
}

render(<App />, document.body)
```

### Javascript ([live demo](https://codesandbox.io/s/jscad-react-js-demo-knen3))

```js
import * as React from 'react'
import { cube } from '@jscad/modeling/src/primitives'
import { render } from 'react-dom'
import { Renderer } from 'jscad-react'

const App = () => {
  const [solids] = React.useState([cube([0, 0, 0], 12)])
  return <Renderer solids={solids} height={500} width={500} />
}

render(<App />, document.body)
```

The renderer only rerenders on state change. If your app is having rendering issues you can add the animate prop and it will run the render as a requestAnimationFrame loop.

## License

[The MIT License (MIT)](LICENSE)
