/* eslint-disable @typescript-eslint/no-var-requires */
const semver = require('semver')

const version = '18.16.0'
if (!semver.satisfies(process.version, version)) {
  console.log(`Required node version ${version} not satisfied with current version ${process.version}.`)
  process.exit(1)
}
console.log('node version OK - ', process.version)
