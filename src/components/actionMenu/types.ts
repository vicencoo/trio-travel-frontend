export type ActionMenuProps = {
  enableEdit?: boolean;
  onEdit?: () => void;
  enableDelete?: boolean;
  onDelete?: () => void;
  enableRenew?: boolean;
  onRenew?: () => void;
  enableStatus?: boolean;
  statusText?: string;
  handleStatus?: () => void;
};
