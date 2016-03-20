/**
 * # Example
 *
 * Computate checksum
 */

// const ChecksumCreation = require('../dist/udias-task-checksum-creation.node.js')
const ChecksumCreation = require('../lib/index')

const source = new Buffer(['example data'])

ChecksumCreation.work(source).then((checksum) => {
  console.log(`checksum: ${checksum}`)
})
.catch(console.log.bind(console))
