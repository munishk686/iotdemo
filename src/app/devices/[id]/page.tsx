// app/devices/[id]/page.tsx
import { notFound } from "next/navigation";
import type { Device } from "@/types/device";
import Link from "next/link";


async function getDevice(id: string): Promise<Device | undefined> {
  const res = await fetch("https://myadroid.s3.us-east-1.amazonaws.com/Adroit-Dummy-Data.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.devices.find((d: Device) => d.device_id === id);
}

export default async function DevicePage({ params }: { params: { id: string } }) {
  const device = await getDevice(params.id);

  if (!device) return notFound();

  return (
    <div>
      <h1>{device.client_name}</h1>
      <p>ID: {device.device_id}</p>
      <p>Status: {device.status}</p>
      <p>Battery: {device.battery_percentage}% ({device.battery_voltage} V)</p>
      <p>Temperature: {device.temperature_celsius}°C</p>
      <p>Humidity: {device.humidity_percent}%</p>
      <p>Last updated: {device.timestamp}</p>

       <Link href="/devices">← Back to devices</Link>
    </div>
  );
}

