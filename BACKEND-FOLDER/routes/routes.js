import express from 'express'
import { handleGenerateNewShortURL , handleGetAnalytics , handleGetSearch} from '../controllers/controllers.js'
import connectMongo from '../connectMongo.js';


const router = express.Router(); //Created mini server , app is our main server

router.post('/', handleGenerateNewShortURL);

router.get('/analytics/:shortId' , handleGetAnalytics);

router.get("/:shortId", handleGetSearch);;

export default router;