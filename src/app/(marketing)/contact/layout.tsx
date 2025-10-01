import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - PGS FM Ltd Professional Security & Facilities Management',
  description: 'Get in touch with PGS FM Ltd for professional security services, facilities management, and cleaning solutions. Free consultations and quotes available.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
