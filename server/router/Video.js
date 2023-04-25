import express from 'express';
const router = express.Router();

import {VideoPost} from "./../controllers/VideoPost.js"
 
router.post('/Video', VideoPost)
    
export default router;