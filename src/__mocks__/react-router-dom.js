import { createPropertyProxy } from '~utils/proxies'

// Custom mocks
const definedMocks = {
  withRouter: jest.fn(() => 'withRouterMock'),
}

// Mock any not defined components automatically: Component -> ComponentMock
module.exports = createPropertyProxy(definedMocks)
