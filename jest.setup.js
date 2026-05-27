import '@testing-library/jest-dom'
// Use require to avoid TypeScript needing @types/node in this file
const util = require('util')

global.TextEncoder = global.TextEncoder || util.TextEncoder
global.TextDecoder = global.TextDecoder || util.TextDecoder
