
# Use Node.js LTS as the base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Expose application port
EXPOSE 3000

# Start Node.js application
CMD ["npm", "start"]
