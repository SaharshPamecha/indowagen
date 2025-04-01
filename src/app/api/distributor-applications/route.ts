// // app/api/distributor-applications/route.js
// import pool from '@/app/libs/mysql';

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, email, phone, company, state, city, experience, message } = body;

//     // Validate required fields
//     if (!name || !email || !phone || !company || !state || !city) {
//       return new Response(JSON.stringify({ error: 'All required fields must be filled' }), {
//         status: 400,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }

//     const connection = await pool.getConnection();
//     await connection.execute(
//       `INSERT INTO distributor_applications (name, email, phone, company, state, city, experience, message)
//        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
//       [name, email, phone, company, state, city, experience || 0, message || null]
//     );
//     connection.release();

//     return new Response(JSON.stringify({ message: 'Application submitted successfully' }), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error('Error submitting application:', error);
//     return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }


// app/api/distributor-applications/route.ts
import { NextRequest } from 'next/server'; // Import NextRequest
import pool from '@/app/libs/mysql';

export async function POST(request: NextRequest) { // Add type for request
  try {
    const body = await request.json();
    const { name, email, phone, company, state, city, experience, message } = body as {
      name: string;
      email: string;
      phone: string;
      company: string;
      state: string;
      city: string;
      experience?: string; // Optional, as it can be empty
      message?: string; // Optional, as it can be empty
    };

    // Validate required fields
    if (!name || !email || !phone || !company || !state || !city) {
      return new Response(JSON.stringify({ error: 'All required fields must be filled' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const connection = await pool.getConnection();
    await connection.execute(
      `INSERT INTO distributor_applications (name, email, phone, company, state, city, experience, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, phone, company, state, city, experience || 0, message || null]
    );
    connection.release();

    return new Response(JSON.stringify({ message: 'Application submitted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}