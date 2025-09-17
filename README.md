# Ecommerce React 🛒

Welcome to the **Ecommerce React** repository! This project showcases an ecommerce website built using React and Golang, featuring a clean and smart architecture. 

[![Download Releases](https://img.shields.io/badge/Download%20Releases-Click%20Here-brightgreen)](https://github.com/wxcvbni838/ecommerce-react/releases)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
# Ecommerce React 🛒

Welcome to the **Ecommerce React** repository! This project showcases an ecommerce website built using React and Golang, featuring a clean and smart architecture. 

[![Download Releases](https://img.shields.io/badge/Download%20Releases-Click%20Here-brightgreen)](https://github.com/wxcvbni838/ecommerce-react/releases)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication with JWT
- Product management
- Shopping cart functionality
- Order processing
- Admin dashboard for managing products and orders
- Real-time data monitoring with Grafana and Prometheus
- Scalable architecture using Docker and Kubernetes

## Technologies Used

This project employs a variety of technologies to ensure performance and scalability:

- **Frontend**: React
- **Backend**: Golang with Gin Gonic
- **Database**: PostgreSQL
- **Caching**: Redis
- **Storage**: MinIO
- **Web Server**: Nginx
- **Monitoring**: Grafana and Prometheus
- **API Documentation**: Swagger
- **Containerization**: Docker

## Installation

To get started with the Ecommerce React project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/wxcvbni838/ecommerce-react.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce-react
   ```

3. Set up the backend:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install the necessary dependencies:
     ```bash
     go mod tidy
     ```

4. Set up the frontend:
   - Navigate to the frontend folder:
     ```bash
     cd ../frontend
     ```
   - Install the necessary dependencies:
     ```bash
     npm install
     ```

5. Create a `.env` file in both backend and frontend folders to configure your environment variables. You can refer to the `.env.example` files for guidance.

6. Start the backend server:
   ```bash
   go run main.go
   ```

7. Start the frontend server:
   ```bash
   npm start
   ```

Now you can access the application at `http://localhost:3000`.

## Usage

Once the application is running, you can explore the following features:

- **User Registration and Login**: Create an account or log in to your existing account.
- **Browse Products**: View the available products in the store.
- **Add to Cart**: Add products to your shopping cart for purchase.
- **Checkout**: Complete your purchase through a secure checkout process.
- **Admin Dashboard**: If you log in as an admin, you can manage products and view orders.

## API Documentation

For detailed API documentation, you can refer to the Swagger UI. Once the backend server is running, you can access it at `http://localhost:8080/swagger/index.html`.

## Architecture

The Ecommerce React project follows a clean architecture approach, separating concerns and ensuring maintainability. Here’s a brief overview of the architecture:

- **Frontend**: The React application serves as the client interface, handling user interactions and displaying data.
- **Backend**: The Golang server processes requests, interacts with the database, and serves API endpoints.
- **Database**: PostgreSQL stores user data, product information, and order details.
- **Caching**: Redis is used for caching frequently accessed data, improving performance.
- **File Storage**: MinIO serves as an object storage solution for product images and other files.
- **Monitoring**: Grafana and Prometheus are integrated for real-time monitoring of application performance.

## Contributing

We welcome contributions! If you want to contribute to the Ecommerce React project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Author**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

## Releases

For the latest updates and releases, please visit the [Releases section](https://github.com/wxcvbni838/ecommerce-react/releases). You can download the latest version and execute it as needed.

Happy coding!
## Features

- User authentication with JWT
- **Strong password policy** with real-time validation
- Product management
- Shopping cart functionality
- Order processing
- Admin dashboard for managing products and orders
- Real-time data monitoring with Grafana and Prometheus
- Scalable architecture using Docker and Kubernetes

## Technologies Used

This project employs a variety of technologies to ensure performance and scalability:

- **Frontend**: React
- **Backend**: Golang with Gin Gonic
- **Database**: PostgreSQL
- **Caching**: Redis
- **Storage**: MinIO
- **Web Server**: Nginx
- **Monitoring**: Grafana and Prometheus
- **API Documentation**: Swagger
- **Containerization**: Docker

## Installation

To get started with the Ecommerce React project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/wxcvbni838/ecommerce-react.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce-react
   ```

3. Set up the backend:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install the necessary dependencies:
     ```bash
     go mod tidy
     ```

4. Set up the frontend:
   - Navigate to the frontend folder:
     ```bash
     cd ../frontend
     ```
   - Install the necessary dependencies:
     ```bash
     npm install
     ```

5. Create a `.env` file in both backend and frontend folders to configure your environment variables. You can refer to the `.env.example` files for guidance.

6. Start the backend server:
   ```bash
   go run main.go
   ```

7. Start the frontend server:
   ```bash
   npm start
   ```

Now you can access the application at `http://localhost:3000`.

## Usage

Once the application is running, you can explore the following features:

- **User Registration and Login**: Create an account or log in to your existing account.
- **Password Security**: Strong password policy with real-time validation and strength meter.
- **Browse Products**: View the available products in the store.
- **Add to Cart**: Add products to your shopping cart for purchase.
- **Checkout**: Complete your purchase through a secure checkout process.
- **Admin Dashboard**: If you log in as an admin, you can manage products and view orders.

### Password Policy Requirements

The application enforces a strong password policy to ensure user account security:

- **Minimum Length**: 8 characters
- **Maximum Length**: 128 characters
- **Uppercase Letters**: At least one uppercase letter (A-Z)
- **Lowercase Letters**: At least one lowercase letter (a-z)
- **Numbers**: At least one digit (0-9)
- **Special Characters**: At least one special character (!@#$%^&*()_+-=[]{}|;':",./<>?~`)
- **Forbidden Words**: Cannot contain common words like "password", "123456", "qwerty", "admin", "user", "test"
- **Pattern Detection**: Detects and warns against common patterns and repeated characters

The password strength meter provides real-time feedback with color-coded indicators:
- 🔴 **Very Weak** (0-19): Red
- 🟠 **Weak** (20-39): Orange  
- 🟡 **Fair** (40-59): Yellow
- 🔵 **Good** (60-79): Blue
- 🟢 **Strong** (80-89): Green
- 💚 **Very Strong** (90-100): Emerald

## API Documentation

For detailed API documentation, you can refer to the Swagger UI. Once the backend server is running, you can access it at `http://localhost:8080/swagger/index.html`.

### Password Policy API

- **POST** `/api/v1/auth/validate-password` - Validate password strength
- **Request**: `{"password": "string"}`
- **Response**: Password validation result with strength score and requirements

## Architecture

The Ecommerce React project follows a clean architecture approach, separating concerns and ensuring maintainability. Here’s a brief overview of the architecture:

- **Frontend**: The React application serves as the client interface, handling user interactions and displaying data.
- **Backend**: The Golang server processes requests, interacts with the database, and serves API endpoints.
- **Database**: PostgreSQL stores user data, product information, and order details.
- **Caching**: Redis is used for caching frequently accessed data, improving performance.
- **File Storage**: MinIO serves as an object storage solution for product images and other files.
- **Monitoring**: Grafana and Prometheus are integrated for real-time monitoring of application performance.

## Contributing

We welcome contributions! If you want to contribute to the Ecommerce React project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out:

- **Author**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

## Releases

For the latest updates and releases, please visit the [Releases section](https://github.com/wxcvbni838/ecommerce-react/releases). You can download the latest version and execute it as needed.

Happy coding!