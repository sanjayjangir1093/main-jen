# Build Stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy all project files
COPY . .

# Set environment variable
ENV NODE_ENV=production

# Build the React application
RUN npm run build || (echo "React build failed!" && exit 1)

# Check which folder exists and rename it to "output"
RUN if [ -d "/app/build" ]; then mv /app/build /app/output; elif [ -d "/app/dist" ]; then mv /app/dist /app/output; else echo "No build output found!"; exit 1; fi

# Production Stage
FROM nginx:latest AS production

# Set working directory to Nginx default HTML folder
WORKDIR /usr/share/nginx/html

# Remove default static files
RUN rm -rf ./*

# Copy the built React files (now always from /app/output)
COPY --from=build /app/output /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
