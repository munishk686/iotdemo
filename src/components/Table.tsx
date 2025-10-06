"use client";
import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Device } from "@/types/device";
import Link from "next/link";

type TableProps = {
  data: Device[];
};

export default function Table({ data }: TableProps) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 19;

  const start = (page - 1) * itemsPerPage;
  const currentDevices = data.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>

      <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Client Name</th>
            <th className="px-4 py-2 text-left">Client ID</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Battery</th>
            <th className="px-4 py-2 text-left">Temperature</th>
            <th className="px-4 py-2 text-left">Humidity</th>
            <th className="px-4 py-2 text-left">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {currentDevices.map((device) => (
            <tr key={device.device_id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{device.device_id}</td>
              <td className="px-4 py-2">{device.client_name}</td>
              <td className="px-4 py-2">{device.client_ID}</td>
              <td className="px-4 py-2">{device.status}</td>
              <td className="px-4 py-2">{device.battery_percentage}%</td>
              <td className="px-4 py-2">{device.temperature_celsius}°C</td>
              <td className="px-4 py-2">{device.humidity_percent}%</td>
              <td className="px-4 py-2">{new Date(device.timestamp).toISOString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.max(1, p - 1));
                }}
              />

            </PaginationItem>
            <span className="px-3 text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage((p) => Math.min(totalPages, p + 1));
                }}
              />

            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );

}

