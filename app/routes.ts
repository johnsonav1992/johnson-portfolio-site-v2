import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("about", "routes/about.tsx"),
  route("skills", "routes/skills.tsx"),
  route("work", "routes/work.tsx"),
  route("work/:name", "routes/work.$name.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;