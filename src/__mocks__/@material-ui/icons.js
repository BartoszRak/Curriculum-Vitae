import { createPropertyProxy } from '~utils/proxies'

// Custom mocks
const definedMocks = {}

// Mock any not defined components automatically: Component -> ComponentMock
module.exports = createPropertyProxy(definedMocks)
