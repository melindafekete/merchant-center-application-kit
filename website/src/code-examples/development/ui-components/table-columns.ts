import type { TColumn } from '@commercetools-uikit/data-table';

const columns: TColumn[] = [
  { key: 'name', label: 'Channel name' },
  { key: 'key', label: 'Channel key', isSortable: true },
  { key: 'roles', label: 'Roles' },
];