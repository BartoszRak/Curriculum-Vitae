/* eslint-disable */
export const createPropertyProxy = () => new Proxy({}, {
  get: (target, name) => target[name] || name,
})

export const PropertyProxy = createPropertyProxy()
