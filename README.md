# Technical Test - Front-end Developer

This project was developed as part of the technical test for the Front-end Developer position at Cubevis. The project uses Next.js, React, and TailwindCSS.

## Table of Contents

- [Installation](#installation)
  - [Using Docker](#using-docker)
  - [Local Installation](#local-installation)
- [Running the Project](#running-the-project)
- [Development](#development)

## Installation

### Using Docker

To set up the project using Docker, follow the steps below:

1. **Build the Docker Image:**

Run the following command to build the Docker image:

```docker build -t nextjs-app .```
   
2. **Run the Docker Container**:

After building the image, run the project inside a Docker container with the command:

```docker run -p 3000:3000 nextjs-app```
The application will be accessible at http://localhost:3000.

### Local Installation
To run the project locally, follow the steps below:

Clone the Repository:

First, clone the repository to your local machine:
```git clone https://github.com/marcosnaofazisso/my-project```
```cd my-project```

Install Dependencies:

Use npm to install the required dependencies:
```npm install```

Run the Development Server:

After installing the dependencies, start the development server:
```npm run dev```
The application will be accessible at http://localhost:3000.

## Running the Project

After setting up the project, you can use the following commands:

Development Server: To run the project in development mode, use:
```npm run dev```
The development server will start on port 3000, and you can view the app at http://localhost:3000.

Production Build: To generate the project build for production, use:
```npm run build```
After the build, you can run the application with:
```npm run start```

The application will run in production mode.

## Development
React: This project uses React for building the user interface.
TailwindCSS: TailwindCSS is used for styling, focusing on utility-first classes, which allows flexibility and agility in layout development.
License
This project is licensed under the MIT License - see the LICENSE file for more details.

Created by Marcos Vinicius Ferreira
