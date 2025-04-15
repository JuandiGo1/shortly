import mysql from 'mysql2/promise';
import dotenv from 'dotenv';


dotenv.config();

export default async function connectDB() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD ||'',

    })

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
    console.log('✅ Base de datos verificada/creada');

    // Conexión ya con la base de datos seleccionada
    const db = await mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME
    });

    await db.query(`
        CREATE TABLE IF NOT EXISTS urls (
          id INT AUTO_INCREMENT PRIMARY KEY,
          short_id VARCHAR(10) NOT NULL UNIQUE,
          original_url TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          access_count INT DEFAULT 0
          
        )
      `);
      console.log('✅ Tabla "urls" verificada/creada');
    
      return db;
}

