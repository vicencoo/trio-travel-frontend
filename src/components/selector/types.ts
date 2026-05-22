import type { SelectChangeEvent } from "@mui/material";

type SelectorOption = {
  label: string;
  value: string | number;
};

export type SelectorProps = {
  value?: string | number;
  name?: string;
  label?: string;
  options: SelectorOption[];
  border?: "black" | "white" | "blue";
  multiple?: boolean;
  errorMessage?: string;
  disablePortal?: boolean;
  onChange: (event: SelectChangeEvent<string | number | string[]>) => void;
};
