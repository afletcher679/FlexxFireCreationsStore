import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("catalog", "routes/catalog.tsx"),
    route("catalog/creations/:id", "routes/creations.$id.tsx")
] satisfies RouteConfig;
