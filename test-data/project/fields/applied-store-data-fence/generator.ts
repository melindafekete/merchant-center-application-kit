import type { TStoreDataFences } from './types';

import { Generator } from '@commercetools-test-data/core';

const generator = Generator<TStoreDataFences>({
  name: 'StoreDataFence',
  fields: {
    store: {
      orders: {
        canManageOrders: {
          values: ['usa', 'germany'],
        },
        canViewOrders: {
          values: ['canada'],
        },
      },
      // ...
    },
  },
});

export default generator;
