import cache from './cache'
import data from './data'
import storage from './storage'
import search from './search'

export const loadPorts = (adapters) =>  ({
  cache: adapters.cache ? cache(adapters.cache) : null,
  data: adapters.data ? data(adapters.data) : null,
  storage: adapters.storage ? storage(adapters.storage) : null,
  search: adapters.search ? search(adapters.search) : null,
  hooks: adapters.hooks
})