// app/api/featured-products/route.js
import pool from '@/app/libs/mysql';

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(`
      SELECT p.*, pi.img_link 
      FROM vehicles p 
      LEFT JOIN product_images pi ON p.id = pi.prod_id 
      WHERE p.id IN (1, 17, 12)
      AND (pi.img_link = (
        SELECT img_link 
        FROM product_images 
        WHERE prod_id = p.id 
        ORDER BY img_link ASC 
        LIMIT 1
      ) OR pi.img_link IS NULL);
    `);
    connection.release();

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}