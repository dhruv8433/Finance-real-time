"use client";

import { useTheme } from "@mui/material";
import HomeCards from "./Components/Dashboard/HomeCards";
import Metrics from "./Components/Dashboard/Metrics";
import Analytics from "./Components/Dashboard/Analytics";
import BasicBreadcrumbs from "./Components/Dashboard/Headers";
export default function Home() {
  const theme = useTheme();

  return (
    <div style={{ background: theme.palette.background.page }}>
      <BasicBreadcrumbs route={"main-dashboard"} title={"Main Dashboard"} />
      <HomeCards />
      <Metrics title="This Month" />
      <Analytics />
    </div>
  );
}
