const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerInfo = require('./swagger');
const useMiddleware = require('./middleware/authMiddleware')

const app = express();
// Middelwares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Swagger UI
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerInfo));

// Auth routes
const login = require('./routes/api/auth/login');
app.use('/api/auth/login', login);

useMiddleware(app);
// Users routes
const getUsers = require('./routes/api/users');
const createUser = require('./routes/api/users/create');
const updateUser = require('./routes/api/users/update');
app.use('/api/users', getUsers);
app.use('/api/users', createUser);
app.use('/api/users', updateUser);

// Company routes
const getCompanies = require('./routes/api/company');
const createCompany = require('./routes/api/company/create');
const updateCompany = require('./routes/api/company/update');
app.use('/api/companies', getCompanies);
app.use('/api/companies', createCompany);
app.use('/api/companies', updateCompany);

// Article routes
const getArticles = require('./routes/api/articles');
const createArticle = require('./routes/api/articles/create');
const updateArticle = require('./routes/api/articles/update');
app.use('/api/articles', getArticles);
app.use('/api/articles', createArticle);
app.use('/api/articles', updateArticle);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));