import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  // A LP principal agora vive em /live-rs-1.
  // A raiz "/" apenas redireciona para ela.
  beforeLoad: () => {
    throw redirect({ to: "/live-rs-1" });
  },
  component: () => null,
});
