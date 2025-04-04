import { NextRequest } from 'next/server';
import pool from '@/app/libs/mysql';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body as { email: string };

    // Validate required field
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'A valid email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const connection = await pool.getConnection();
    await connection.execute(
      `INSERT INTO newsletter_subscriptions (email) VALUES (?)`,
      [email]
    );
    connection.release();

    return new Response(JSON.stringify({ message: 'Subscription successful' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error subscribing to newsletter:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return new Response(JSON.stringify({ error: 'This email is already subscribed' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}