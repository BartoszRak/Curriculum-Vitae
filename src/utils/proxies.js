/* eslint-disable */
export const createPropertyProxy = (obj = {}) => new Proxy(obj, {
  get: (target, name) => target[name] || `${name}Mock`,
})

export const PropertyProxy = createPropertyProxy()
