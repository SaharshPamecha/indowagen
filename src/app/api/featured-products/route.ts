// app/api/featured-products/route.js
import pool from '@/app/libs/mysql';

export async function GET() {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.execute(`
      SELECT p.*, pi.img_link 
FROM vehicles p 
LEFT JOIN (
    SELECT prod_id, 
           COALESCE(
             (SELECT img_link 
              FROM product_images pi2 
              WHERE pi2.prod_id = product_images.prod_id 
              AND pi2.img_link LIKE 'side_view%' 
              LIMIT 1),
             (SELECT img_link 
              FROM product_images pi3 
              WHERE pi3.prod_id = product_images.prod_id 
              ORDER BY img_link ASC 
              LIMIT 1)
           ) AS img_link
    FROM product_images 
    GROUP BY prod_id
) pi ON p.id = pi.prod_id 
WHERE p.id IN (1, 17, 12);
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