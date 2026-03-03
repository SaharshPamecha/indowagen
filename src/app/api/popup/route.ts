import pool from '@/app/libs/mysql';

// Same pattern as product images:
// Admin stores images at forestgreen-capybara-315761.hostingersite.com/assets/popup/
const ADMIN_HOST = 'https://forestgreen-capybara-315761.hostingersite.com';

export async function GET() {
    try {
        const connection = await pool.getConnection();
        const [rows]: any = await connection.execute(`
            SELECT id, image_name, open_delay_ms, is_active, updated_at
            FROM popup_settings
            WHERE is_active = 1
            LIMIT 1
        `);
        connection.release();

        if (rows.length === 0) {
            return new Response(JSON.stringify({ is_active: false }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const row = rows[0];

        // Construct full URL the same way product images work
        const image_src = row.image_name
            ? `${ADMIN_HOST}/assets/popup/${row.image_name}`
            : null;

        return new Response(JSON.stringify({
            ...row,
            image_src,
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('Error fetching popup settings:', error);
        return new Response(JSON.stringify({ is_active: false }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
