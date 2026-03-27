import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Test App",
    short_name: "Test App",
    description: "Test App is a test app for testing the manifest file.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#FFF",
  };
}
