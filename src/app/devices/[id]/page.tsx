// app/devices/[id]/page.tsx

import { notFound } from "next/navigation";
import type { Device } from "@/types/device";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-dynamic";

// Fetch a single device by ID
async function getDevice(id: string): Promise<Device | undefined> {
  const res = await fetch(
    "https://myadroid.s3.us-east-1.amazonaws.com/Adroit-Dummy-Data.json",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.devices.find((d: Device) => d.device_id === id);
}

// Dynamic device page
export default async function DevicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const device = await getDevice(id);
  if (!device) return notFound();

  return (
    <div className="p-4">
      <div className="bg-blue-100 p-4 rounded mb-4 text-center">
        <h1 className="text-2xl font-bold mb-2">
          Client Name: {device.client_name}
        </h1>
      </div>
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-800">
        <p className="text-sm font-semibold text-gray-500 uppercase mb-2 tracking-wide">
          Device Details
        </p>
        <div className="space-y-2 text-left">
          <p>
            <span className="font-semibold text-blue-700">Device ID:</span>{" "}
            {device.device_id}
          </p>
          <p>
            <span className="font-semibold text-blue-700">Status:</span>{" "}
            {device.status}
          </p>
          <p>
            <span className="font-semibold text-blue-700">Battery:</span>{" "}
            {device.battery_percentage}% ({device.battery_voltage} V)
          </p>
          <p>
            <span className="font-semibold text-blue-700">Temperature:</span>{" "}
            {device.temperature_celsius}°C
          </p>
          <p>
            <span className="font-semibold text-blue-700">Humidity:</span>{" "}
            {device.humidity_percent}%
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Last updated: {device.timestamp}
          </p>
        </div>
      </div>

      <Link
        href="/devices"
        className="mt-5 inline-flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Devices
      </Link>
    </div>
  );
}

// export default function DevicePage() {
//   return <div>Device page coming soon</div>;
// }
