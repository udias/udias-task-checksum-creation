'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChecksum;

var _stream = require('stream');

var _crypto = require('crypto');

/**
 * [createChecksum description]
 *
 * @param  {Stream|Buffer} source -
 * @return {Promise}              -
 */
/**
 * # Work
 *
 *
 */

function createChecksum(source) {
  return new Promise(function (resolve, reject) {

    var stream = source;

    if (source instanceof Buffer) {
      stream = new _stream.PassThrough();
      stream.end(source);
    }

    var hash = (0, _crypto.createHash)('md5');

    stream.on('error', reject);

    stream.on('data', function (data) {
      return hash.update(data, 'utf8');
    });

    stream.on('end', function () {
      var checksum = hash.digest('hex');
      return resolve(checksum);
    });
  });
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBZXdCOztBQVR4Qjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFRZSxTQUFTLGNBQVQsQ0FBeUIsTUFBekIsRUFBaUM7QUFDOUMsU0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCOztBQUV0QyxRQUFJLFNBQVMsTUFBVCxDQUZrQzs7QUFJdEMsUUFBSSxrQkFBa0IsTUFBbEIsRUFBMEI7QUFDNUIsZUFBUyx5QkFBVCxDQUQ0QjtBQUU1QixhQUFPLEdBQVAsQ0FBVyxNQUFYLEVBRjRCO0tBQTlCOztBQUtBLFFBQU0sT0FBTyx3QkFBVyxLQUFYLENBQVAsQ0FUZ0M7O0FBV3RDLFdBQU8sRUFBUCxDQUFVLE9BQVYsRUFBbUIsTUFBbkIsRUFYc0M7O0FBYXRDLFdBQU8sRUFBUCxDQUFVLE1BQVYsRUFBa0IsVUFBQyxJQUFEO2FBQVUsS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixNQUFsQjtLQUFWLENBQWxCLENBYnNDOztBQWV0QyxXQUFPLEVBQVAsQ0FBVSxLQUFWLEVBQWlCLFlBQU07QUFDckIsVUFBTSxXQUFXLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBWCxDQURlO0FBRXJCLGFBQU8sUUFBUSxRQUFSLENBQVAsQ0FGcUI7S0FBTixDQUFqQixDQWZzQztHQUFyQixDQUFuQixDQUQ4QztDQUFqQyIsImZpbGUiOiJ3b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAjIFdvcmtcbiAqXG4gKlxuICovXG5cbmltcG9ydCB7IFBhc3NUaHJvdWdoIH0gZnJvbSAnc3RyZWFtJ1xuaW1wb3J0IHsgY3JlYXRlSGFzaCB9IGZyb20gJ2NyeXB0bydcblxuLyoqXG4gKiBbY3JlYXRlQ2hlY2tzdW0gZGVzY3JpcHRpb25dXG4gKlxuICogQHBhcmFtICB7U3RyZWFtfEJ1ZmZlcn0gc291cmNlIC1cbiAqIEByZXR1cm4ge1Byb21pc2V9ICAgICAgICAgICAgICAtXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNoZWNrc3VtIChzb3VyY2UpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgIHZhciBzdHJlYW0gPSBzb3VyY2VcblxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBCdWZmZXIpIHtcbiAgICAgIHN0cmVhbSA9IG5ldyBQYXNzVGhyb3VnaCgpXG4gICAgICBzdHJlYW0uZW5kKHNvdXJjZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoID0gY3JlYXRlSGFzaCgnbWQ1JylcblxuICAgIHN0cmVhbS5vbignZXJyb3InLCByZWplY3QpXG5cbiAgICBzdHJlYW0ub24oJ2RhdGEnLCAoZGF0YSkgPT4gaGFzaC51cGRhdGUoZGF0YSwgJ3V0ZjgnKSlcblxuICAgIHN0cmVhbS5vbignZW5kJywgKCkgPT4ge1xuICAgICAgY29uc3QgY2hlY2tzdW0gPSBoYXNoLmRpZ2VzdCgnaGV4JylcbiAgICAgIHJldHVybiByZXNvbHZlKGNoZWNrc3VtKVxuICAgIH0pXG5cbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
