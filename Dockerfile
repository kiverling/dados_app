# Base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the entire app to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the desired port (change this if your Next.js app uses a different port)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
