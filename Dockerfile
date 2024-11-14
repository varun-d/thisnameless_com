# Use an official Node.js image as the base
FROM node:18 AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite app
RUN npm run build

# Production stage: Serve the app with a lightweight web server
FROM nginx:stable-alpine AS production

# Copy built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
