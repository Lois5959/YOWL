FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

# Dépendances d'abord (mises en cache tant que package*.json ne change pas)
COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

# L'API ne tourne pas en root
USER node
EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=5 \
  CMD wget -qO- http://127.0.0.1:3000/api/health || exit 1

CMD ["node", "index.js"]
