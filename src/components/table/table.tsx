import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export interface Header {
  label: string;
  value: string;
}

interface BasicTableProps {
  headers: Array<Header>;
  children: React.ReactNode;
}

export function BasicTable({ headers, children }: BasicTableProps) {
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
                }}
                align={index === 0 ? "left" : "center"}
              >
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
