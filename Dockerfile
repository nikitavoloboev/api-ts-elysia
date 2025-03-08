ARG BUN_VERSION=1.2.5
FROM oven/bun:${BUN_VERSION} as base
WORKDIR /usr/src/app
COPY package.json bun.lock .
RUN bun install --production --frozen-lockfile
COPY . .
USER bun
CMD ["bun", "main.ts"]
