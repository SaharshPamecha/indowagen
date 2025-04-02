// app/api/dealers/route.ts
import pool from '@/app/libs/mysql';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(`
      SELECT 
        serial_no AS id,
        dealer_name AS name,
        address,
        state,
        district AS city,
        mobile_number AS phone,
        latitude,
        longitude
      FROM dealers;
    `);
    connection.release();

    return NextResponse.json(rows, {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching dealers:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, {
      status: 500,
    });
  }
}