import { createBrowserRouter } from "react-router";
import Counter from "./counter/Counter";
import Dashboard from "./Dashboard";
import ShoppingPage from "./shopping/ShoppingPage";

const router = createBrowserRouter([
  {index: true, Component: Dashboard},
  {path: '/counter', Component: Counter},
  {path: '/shopping', Component: ShoppingPage}
])

export default router;