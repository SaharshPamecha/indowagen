import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: "77.37.35.56",
  user: "u874817156_indowagen",
  password: "&d2AI+LEmQFZ",
  database: "u874817156_indowagen",
  waitForConnections: true,
})

export default pool