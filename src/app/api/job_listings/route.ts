import pool from '@/app/libs/mysql';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(`
      SELECT 
        id,
        job_heading,
        role_description AS description,
        job_location AS location,
        requirements,
        salary,
        application_email
      FROM job_listings;
    `);
    connection.release();

    return NextResponse.json(rows, {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching job listings:', error);
    return NextResponse.json({ error: 'Failed to fetch job listings' }, {
      status: 500,
    });
  }
}