
import * as functions from 'firebase-functions';
import cookieParser from 'cookie-parser';
import {config} from '@conf/config';

// ----- EXPRESS APP -----
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors({
  origin: config.frontEnd.origin,
  credentials: true,
}));
app.use(cookieParser());

// ----- ROUTES -----
app.get('/', (req, res) => res.json({msg: 'Hello World'}));

exports.api = functions.https.onRequest(app);
