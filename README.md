# Simple CRUD with PostgreSQL, Express, and Node.js

A clean and simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, and PostgreSQL. This project demonstrates a solid architecture with separation of concerns using controllers, routes, models, and middlewares.

## 🚀 Features

- **CRUD Operations**: Fully functional endpoints for data management.
- **PostgreSQL Integration**: Direct interaction with Postgres using the `pg` library.
- **Validation**: Input validation using `Joi`.
- **Environment Management**: Secure configuration using `dotenv`.
- **CORS Support**: Configured for cross-origin resource sharing.

## 🛠️ Technologies

- **Node.js**: Runtime environment.
- **Express**: Fast, unopinionated, minimalist web framework.
- **PostgreSQL**: Robust relational database.
- **Joi**: Powerful schema description language and data validator.
- **Nodemon**: Development utility for automatic server restarts.

## 📂 Project Structure

```text
├── src/
│   ├── config/       # Database and environment configurations
│   ├── controllers/  # Request handlers and business logic
│   ├── data/         # Static data or initial database scripts
│   ├── middlewares/  # Custom Express middlewares
│   ├── models/       # Database schemas and models
│   ├── routes/       # API route definitions
│   └── index.js      # Application entry point
├── .gitignore        # Git ignore rules
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```

## ⚙️ Installation & Usage

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ashutoshbot1/simple-crud-with-postgress.git
   cd simple-crud-with-postgress
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory and add your PostgreSQL credentials:

   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/your_database
   PORT=3000
   ```

4. **Run the application**:
   - For development (with hot-reload):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## 📝 License

This project is licensed under the [ISC License](LICENSE).

---

_Created by [Ashutoshbot1](https://github.com/Ashutoshbot1)_
