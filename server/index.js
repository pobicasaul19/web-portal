


























































};  }    res.status(500).json({ message: 'Server error' });    logger.error('Login error', { error });  } catch (error) {    });      metadata: { message: 'Authorized' },      data: { user: userWithoutPassword, token: accessToken },    res.status(200).json({    const { password: _, ...userWithoutPassword } = user;    const accessToken = generateAccessToken(user.uuid);    }      });        }          message: 'User not found'        metadata: {      return res.status(404).json({      logger.warn('User not found', { email });    if (!user) {    const user = usersCollection.data.users.find(user => user.email === email);    }      })        }          message: 'Authentication failed. Please check your credentials.'        metadata: {        data: errors,      return res.status(400).json({      logger.warn('Validation errors', { errors });    if (errors) {    const errors = await validationMessage(field, authSchema, context)    const context = { usersCollection, email }    const field = { email, password }    logger.info('Login request received', { body: req.body });    const { email, password } = req.body;    const usersCollection = await loadUserCollection();  try {export const login = async (req, res) => {// Login usercheckEnvVariables();// Call checkEnvVariables function};  return jwt.sign({ uuid }, process.env.APP_TOKEN_KEY, { expiresIn: '7d' });const generateAccessToken = (uuid) => {// Generate access tokenimport { checkEnvVariables } from './config/checkEnv.js';import { logger } from '../utils/index.js';import 'dotenv/config';import validationMessage from '../utils/validationError.js';import { loadUserCollection } from '../config/db.js'import authSchema from '../models/authModel.js';import jwt from 'jsonwebtoken';