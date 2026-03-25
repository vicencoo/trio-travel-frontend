export type StatusToggleProps = {
  status: string;
  activeText: string;
  draftText: string;
  onChange: (status: 'active' | 'draft') => void;
};
