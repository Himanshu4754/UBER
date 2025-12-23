const express = require('express');
const router = express.Router();
const authmiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/map.controller');
const { query, body } = require('express-validator');

// Existing route (keep it)
router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authmiddleware.authUser,
    mapController.getCoordinates
);

router.get('/get-distance-time',
    query('origin').isString(),
    query('destination').isString(),
    authmiddleware.authUser,
    mapController.getDistanceTime
);

// NEW: Autocomplete suggestions
router.get('/get-suggestions',
    query('input').isString().isLength({min:3}),
    authmiddleware.authUser,
    mapController.getAutoCompleteSuggestions
);

module.exports = router;