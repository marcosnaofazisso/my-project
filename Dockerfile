FROM node:22.12.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build
FROM node:22.12.0-alpine
WORKDIR /app
COPY --from=builder /app /app
RUN npm install --production
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"] F
