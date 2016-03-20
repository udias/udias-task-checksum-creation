/**
 * # Work
 *
 *
 */

import { PassThrough } from 'stream'
import { createHash } from 'crypto'

/**
 * [createChecksum description]
 *
 * @param  {Stream|Buffer} source -
 * @return {Promise}              -
 */
export default function createChecksum (source) {
  return new Promise((resolve, reject) => {

    var stream = source

    if (source instanceof Buffer) {
      stream = new PassThrough()
      stream.end(source)
    }

    const hash = createHash('md5')

    stream.on('error', reject)

    stream.on('data', (data) => hash.update(data, 'utf8'))

    stream.on('end', () => {
      const checksum = hash.digest('hex')
      return resolve(checksum)
    })

  })
}
