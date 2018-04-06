/**
 * Put together template data
 */

const io = require('indian-ocean');
const r = require('request');
const request = require('cached-request')(r);
const path = require('path');
const _ = require('lodash');

// Configure
request.setCacheDirectory(path.join(__dirname, '..', '.cache-remote-data'));

// Get remote source
async function remoteSource(url) {
  return new Promise((resolve, reject) => {
    request(
      {
        url: url,
        ttl: 60 * 10
      },
      (error, response, body) => {
        if (error) {
          return reject(error);
        }

        if (url.match(/json/)) {
          resolve(JSON.parse(body));
        }
        else if (url.match(/csv/)) {
          // TODO
          resolve(body);
        }

        resolve(body);
      }
    );
  });
}

module.exports = async (sources, cwd = path.join(__dirname, '..')) => {
  let converted = {};

  for (let si in sources) {
    // Check if source is object or string
    let location = sources[si];
    if (_.isObject(sources[si])) {
      location = sources[si].location;
    }

    // Look for options
    let options = {};
    if (_.isObject(sources[si]) && sources[si].renameHeaders) {
      options.map = row => {
        return _.mapKeys(row, (v, k) => _.camelCase(k));
      };
    }

    if (location.match(/^http/i)) {
      converted[si] = await remoteSource(location, options);
    }
    else if (location.match(/^\//i)) {
      converted[si] = io.readDataSync(location, options);
    }
    else {
      converted[si] = io.readDataSync(path.join(cwd, location), options);
    }
  }

  return converted;
};
