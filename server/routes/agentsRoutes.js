const express = require('express')
const router = express.Router();
const { getAgents, createAgent} = require('../controllers/agentsController');
// const { getAgents, getAgent, createAgent, updateAgent, deleteAgent } = require('../controllers/agentsController');


router.route('/').get(getAgents).post(createAgent)
// router.route('/:AgentID').get(getAgent).put(updatePlayer).delete(deletePlayer);

module.exports = router;