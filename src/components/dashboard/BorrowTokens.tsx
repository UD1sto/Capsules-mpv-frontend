import { BasicTable, Card, Header, SelectInput } from "@/components";
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
import { ApyIcon, NetIcon } from "public/icons";

const icons = [
  {
    title: "Net worth",
    icon: <NetIcon style={{ width: "20px" }} />,
    value: "0$",
  },
  {
    title: "Net APY",
    icon: <ApyIcon style={{ width: "22px" }} />,
    value: "0%",
  },
];

export function BorrowTokens() {
  const md = useMediaQuery("(min-width:1200px)");

  return (
    <Stack spacing={md ? 4 : 2}>
      <SelectInput />
      <Stack
        direction="row"
        justifyContent="space-between"
        maxWidth={350}
        sx={{
          mt: "30px!important",
          mb: md ? "10px!important" : "70px!important",
        }}
      >
        {icons.map((icon) => (
          <Stack direction="row" spacing={2} key={icon.title}>
            <Stack
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: (theme) => theme.palette.background.default,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon.icon}
            </Stack>
            <Stack>
              <Typography>{icon.title}</Typography>
              <Typography fontWeight={500} fontSize="1.12rem">
                {icon.value}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
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
              <TableItem
                row={row}
                headers={SUPPLY_HEADERS}
                supply
                key={row.assets}
              />
            ))}
          </BasicTable>
          {!md && (
            <Typography
              variant="h3"
              textAlign={"center"}
              sx={{
                fontSize: { xs: "1rem", sm: "1rem" },
                color: md
                  ? (theme) => theme.palette.secondary.main
                  : (theme) => theme.palette.primary.dark,
                textTransform: "none",
                ":hover": {
                  color: md
                    ? (theme) => theme.palette.primary.dark
                    : (theme) => theme.palette.primary.main,
                  cursor: "pointer",
                  transition: "0.3s",
                },
              }}
            >
              See more +
            </Typography>
          )}
        </Card>
        <Card title="Assets to borrow">
          <BasicTable headers={BORROW_HEADERS}>
            {TABLE_DATA2.map((row) => (
              <TableItem row={row} headers={BORROW_HEADERS} key={row.assets} />
            ))}
          </BasicTable>
          {!md && (
            <Typography
              variant="h3"
              textAlign={"center"}
              sx={{
                fontSize: { xs: "1rem", sm: "1rem" },
                color: md
                  ? (theme) => theme.palette.secondary.main
                  : (theme) => theme.palette.primary.dark,
                textTransform: "none",
                ":hover": {
                  color: md
                    ? (theme) => theme.palette.primary.dark
                    : (theme) => theme.palette.primary.main,
                  cursor: "pointer",
                  transition: "0.3s",
                },
              }}
            >
              See more +
            </Typography>
          )}
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
  const md = useMediaQuery("(min-width:1200px)");
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
              key={header.label}
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
                    color: md
                      ? (theme) => theme.palette.secondary.main
                      : (theme) => theme.palette.primary.dark,
                    textTransform: "none",
                    ":hover": {
                      color: md
                        ? (theme) => theme.palette.primary.dark
                        : (theme) => theme.palette.primary.main,
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
            key={header.label}
          >
            {row[header.value]}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
