# Frontend Dockerfile
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Install serve to run the built app
RUN yarn global add serve

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "build", "-l", "3000"]