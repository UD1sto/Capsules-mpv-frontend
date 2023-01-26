import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export interface IHeader {
  label: string;
  value: string;
}

interface IBasicTableProps {
  headers: Array<IHeader>;
  children: React.ReactNode;
}

export function BasicTable({ headers, children }: IBasicTableProps) {
  return (
    <TableContainer>
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                sx={{
                  fontSize: "0.75rem",
                  color: (theme) => theme.palette.secondary.dark,
                  pl: index === 0 ? 0 : 2,
                }}
                align={index === 0 ? "left" : "center"}
                key={header.label}
              >
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
