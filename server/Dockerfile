# Stage 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install OS dependencies for Prisma
RUN apk add --no-cache openssl

# Copy package files
COPY package*.json tsconfig.json prisma ./

# Install all dependencies (including dev)
RUN npm install

# Generate Prisma client
RUN npx prisma generate

# Copy source files
COPY . .

# Build TypeScript
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app
RUN apk add --no-cache openssl

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000

# Start compiled app
CMD ["node", "dist/index.js"]
