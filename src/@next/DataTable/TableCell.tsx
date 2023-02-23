import React from 'react';
import { Typography } from '../Typography';
import { StyledTableCell, StyledTextWrapper } from './DataTableStyle';

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableColElement> {
  children: React.ReactNode;
}

export const TableCell = ({ align, children }: TableCellProps) => {
  return (
    <StyledTableCell data-text-align={align}>
      <div>
        <Typography as="div" variant="body1">
          <StyledTextWrapper>{children}</StyledTextWrapper>
        </Typography>
      </div>
    </StyledTableCell>
  );
};
