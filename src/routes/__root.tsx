import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: "var(--bg-deep)" }}>
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-black" style={{ color: "var(--neon-primary)" }}>404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm" style={{ color: "var(--text-dim)" }}>
          A rota que você procura não existe.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-neon">→ Home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Guilherme Gosse · Desenvolvedor Web Full-Stack" },
      { name: "description", content: "Portfolio de Guilherme Gosse — desenvolvedor full-stack em Paulínia/SP. React, Vue, Node.js, Laravel. Soluções web que economizam tempo e escalam." },
      { name: "author", content: "Guilherme Gosse" },
      { property: "og:title", content: "Guilherme Gosse · Desenvolvedor Web Full-Stack" },
      { property: "og:description", content: "Portfolio de Guilherme Gosse — desenvolvedor full-stack em Paulínia/SP. React, Vue, Node.js, Laravel. Soluções web que economizam tempo e escalam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#010A03" },
      { name: "twitter:title", content: "Guilherme Gosse · Desenvolvedor Web Full-Stack" },
      { name: "twitter:description", content: "Portfolio de Guilherme Gosse — desenvolvedor full-stack em Paulínia/SP. React, Vue, Node.js, Laravel. Soluções web que economizam tempo e escalam." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/40542a61-c5f5-411d-b1a0-25dbb4c174cb/id-preview-892b9dc8--f2337bb8-052a-4ad3-afc8-b4b9aecdb599.lovable.app-1777464597753.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/40542a61-c5f5-411d-b1a0-25dbb4c174cb/id-preview-892b9dc8--f2337bb8-052a-4ad3-afc8-b4b9aecdb599.lovable.app-1777464597753.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=JetBrains+Mono:wght@400;500;700&family=Syne:wght@400;500;700;800&family=Bebas+Neue&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
