/**
 * # Meta
 *
 * Information about the task.
 */

export default {
  type: 'checksum-creation',
  title: 'Checksum Creation',
  text: 'Computate the checksum (MD5) of a file',
  setup: [
    {
      name: 'content',
      role: 'remote-data',
      text: 'Select a file which should be checked!',
      type: 'file'
    }
  ]
}
