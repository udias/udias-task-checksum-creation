# Task - Checksum Creation

This module is used as a task for the [udias platform](http://udias.io).

`Compute the MD5 hash of a file`


## Usage

```js
import { work } from 'udias-task-checksum-creation'

const source = new Buffer(['example data'])

work(source).then((checksum) => {
  console.log(`checksum: ${checksum}`)
})
.catch(::console.error)
```

For a detailed examples checkout [the example](example/index.js).
