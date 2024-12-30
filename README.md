# React Router v7 example

## Setup

### Install mkcert

for macOS

```shell
brew install mkcert
```

for Windows

```powershell
winget install mkcert
```

### Install cert

```shell
mkcert --install

mkcert \
  --cert-file .docker/nginx/cert/crt.pem \
  --key-file  .docker/nginx/cert/key.pem \
  localhost
```

### Start Docker

```shell
docker compose up -d --build
```
