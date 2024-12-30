import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import type { Route } from "./+types/root.ts";
// import stylesheet from "./app.css?url";

export const links: Route.LinksFunction = () => [
    // { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    let message = "Something went wrong!";
    let details = "Something went wrong.";

    if (isRouteErrorResponse(error)) {
        message = error.status === 404 ? "404" : "Error";
        details = error.status === 404
            ? "The requested page could not be found."
            : error.statusText || details;
    }

    return (
        <main>
            <h1>{message}</h1>
            <p>{details}</p>
        </main>
    );
}
