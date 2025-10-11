"use client";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Device } from "@/types/device";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
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
            <th className="px-1 py-2 text-left">Actions</th>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Client Name</th>
            <th className="px-4 py-2 text-left">Client ID</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Battery</th>
            <th className="px-4 py-2 text-left">Temperature</th>
          
          </tr>
        </thead>
        <tbody>
          {currentDevices.map((device) => (
            <tr key={device.device_id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2 text-left">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-1 rounded hover:bg-gray-200">
                      <MoreHorizontal className="h-5 w-5 text-gray-600" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/devices/${device.device_id}`}>
                        View Details
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        alert(`Ticket created for ${device.device_id}`)
                      }
                    >
                      Create Ticket
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
              <td className="px-4 py-2">{device.device_id}</td>
              <td className="px-4 py-2">{device.client_name}</td>
              <td className="px-4 py-2">{device.client_ID}</td>
              <td className="px-4 py-2">{device.status}</td>
              <td className="px-4 py-2">{device.battery_percentage}%</td>
              <td className="px-4 py-2">{device.temperature_celsius}°C</td>
             
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
