export type ActionMenuProps = {
  enableEdit?: boolean;
  onEdit?: () => void;
  enableDelete?: boolean;
  onDelete?: () => void;
  enableRenew?: boolean;
  onRenew?: () => void;
  disableRenew?: boolean;
  enableStatus?: boolean;
  statusText?: string;
  handleStatus?: () => void;
};
