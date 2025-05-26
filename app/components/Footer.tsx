// app/components/Footer.tsx
// Footer component for the application.

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center text-sm">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Kevin Pellegrin. All (most) rights reserved.</p>
        <p className="mt-2">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}