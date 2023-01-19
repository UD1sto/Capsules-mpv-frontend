import { BasicTable, Card, Header } from "@/components";
import {
  BORROW_HEADERS,
  SUPPLY_HEADERS,
  TABLE_DATA,
  TABLE_DATA2,
} from "@/content";
import {
  Stack,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";

const style = {
  maxWidth: 570,
  minWidth: 420,
};

export function BorrowTokens() {
  const md = useMediaQuery("(min-width:1200px)");

  return (
    <Stack spacing={md ? 4 : 2}>
      <Stack direction={md ? "row" : "column"} spacing={md ? 4 : 0}>
        <Card
          title="Your supplies"
          noContent="Nothing supplied yet"
          sx={{ mb: md ? 0 : 2 }}
        />
        <Card title="Your borrows" noContent="Nothing borrowed yet" />
      </Stack>
      <Stack direction={md ? "row" : "column"} spacing={md ? 4 : 0}>
        <Card title="Assets to supply" sx={{ mb: md ? 0 : 2 }}>
          <BasicTable headers={SUPPLY_HEADERS}>
            {TABLE_DATA.map((row) => (
              <TableItem row={row} headers={SUPPLY_HEADERS} supply />
            ))}
          </BasicTable>
        </Card>
        <Card title="Assets to borrow">
          <BasicTable headers={BORROW_HEADERS}>
            {TABLE_DATA2.map((row) => (
              <TableItem row={row} headers={BORROW_HEADERS} />
            ))}
          </BasicTable>
        </Card>
      </Stack>
    </Stack>
  );
}

const TableItem = ({
  row,
  headers,
  supply,
}: {
  row: object;
  headers: Array<Header>;
  supply?: boolean;
}) => {
  return (
    <TableRow
      sx={{
        borderTop: "2px solid #141414",
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      {headers.map((header, index) => {
        const firstEl = index === 0;
        if (firstEl)
          return (
            <TableCell
              align="left"
              sx={{
                p: "20px 0 30px",
                fontSize: { xs: "0.87rem", sm: "1rem" },
                letterSpacing: "0.05em",
              }}
            >
              <Stack direction="row" alignItems="center">
                <img
                  src="/images/bnc.png"
                  alt=""
                  style={{ width: "20px", height: "20px", marginRight: "8px" }}
                />
                {row[header.value]}
              </Stack>

              <Stack direction="row" spacing={2} mt={2.3}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1rem" },
                    textTransform: "none",
                    ":hover": {
                      color: (theme) => theme.palette.primary.dark,
                      cursor: "pointer",
                      transition: "0.3s",
                    },
                  }}
                >
                  {supply ? "Supply" : "Borrow"}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1rem" },
                    textTransform: "none",
                    color: (theme) => theme.palette.secondary.dark,
                    ":hover": {
                      color: (theme) => theme.palette.secondary.main,
                      cursor: "pointer",
                      transition: "0.3s",
                    },
                  }}
                >
                  Details
                </Typography>
              </Stack>
            </TableCell>
          );
        return (
          <TableCell
            align="center"
            sx={{
              fontSize: { xs: "0.87rem", sm: "1rem" },
              p: "20px 0 30px",
              verticalAlign: "top",
            }}
          >
            {row[header.value]}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
