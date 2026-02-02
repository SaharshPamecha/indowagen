import pool from '@/app/libs/mysql';

export async function GET() {
    try {
        const connection = await pool.getConnection();
        // Fetch the most recently updated active popup
        const [rows]: any = await connection.execute(`
      SELECT * FROM popup_settings 
      WHERE is_active = 1 
      ORDER BY updated_at DESC 
      LIMIT 1
    `);
        connection.release();

        if (rows.length === 0) {
            return new Response(JSON.stringify({ message: 'No active popup found' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify(rows[0]), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching popup settings:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
