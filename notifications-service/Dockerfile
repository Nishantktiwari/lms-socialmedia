# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./ 
RUN npm install

# Copy the application code
COPY . .

# Expose port for Notifications Service
EXPOSE 5004

# Run the application
CMD ["node", "server.js"]

