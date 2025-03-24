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

export default function TermsOfServicePage() {
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
                            Terms & Conditions – Indo Wagen
                        </Typography>

                        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                            Last Updated: March 4, 2025
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            1. Age Consent & User Eligibility
                        </Typography>
                        <Typography variant="body1" paragraph>
                            By accessing and using the online booking services of Indo Wagen through www.indowagen.com, users confirm that they are 18 years or older. Indo Wagen expects all user-provided data to be accurate and submitted in good faith. The company is not responsible for verifying the details entered and reserves the right to refuse service or cancel transactions if false or misleading information is detected.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            2. Fair Usage Policy
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The Indo Wagen website is an online platform designed to:
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li>Showcase Indo Wagen’s electric vehicles and services.</li>
                            <li>Facilitate dealership inquiries and product reservations.</li>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Users must ensure that they do not:
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li>Spread malicious code, engage in hacking, or deploy bots.</li>
                            <li>Attempt to disrupt website functionality or exploit security vulnerabilities.</li>
                            <li>Use outdated browsers or insecure devices while accessing the platform.</li>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Indo Wagen regularly updates its website to enhance user experience, and any misuse of the platform may result in legal action.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            3. User Responsibilities & Obligations
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Users are solely responsible for the accuracy of the details submitted, including personal information, KYC documents, and payment details. Indo Wagen does not verify documents; they are forwarded to dealers, financiers, insurers, and payment processors for transaction processing. Any consequences arising from false or incomplete data (including legal liability) are the sole responsibility of the user.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Indemnification Clause:</strong> Users agree to indemnify Indo Wagen and its partners from any claims, losses, or damages caused due to misrepresentation or submission of incorrect details.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            4. Booking & Payment Policy
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Indo Wagen provides a secure platform for customers to book an e-rickshaw or loader through authorized dealers. Confidential financial details (e.g., bank accounts, credit card numbers) are not stored by Indo Wagen or its dealerships. Additional payments for optional services (e.g., insurance, finance) are handled separately by third-party service providers.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            5. Booking Modifications & Cancellations
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Modifying a Booking:</strong>
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li>Users may change their booked vehicle within the same dealership before making the final payment.</li>
                            <li>If the new vehicle costs more than the originally booked vehicle, the price difference must be paid to confirm the modification.</li>
                            <li>Once the final payment is made, no further modifications will be allowed.</li>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Booking Cancellation & Refund Policy:</strong>
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li>Users may cancel a booking before completing the final payment.</li>
                            <li>Refunds will be processed by the selected dealership and credited to the original payment method.</li>
                            <li>Once the full payment is made, cancellations will not be accepted.</li>
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            6. Vehicle Registration, Delivery & After-Sales Support
                        </Typography>
                        <Typography variant="body1" paragraph>
                            RTO registration will be processed through the dealership selected by the user. Users must visit the dealership to verify their original documents. Vehicles will not be delivered if the user fails to provide valid local address proof for registration. Users are responsible for making necessary travel arrangements to collect their vehicle from the dealership.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>After-Sales Support:</strong> Post-purchase servicing and repairs are available at authorized Indo Wagen dealerships. Customers must visit the dealership’s service center at their own expense to avail of maintenance and repairs.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            7. Dispute Resolution & Legal Jurisdiction
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Any disputes related to transactions, bookings, or product purchases will be handled as per Indo Wagen’s company policy. Legal proceedings, if required, shall be under the jurisdiction of courts in Kolkata, West Bengal. Indo Wagen reserves the right to amend these terms & conditions at any time without prior notice.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            8. Liability & Intellectual Property Rights
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Indo Wagen is not liable for losses, delays, or damages arising from third-party services such as financing, insurance, or logistics. All content, images, and trademarks on www.indowagen.com are the property of Indo Wagen. Users are prohibited from reproducing or distributing website content without prior written permission.
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            9. Force Majeure Clause
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Indo Wagen shall not be held responsible for delays or service disruptions caused by:
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li>Natural disasters (earthquakes, floods, pandemics).</li>
                            <li>Government regulations or policy changes.</li>
                            <li>Technical failures beyond Indo Wagen’s control.</li>
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: 600 }}>
                            10. Acceptance of Terms
                        </Typography>
                        <Typography variant="body1" paragraph>
                            By using Indo Wagen’s website and services, users agree to comply with these Terms & Conditions. Indo Wagen reserves the right to:
                        </Typography>
                        <Typography variant="body1" paragraph component="ul" sx={{ pl: 4 }}>
                            <li>Suspend services for users violating these terms.</li>
                            <li>Modify policies as per legal or business requirements.</li>
                        </Typography>

                        <Divider sx={{ my: 4 }} />

                        <Typography variant="body1" paragraph>
                            For any queries, please contact:
                        </Typography>
                        <Typography variant="body2">
                            Toll-Free: 1800 120 345 345
                            <br />
                            Email: info@zeniak.com
                            <br />
                            Website: www.indowagen.com
                        </Typography>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
}