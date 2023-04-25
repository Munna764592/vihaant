import express from 'express';
const router = express.Router();

import { postNewEvent, UpdateEvent, deleteEvent, getEvent} from '../controllers/Event.js';

// get all projects
router.post('/', postNewEvent )
router.patch('/:id',UpdateEvent )
router.delete('/:id', deleteEvent)
router.get("/", getEvent);

export default router;
