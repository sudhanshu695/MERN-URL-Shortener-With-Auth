import express from 'express'
import { handleGenerateNewShortURL , handleGetAnalytics , handleGetSearch} from '../controllers/controllers.js'
import connectMongo from '../connectMongo.js';
import {  restrictToLoggesInUserOnly } from '../middleware/auth.js';
import { handleGetAllURLOfUser } from '../controllers/urlController.js';

const router = express.Router(); //Created mini server , app is our main server

router.post('/', restrictToLoggesInUserOnly, handleGenerateNewShortURL);

router.get('/yoururls', restrictToLoggesInUserOnly , handleGetAllURLOfUser );


router.get('/analytics/:shortId', restrictToLoggesInUserOnly , handleGetAnalytics);

router.get("/:shortId", handleGetSearch);;

export default router;