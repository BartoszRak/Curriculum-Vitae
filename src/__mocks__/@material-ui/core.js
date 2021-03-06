import { createPropertyProxy } from '~utils/proxies'

// Custom mocks
const definedMocks = {
  createMuiTheme: jest.fn(),
  withStyles: jest.fn(() => jest.fn(component => component)),
}

// Mock any not defined components automatically: Component -> ComponentMock
module.exports = createPropertyProxy(definedMocks)
