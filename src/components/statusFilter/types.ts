export type StatusFilterProps = {
  status: 'all' | 'active' | 'draft';
  handleStatusChange: (type: 'all' | 'active' | 'draft') => void;
};
