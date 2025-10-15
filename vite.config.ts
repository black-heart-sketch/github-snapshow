import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["github-snapshow.onrender.com"],
  },
  preview: {
    allowedHosts: ["github-snapshow.onrender.com"],
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    hostLoggerPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

function hostLoggerPlugin() {
  return {
    name: "host-logger",
    configureServer(server: any) {
      console.log("[dev] allowedHosts:", server.config.server?.allowedHosts);
      server.middlewares.use((req: any, _res: any, next: any) => {
        const host = req.headers["host"];
        const xfHost = req.headers["x-forwarded-host"];
        const xfProto = req.headers["x-forwarded-proto"];
        console.log(`[dev] request host=${host} x-forwarded-host=${xfHost} x-forwarded-proto=${xfProto}`);
        next();
      });
    },
    configurePreviewServer(server: any) {
      // @ts-ignore
      const allowed = server.config.preview?.allowedHosts;
      console.log("[preview] allowedHosts:", allowed);
      server.middlewares.use((req: any, _res: any, next: any) => {
        const host = req.headers["host"];
        const xfHost = req.headers["x-forwarded-host"];
        const xfProto = req.headers["x-forwarded-proto"];
        console.log(`[preview] request host=${host} x-forwarded-host=${xfHost} x-forwarded-proto=${xfProto}`);
        next();
      });
    },
  } as const;
}
