FROM oven/bun:1.1.42-debian AS build
WORKDIR /app
COPY . /app
RUN bun install && bun run build && bun run bun:compile

FROM oven/bun:1.1.42-distroless AS exec
COPY --from=build /app/dist/server.bun /app/dist/server.bun
ENTRYPOINT ["/app/dist/server.bun"]
EXPOSE 3000
