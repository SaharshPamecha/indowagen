


// app/api/distributor-applications/route.ts
// import { NextRequest } from 'next/server'; // Import NextRequest
// import pool from '@/app/libs/mysql';

// export async function POST(request: NextRequest) { // Add type for request
//   try {
//     const body = await request.json();
//     const { name, email, phone, company, state, city, experience, message } = body as {
//       name: string;
//       email: string;
//       phone: string;
//       company: string;
//       state: string;
//       city: string;
//       experience?: string; // Optional, as it can be empty
//       message?: string; // Optional, as it can be empty
//     };

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



import { NextRequest } from 'next/server';
import pool from '@/app/libs/mysql';
import nodemailer from 'nodemailer';

// Nodemailer transporter configuration
interface TransporterConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

const transporter = nodemailer.createTransport({
  host:'smtp.gmail.com',
  port: 465,
  secure: true, // Explicitly set to true for Gmail on port 465
  auth: {
    user: 'harshpython1009@gmail.com',
    pass: 'jnrq auxi eyru mhqz', // Ensure this is the correct app password
  },
} as TransporterConfig);

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Nodemailer configuration error:', error);
  } else {
    console.log('Nodemailer is ready to send emails');
  }
});

// Admin email template
const adminEmailTemplate = (formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  state: string;
  city: string;
  experience?: string;
  message?: string;
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Distributor Application</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif;">
  <table cellpadding="0" style="width: 100%;">
    <tbody>
      <tr style="width: 100%; clear: both;">
        <td style="width: 100%; display: block; clear: both;">
          <table align="center" cellpadding="0" cellspacing="0" style="width: 70%; max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 8px; border: 1px solid #e0e0e0; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
            <tbody>
              <tr>
                <td style="height: 4px; background-color: #0055A4; border-radius: 8px 8px 0 0;"></td>
              </tr>
              <tr>
                <td align="center" style="padding: 20px 0; background-color: #ffffff;">
                  <img src="https://indowagen.com/_next/image?url=%2Fimages%2Fbrand%2Flogo.png&w=1920&q=75" alt="Indo Wagen Logo" style="max-width: 230px; height: auto;">
                </td>
              </tr>
              <tr>
                <td style="background-color: #f7f9f9; padding: 20px;">
                  <table cellpadding="0" cellspacing="0" style="width: 100%;">
                    <tbody>
                      <tr>
                        <td style="padding: 10px 0;">
                          <table cellpadding="12" style="width: 100%; border-collapse: collapse;">
                            <tbody>
                              <tr>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  <strong style="font-weight: 600;">Name:</strong>
                                </td>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  ${formData.name}
                                </td>
                              </tr>
                              <tr>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  <strong style="font-weight: 600;">E-mail:</strong>
                                </td>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  ${formData.email}
                                </td>
                              </tr>
                              <tr>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  <strong style="font-weight: 600;">Mobile:</strong>
                                </td>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  <a href="https://wa.me/${formData.phone}?text=Hi!+Thanks+for+contacting+us." style="color: #0055A4; text-decoration: none;">${formData.phone}</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  <strong style="font-weight: 600;">Company:</strong>
                                </td>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  ${formData.company}
                                </td>
                              </tr>
                              <tr>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  <strong style="font-weight: 600;">State:</strong>
                                </td>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  ${formData.state}
                                </td>
                              </tr>
                              <tr>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  <strong style="font-weight: 600;">City:</strong>
                                </td>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  ${formData.city}
                                </td>
                              </tr>
                              ${formData.experience ? `
                              <tr>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  <strong style="font-weight: 600;">Experience:</strong>
                                </td>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  ${formData.experience}
                                </td>
                              </tr>` : ''}
                              ${formData.message ? `
                              <tr>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  <strong style="font-weight: 600;">Message:</strong>
                                </td>
                                <td style="color: #101010; font-size: 16px; border-bottom: 1px solid #e0e0e0; padding: 12px;">
                                  ${formData.message}
                                </td>
                              </tr>` : ''}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="background-color: #0055A4; color: #ffffff; padding: 15px; font-size: 13px; border-radius: 0 0 8px 8px;">
                  Copyright © <strong>Indo Wagen</strong>. All rights reserved.<br>
                  Merlin Infinite, 10th floor, Room No- 1010, Plot No- 5, DN51, Sector V, Saltlake, Kolkata, West Bengal, 700091, India
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`;

// User email template
const userEmailTemplate = (formData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  state: string;
  city: string;
  experience?: string;
  message?: string;
}) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Received</title>
  <style type="text/css">
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; margin: 20px auto !important; }
      .header-section { padding: 20px 0 10px 0 !important; }
      .content-section { padding: 25px 15px 15px 15px !important; }
      .footer-section { padding: 20px 15px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif;">
  <table cellpadding="0" style="width: 100%;">
    <tbody>
      <tr style="width: 100%; clear: both;">
        <td style="width: 100%; display: block; clear: both;">
          <table align="center" cellpadding="0" cellspacing="0" class="email-container" style="width: 70%; max-width: 600px; margin: 40px auto; background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%); border-radius: 14px; border: 1px solid #e8e8e8; box-shadow: 0 6px 15px rgba(0,0,0,0.08);">
            <tbody>
              <tr>
                <td style="height: 8px; background: linear-gradient(to right, #0055A4, #337AB7); border-radius: 14px 14px 0 0;"></td>
              </tr>
              <tr>
                <td class="header-section" align="center" style="padding: 30px 0; background-color: transparent;">
                  <img src="https://indowagen.com/_next/image?url=%2Fimages%2Fbrand%2Flogo.png&w=1920&q=75" alt="Indo Wagen Logo" style="max-width: 230px; height: auto; display: block;">
                </td>
              </tr>
              <tr>
                <td class="content-section" style="padding: 35px 30px; background-color: transparent; text-align: center;">
                  <h2 style="margin: 0; font-size: 26px; color: #101010; font-weight: 700; letter-spacing: 0.5px;">Hello, ${formData.name}!</h2>
                  <p style="margin: 25px 0; font-size: 17px; color: #505050; line-height: 1.6;">Thank you for choosing Indo Wagen! We’re excited to assist you with your distributor application. Your application is being processed, and our team will review it soon.</p>
                  <p style="margin: 25px 0 15px; font-size: 15px; color: #707070;">Questions or need help? Our team is just a click away:</p>
                  <a href="https://api.whatsapp.com/send/?phone=911800120345345&text=Hi%21+I+need+assistance.&type=phone_number&app_absent=0" style="display: inline-block; padding: 12px 25px; background-color: #0055A4; color: #ffffff; font-size: 15px; font-weight: 500; text-decoration: none; border-radius: 6px; box-shadow: 0 3px 8px rgba(0,85,164,0.2); transition: background-color 0.3s;">Contact Admin</a>
                  <p style="margin: 15px 0 0; font-size: 13px; color: #888888;">or reach us at <a href="mailto:Info@zeniak.com" style="color: #0055A4; text-decoration: none; font-weight: 500;">Info@zeniak.com</a></p>
                </td>
              </tr>
              <tr>
                <td class="footer-section" style="background: linear-gradient(to right, #0055A4, #337AB7); color: #ffffff; padding: 25px;  font-size: 14px; border-radius: 0 0 14px 14px; text-align: center;">
                  <span style="font-weight: 500;">Copyright © <strong>Indo Wagen</strong>. All rights reserved.</span><br>
                  <span style="font-size: 12px; display: block; margin-top: 5px;">Merlin Infinite, 10th floor, Room No- 1010, Plot No- 5, DN51, Sector V, <br> Saltlake, Kolkata, West Bengal, 700091, India</span>
                  
                  
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`;

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, company, state, city, experience, message } = body as {
      name: string;
      email: string;
      phone: string;
      company: string;
      state: string;
      city: string;
      experience?: string;
      message?: string;
    };

    // Validate required fields
    if (!name || !email || !phone || !company || !state || !city) {
      return new Response(JSON.stringify({ error: 'All required fields must be filled' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Save to database
    const connection = await pool.getConnection();
    try {
      await connection.execute(
        `INSERT INTO distributor_applications (name, email, phone, company, state, city, experience, message)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [name, email, phone, company, state, city, experience || null, message || null]
      );
    } catch (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save application to database');
    } finally {
      connection.release();
    }

    // Prepare form data for emails
    const formData = { name, email, phone, company, state, city, experience, message };

    // Send email to admin
    try {
      await transporter.sendMail({
        from: '"Indo Wagen" <harshpython1009@gmail.com>',
        to: process.env.ADMIN_EMAIL || 'harshpython1009@gmail.com',
        subject: 'New Distributor Application Received',
        html: adminEmailTemplate(formData),
      });
    } catch (emailError) {
      console.error('Error sending admin email:', emailError);
      // Continue to user email even if admin email fails
    }

    // Send confirmation email to user
    try {
      await transporter.sendMail({
        from: '"Indo Wagen" <harshpython1009@gmail.com>',
        to: email,
        subject: 'Your Distributor Application Has Been Received',
        html: userEmailTemplate(formData),
      });
    } catch (emailError) {
      console.error('Error sending user email:', emailError);
      // Continue with response even if user email fails
    }

    return new Response(JSON.stringify({ message: 'Application submitted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error submitting application:', error.message, error.stack);
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}