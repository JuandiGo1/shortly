import {Router} from 'express';
import {getStats, newShortUrl, redirectToOriginalUrl} from '../controllers/url.controller.js';

const urlRouter = Router();

urlRouter.post('/shorten', newShortUrl);
urlRouter.get('/:shortId', redirectToOriginalUrl);
urlRouter.get('/:shortId/stats', getStats);

export default urlRouter;