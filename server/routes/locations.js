import express from 'express'
// import controllers for events and locations

import LocationsController from '../controllers/locations.js'

const router = express.Router()

// define routes to get events and location
router.get('/', LocationsController.getLocations);
router.get('/:id', LocationsController.getLocationById);

export default router