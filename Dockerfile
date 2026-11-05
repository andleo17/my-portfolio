# Portafolio — build estático con Astro y servido por nginx
FROM node:24-alpine AS build
WORKDIR /app

# dependencias primero (capa cacheable)
COPY package.json ./
RUN npm install --no-audit --no-fund

# código + build
COPY . .
ARG SITE_URL
ENV SITE_URL=$SITE_URL
RUN npm run build

# imagen final mínima
FROM nginx:alpine
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1
