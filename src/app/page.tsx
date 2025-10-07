import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Adroit IoT Dashboard</h1>
      <p className="text-lg text-gray-600 mb-8">
        Monitor your IoT devices in real-time with live data and insights.
      </p>
      <Link
        href="/devices"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        View Devices
      </Link>
    </main>
  );
}
