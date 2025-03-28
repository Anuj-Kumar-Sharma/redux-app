import { createBrowserRouter } from "react-router";
import Counter from "./counter/Counter";
import Dashboard from "./Dashboard";

const router = createBrowserRouter([
  {index: true, Component: Dashboard},
  {path: '/counter', Component: Counter}
])

export default router;