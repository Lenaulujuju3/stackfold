import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'StackFold — Consumer Demand Cohorts',
  description: 'Performance-grade audience segmentation for insurance acquisition teams.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
