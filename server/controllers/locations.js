import { pool } from '../config/database.js'

const getLocations = async (req, res) => {
    try {
      const results = await pool.query('SELECT * FROM locations ORDER BY id ASC')
      res.status(200).json(results.rows)
    } catch (error) {
      res.status(400).json( { error: error.message } )
    }
  }
  
const getLocationById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const selectQuery = 'SELECT * FROM locations WHERE id = $1'
        const results = await pool.query(selectQuery, [id])
        res.status(200).json(results.rows)

    }
    catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

  export default {
    getLocations,
    getLocationById
  }