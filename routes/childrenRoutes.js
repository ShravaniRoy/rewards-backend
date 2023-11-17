const express = require('express');
const router = express.Router();

const { 
    getChildren, 
    getChild, 
    addChildren,
    updateChild,
    deleteChild 
} = require('../controllers/childrenController');

router.route('/').get(getChildren).post(addChildren);

router.route('/:id').get(getChild).put(updateChild).delete(deleteChild);

module.exports = router;