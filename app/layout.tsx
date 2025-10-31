export const metadata = {
  title: 'StackFold — Consumer Demand Cohorts',
  description: 'Performance-grade audience segmentation for insurance acquisition teams.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{fontFamily:'ui-sans-serif,system-ui,Segoe UI,Roboto,Arial'}}>
        {children}
      </body>
    </html>
  );
}
