import { pool } from '../config/database.js'
import '../config/dotenv.js'
import eventsData from '../data/events.js'
import locationsData from '../data/locations.js'


const createEventsTable = async () => {
    const createEventsTableQuery = `
      DROP TABLE IF EXISTS events;
  
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        date TIMESTAMP NOT NULL,
        time TIME NOT NULL
      )
    `
  
    try {
      await pool.query(createEventsTableQuery)
      console.log('🎉 Events table created successfully')
    } catch (err) {
      console.error('⚠️ error creating events table', err)
    }
  }
  
  const seedEventsTable = async () => {
    await createEventsTable()
  
    eventsData.forEach((event) => {
      const insertEventsQuery = {
        text: 'INSERT INTO events (title, image, date, time) VALUES ($1, $2, $3, $4)'
      }
  
      const values = [
        event.title,
        event.image,
        event.date,
        event.time
      ]
  
      pool.query(insertEventsQuery, values, (err, res) => {
        if (err) {
          console.error('⚠️ error inserting event', err)
          return
        }
        console.log(`✅ ${event.name} added successfully`)
      })
    })
  }
  
    const createLocationsTable = async () => {
        const createLocationsTableQuery = `
            DROP TABLE IF EXISTS locations;
        
            CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            zip VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
            )
        `
        
        try {
            await pool.query(createLocationsTableQuery)
            console.log('🎉 Locations table created successfully')
        } catch (err) {
            console.error('⚠️ error creating locations table', err)
        }
        }
    
    const seedLocationsTable = async () => {
    await createLocationsTable()
        
    locationsData.forEach((location) => {

        const insertLocationsQuery = {
        text: 'INSERT INTO locations (name, address, city, state, zip, image) VALUES ($1, $2, $3, $4, $5, $6)'
        }

        const values = [
        location.name,
        location.address,
        location.city,
        location.state,
        location.zip,
        location.image
        ]

        pool.query(insertLocationsQuery, values, (err, res) => {
        if (err) {
            console.error('⚠️ error inserting location', err)
            return
        }
        console.log(`✅ ${location.name} added successfully`)
        }
        )
    }
    )
    }

seedEventsTable()
seedLocationsTable()