import Table from "@/components/Table";
import { Device } from "@/types/device";

async function getDevices(): Promise<Device[]> {
  const res = await fetch("https://myadroid.s3.us-east-1.amazonaws.com/Adroit-Dummy-Data.json");
  const data = await res.json();

   return data.devices;
}

export default async function DevicesPage() {
  const devices = await getDevices();

  return (
    <div>
      <h1>Devices</h1>
      <Table data={devices} />
    </div>
  );
}
