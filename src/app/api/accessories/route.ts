// import type { NextApiRequest, NextApiResponse } from 'next';
// import pool from '@/app/libs/mysql';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'GET') {
//     res.setHeader('Allow', ['GET']);
//     return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//   }

//   let connection;
//   try {
//     connection = await pool.getConnection();
//     const [rows] = await connection.execute('SELECT * FROM accessories');
//     res.status(200).json(rows);
//   } catch (error) {
//     console.error('Error fetching accessories:', error);
//     res.status(500).json({ error: 'Failed to fetch accessories from the database' });
//   } finally {
//     if (connection) {
//       connection.release();
//     }
//   }
// }



// app/api/products/route.js
import pool from '@/app/libs/mysql';

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(`
      SELECT * FROM accessories;
    `);
    connection.release();

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}