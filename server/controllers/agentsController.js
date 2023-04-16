const db = require("../config/db");


// @desc Get agents
// @route GET /agents
// @Paccess Public
const getAgents = ( async (req, res) => {
    let getAgentsSql = 'SELECT * FROM Agents';
    let query = await db.query(getAgentsSql, (err, agents) => {
        if(err) throw err;
        res.status(200).json({agents});
    })
})

// @desc GET agent
// @route GET /agents/:AgentID
// @access Public
const getAgent = ( async (req, res) => {
    let AgentID = req.params.AgentID
    let GetAgentSql = `SELECT * FROM Agents WHERE AgentID = ?`;
    let query = await db.query( GetAgentSql, AgentID , (err, agent) => {
        if(err) throw err;
        res.status(200).json({agent});
    })
})

// @desc POST player
// @route POST /agents
// @Process Public
const createAgent = (async (req, res) => {
    const {FirstName, LastNAme } = req.body;
    let agent = [[FirstName, LastNAme]]

    let CreateAgentsSql = 'INSERT INTO Agents(FirstName, LastNAme) Values ?';

    let query = await db.query(CreateAgentsSql, [agent], (err, result) => {
        if(err) throw err;
        res.status(200).json({result});
    })
})

// @desc PUT player
// @route PUT /players/:playerID
// @acces Public
const updateAgent = ( async (req, res) => {
    let sql = `UPDATE Players SET ? WHERE PlayerID = ${req.params.playerID}`;
    let query = await db.query(sql, [{FirstName: req.body.FirstName, LastName: req.body.LastName, YOE: req.body.YOE, TeamID: req.body.TeamID}], (err, result) => {
        if(err) throw err;
        res.status(200).json({result});
    })
})

// @desc DELETE player
// @route DELETE /players/:playerID
// @acces Public
const deleteAgent = ( async (req, res) => {
    let sql = `DELETE FROM Players WHERE PlayerID = ${req.params.playerID}`
    let query = await db.query(sql, (err, result) => {
      if(err) throw err;
      res.status(200).json(result)
    })
})

module.exports = {
    getAgents,
    createAgent,
}