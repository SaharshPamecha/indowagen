import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Indo Wagen',
  description: 'Join our team at Indo Wagen and be part of the electric vehicle revolution. Explore exciting career opportunities in sustainable transportation.',
  openGraph: {
    title: 'Careers at Indo Wagen',
    description: 'Join our team at Indo Wagen and be part of the electric vehicle revolution.',
    images: ['/images/careers-banner.jpg'],
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}