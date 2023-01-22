import { filters, POOLS } from "@/content";
import { Pagination, Stack } from "@mui/material";
import { PoolItem } from "../pool-item/PoolItem";
import { SwitchFilter } from "../switch-filter/SwitchFilter";

export function BorrowLP() {
  return (
    <Stack >
      <SwitchFilter filters={filters} />
      {POOLS.map((pool) => (
        <PoolItem poolItem={pool} key={pool.title}/>
      ))}
      <Stack alignItems="center" mt={5}>
        <Pagination count={10} />
      </Stack>
    </Stack>
  );
}
