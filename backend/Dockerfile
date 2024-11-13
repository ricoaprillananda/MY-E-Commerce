# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if present) into the container
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose port 5000 for the backend API
EXPOSE 5000

# Start the backend server (replace with your actual backend command)
CMD ["npm", "start"]
