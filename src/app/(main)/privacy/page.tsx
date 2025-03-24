'use client';

import React from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Divider,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
    const theme = useTheme();

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8,
                px: 2,
                bgcolor: theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Paper
                        elevation={2}
                        sx={{
                            p: { xs: 3, md: 6 },
                            borderRadius: 2,
                            mb: 4,
                        }}
                    >
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                position: 'relative',
                                mb: 4,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -8,
                                    left: 0,
                                    width: 80,
                                    height: 4,
                                    bgcolor: 'primary.main',
                                },
                            }}
                        >
                            Privacy Policy – Indo Wagen
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                            Last updated: March 4, 2025
                        </Typography>

                        <Typography variant="body1" paragraph>
                            At Indo Wagen, a brand under Zeniak Innovation Limited, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard any personal information you provide when using our website www.indowagen.com. We may update this policy periodically, and we encourage you to review it from time to time.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            1. Information We Collect
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Personal Information</strong>
                            <br />
                            We collect personal data to enhance our services and improve user experience. The information we collect may include:
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li>Name, age, gender</li>
                            <li>Contact details (email, phone number, mailing address)</li>
                            <li>Location data and IP address</li>
                            <li>Vehicle details (model, year, registration number, color, invoice, warranty details)</li>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>How We Collect Information</strong>
                            <br />
                            We collect your personal data when:
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li>You register for events or participate in surveys.</li>
                            <li>You request customer support or dealership information.</li>
                            <li>You apply for dealership or distributorship opportunities.</li>
                            <li>We receive information from partners, dealerships, or service providers.</li>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We may also collect certain technical data (device type, browser, operating system) when you interact with our website.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            2. How We Use Your Information
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We use the information collected for:
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li><strong>Customer Support:</strong> Processing inquiries, bookings, and after-sales services.</li>
                            <li><strong>Product & Service Improvement:</strong> Enhancing user experience and product quality.</li>
                            <li><strong>Marketing & Promotions:</strong> Sending offers, updates, and relevant news.</li>
                            <li><strong>Market Research:</strong> Conducting surveys to understand customer needs.</li>
                            <li><strong>Compliance & Security:</strong> Ensuring legal compliance and fraud prevention.</li>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We don’t sell or give away your personal info to outside parties without permission. When we share data with dealers, banks, insurance companies, or government offices, it’s to process transactions.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            3. Your Rights & Control Over Your Data
                        </Typography>
                        <Typography variant="body1" paragraph>
                            You have the right to:
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li><strong>Access Your Data</strong> – Request the personal information we hold about you.</li>
                            <li><strong>Correct Your Data</strong> – Update incorrect or incomplete information.</li>
                            <li><strong>Delete Your Data</strong> – Request removal of your personal details.</li>
                            <li><strong>Object to Processing</strong> – Stop us from using your data for specific purposes.</li>
                            <li><strong>Withdraw Consent</strong> – Opt-out of marketing or data collection at any time.</li>
                            <li><strong>Data Portability</strong> – Request to transfer your data to another provider.</li>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            To exercise your rights, please contact us at info@zeniak.com. Verification of identity may be required before processing such requests.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            4. Data Storage & Retention
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We retain your personal data for as long as required to:
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li>Complete transactions and service requests.</li>
                            <li>Comply with legal and regulatory requirements.</li>
                            <li>Improve our services and customer experience.</li>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Once the data is no longer needed, we securely delete or anonymize it.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            5. Security Measures
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We implement stringent physical, electronic, and managerial measures to protect your data from unauthorized access or breaches. However, we cannot guarantee 100% security due to the nature of internet transmissions. In case of a data breach, affected users will be notified immediately, and corrective actions will be taken.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            6. Third-Party Links & Services
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our website may contain links to third-party websites, including dealerships, financial institutions, or service providers. Indo Wagen is not responsible for the privacy policies of these external sites. Users are advised to review the privacy policies of third-party platforms before sharing personal data.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            7. Dispute Resolution & Legal Compliance
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Any disputes related to privacy or data protection will be resolved as per Indo Wagen’s company policies. Legal proceedings, if required, will fall under the jurisdiction of courts in Kolkata, West Bengal, India.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            8. Contact Us
                        </Typography>
                        <Typography variant="body1" paragraph>
                            For any queries related to this privacy policy or your personal data, please contact:
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Toll-Free: 1800 120 345 345
                            <br />
                            Email: info@zeniak.com
                            <br />
                            Website: www.indowagen.com
                        </Typography>

                        <Divider sx={{ my: 4 }} />

                        <Typography variant="body1" paragraph>
                            <strong>Your Privacy, Our Commitment!</strong>
                            <br />
                            Indo Wagen is dedicated to safeguarding your data while ensuring transparency and trust. By using our website and services, you agree to our Privacy Policy and terms.
                        </Typography>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
}