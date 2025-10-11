import Table from "@/components/Table";
import { Device } from "@/types/device";
import Header from "@/components/Header/Header";


// Fetch devices from S3
async function getDevices(): Promise<Device[]> {
  const res = await fetch(
    "https://myadroid.s3.us-east-1.amazonaws.com/Adroit-Dummy-Data.json",
    { cache: "no-store" } // ensures fresh data on each request
  );
  const data = await res.json();

  return data.devices as Device[];
}

// DevicesPage component
export default async function DevicesPage() {
  const devices: Device[] = await getDevices();

  return (
    <div className="p-4">
     <Header />
      <Table data={devices} />
    </div>
  );
}
 