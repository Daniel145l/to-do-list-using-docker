
# To-do List using Docker

This is a simple To-do list project made using Docker and Docker Compose to ensure the data won't be lost even if the container is down. Below, you can find instructions to run the code on your computer.

## Prerequisites

Make sure the following software is installed on your machine:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Project Settings

### Important Files

- **`Dockerfile`**: Contains instructions to create the Docker image.
- **`docker-compose.yml`**: Defines the project's volumes and services.
- **`app/`**: Contains the source code of the application.
- **`README.md`**: Documentation file about the project.
- **`photos/`**: Contains photos of the process to manage Docker.

---

## How to Run the Project:

### Step 1: Clone the repository

1. Use the following command to clone the repository:
   ```bash
   git clone <REPOSITORY_URL>
   cd <PROJECT_FOLDER_NAME>
   ```

2. Build the services specified in `docker-compose.yml`:
   ```bash
   docker-compose build
   ```

### Step 2: Run the project

1. Start the containers:
   ```bash
   docker-compose up
   ```

2. The project will be accessible at [http://localhost:3000](http://localhost:3000).

### Step 3: Check the volumes

The project uses volumes for data persistence. To check the volumes, use the following commands:

- List all volumes:
  ```bash
  docker volume ls
  ```

- Inspect the volume `todo-data`:
  ```bash
  docker volume inspect todo-data
  ```

---

## Technologies Used in the Application
The application was built using the following technologies:

- **HTML**: Used to structure the user interface.
- **CSS**: Applied to style and design the user interface for a better user experience.
- **Node.js**: Provides the JavaScript runtime environment for building the backend.
- **Express.js**: A lightweight and fast web framework used to create the server and manage routes.
- **Docker**: Utilized to containerize the application and ensure portability and consistency across environments.
