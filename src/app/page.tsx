import React from "react";

// 1. Define the shape of your data
interface Device {
  device_id: string;
  client_name: string;
  client_ID: number;
  timestamp: string;
  battery_percentage: number;
  battery_voltage: number;
  temperature_celsius: number;
  humidity_percent: number;
  status: string;
}

interface DeviceResponse {
  devices: Device[];
}

// 2. Fetch function with return type
async function getData(): Promise<DeviceResponse> {
  const res = await fetch("https://myadroid.s3.us-east-1.amazonaws.com/Adroit-Dummy-Data.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// 3. Page component
export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.devices.map((device) => (
          <li key={device.device_id}>
            {device.device_id} - {device.client_name} - {device.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
