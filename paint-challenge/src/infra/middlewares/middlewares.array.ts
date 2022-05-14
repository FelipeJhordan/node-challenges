/* eslint-disable @typescript-eslint/no-unused-vars */
import * as bodyParser from 'body-parser';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { Composite } from '../../application/patterns/composite.pattern';


const compressionComposite = {
  apply(func) {
    return compression();
  },
};

const helmetComposite = {
  apply(func) {
    return helmet({
      contentSecurityPolicy: false,
      crossOriginResourcePolicy: false,
      crossOriginEmbedderPolicy: false
    });
  },
};

const rateLimitComposite = {
  apply(func) {
    return rateLimit({
      windowMs: 1000 * 60 * 60,
      max: 2000,
      message: 'Muitas solicitações oriundas desse mesmo IP.',
    });
  },
};

const bodyParserJsonComposite = {
  apply(func) {
    return bodyParser.json({ limit: '50mb' });
  },
};

const bodyParserUrlEncodedComposite = {
  apply(func) {
    return bodyParser.urlencoded({ extended: true });
  },
};

export const middlewares: Composite[] = [
  compressionComposite,
  helmetComposite,
  rateLimitComposite,
  bodyParserJsonComposite,
  bodyParserUrlEncodedComposite,
];