// // app/devices/[id]/page.tsx
// import { notFound } from "next/navigation";
// import type { Device } from "@/types/device";
// import Link from "next/link";

// // Type for page props
// type DevicePageProps = {
//   params: { id: string };
// };

// // Fetch a single device by ID
// async function getDevice(id: string): Promise<Device | undefined> {
//   const res = await fetch(
//     "https://myadroid.s3.us-east-1.amazonaws.com/Adroit-Dummy-Data.json",
//     { cache: "no-store" }
//   );
//   const data = await res.json();
//   return data.devices.find((d: Device) => d.device_id === id);
// }

// // Dynamic device page
// export default async function DevicePage({ params }: DevicePageProps) {
//   const device = await getDevice(params.id);

//   if (!device) return notFound();

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-2">{device.client_name}</h1>
//       <p>ID: {device.device_id}</p>
//       <p>Status: {device.status}</p>
//       <p>Battery: {device.battery_percentage}% ({device.battery_voltage} V)</p>
//       <p>Temperature: {device.temperature_celsius}°C</p>
//       <p>Humidity: {device.humidity_percent}%</p>
//       <p>Last updated: {device.timestamp}</p>
//       <Link href="/devices" className="text-blue-600 mt-4 inline-block">
//         ← Back to devices
//       </Link>
//     </div>
//   );
// }
