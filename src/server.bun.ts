import process from "node:process";

import { createRequestHandler } from "react-router";

const build = await import("../dist/server/index.js");

const requestHandler = createRequestHandler(build);

const server = Bun.serve({
    hostname: "0.0.0.0",
    port: 3000,
    fetch(request) {
        return requestHandler(request);
    },
});
console.log(`server started ${server.url}`);

const signal = await new Promise<string>(resolve => {
    ["SIGINT", "SIGTERM"].forEach((signal) => {
        process.on(signal, () => {
            resolve(signal);
        });
    });
});
console.log(`server stop by ${signal}`);

await server.stop();
console.log("server stopped.");
