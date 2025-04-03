"use client"

import { useState } from "react"
import {
  Download,
  Filter,
  Search,
  ChevronDown,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  Eye,
  Edit,
  Trash2,
} from "lucide-react"

// Order status component
function OrderStatus({ status }: { status: string }) {
  let bgColor = "bg-gray-500/20"
  let textColor = "text-gray-400"
  let icon = <Clock size={14} />

  switch (status.toLowerCase()) {
    case "completed":
      bgColor = "bg-green-500/20"
      textColor = "text-green-500"
      icon = <CheckCircle size={14} />
      break
    case "processing":
      bgColor = "bg-blue-500/20"
      textColor = "text-blue-500"
      icon = <Clock size={14} />
      break
    case "cancelled":
      bgColor = "bg-red-500/20"
      textColor = "text-red-500"
      icon = <XCircle size={14} />
      break
    case "on hold":
      bgColor = "bg-amber-500/20"
      textColor = "text-amber-500"
      icon = <AlertTriangle size={14} />
      break
  }

  return (
    <div className={`flex items-center gap-1.5 rounded-full ${bgColor} px-2.5 py-1 ${textColor}`}>
      {icon}
      <span className="text-xs font-medium">{status}</span>
    </div>
  )
}

export default function Orders() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  // Mock orders data
  const orders = [
    {
      id: "#ORD-12345",
      customer: "John Doe",
      email: "john@example.com",
      date: "2023-07-15",
      total: "₹12,500",
      status: "Completed",
      items: 3,
    },
    {
      id: "#ORD-12346",
      customer: "Jane Smith",
      email: "jane@example.com",
      date: "2023-07-14",
      total: "₹8,750",
      status: "Processing",
      items: 2,
    },
    {
      id: "#ORD-12347",
      customer: "Robert Johnson",
      email: "robert@example.com",
      date: "2023-07-14",
      total: "₹5,200",
      status: "On Hold",
      items: 1,
    },
    {
      id: "#ORD-12348",
      customer: "Emily Davis",
      email: "emily@example.com",
      date: "2023-07-13",
      total: "₹15,800",
      status: "Completed",
      items: 4,
    },
    {
      id: "#ORD-12349",
      customer: "Michael Wilson",
      email: "michael@example.com",
      date: "2023-07-12",
      total: "₹3,600",
      status: "Cancelled",
      items: 1,
    },
    {
      id: "#ORD-12350",
      customer: "Sarah Brown",
      email: "sarah@example.com",
      date: "2023-07-12",
      total: "₹9,300",
      status: "Processing",
      items: 2,
    },
    {
      id: "#ORD-12351",
      customer: "David Miller",
      email: "david@example.com",
      date: "2023-07-11",
      total: "₹7,450",
      status: "Completed",
      items: 3,
    },
    {
      id: "#ORD-12352",
      customer: "Lisa Taylor",
      email: "lisa@example.com",
      date: "2023-07-10",
      total: "₹4,200",
      status: "Processing",
      items: 1,
    },
  ]

  // Filter orders based on search query and status filter
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "All" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="text-gray-400">Manage and track your customer orders</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center rounded-md bg-teal-500 px-3 py-1.5 text-sm text-white">
            + New Order
          </button>

          <button className="flex items-center rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-sm">
            <Download size={16} className="mr-2 text-gray-400" />
            Export
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4 backdrop-blur-sm sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-full rounded-md border border-gray-700 bg-gray-800 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex items-center rounded-md border border-gray-700 bg-gray-800 px-3">
            <Filter size={16} className="mr-2 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-10 bg-transparent text-sm text-white focus:outline-none"
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Processing">Processing</option>
              <option value="On Hold">On Hold</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <button className="flex items-center rounded-md border border-gray-700 bg-gray-800 px-3 py-2.5 text-sm">
            More Filters
            <ChevronDown size={16} className="ml-2 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/80">
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Order ID
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Customer
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Date
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Items
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Total
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Status
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-800/50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium">{order.customer}</div>
                    <div className="text-xs text-gray-400">{order.email}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">{order.date}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                    {order.items} {order.items === 1 ? "item" : "items"}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">{order.total}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <OrderStatus status={order.status} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                    <div className="flex justify-end gap-2">
                      <button className="rounded p-1 text-gray-400 hover:bg-gray-800 hover:text-white">
                        <Eye size={16} />
                      </button>
                      <button className="rounded p-1 text-gray-400 hover:bg-gray-800 hover:text-white">
                        <Edit size={16} />
                      </button>
                      <button className="rounded p-1 text-gray-400 hover:bg-gray-800 hover:text-red-500">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-800 bg-gray-900/80 px-6 py-3">
          <div className="text-sm text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{" "}
            <span className="font-medium">24</span> results
          </div>
          <div className="flex gap-1">
            <button className="rounded border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-400 hover:bg-gray-700">
              Previous
            </button>
            <button className="rounded border border-gray-700 bg-teal-500/20 px-3 py-1 text-sm font-medium text-teal-500">
              1
            </button>
            <button className="rounded border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-400 hover:bg-gray-700">
              2
            </button>
            <button className="rounded border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-400 hover:bg-gray-700">
              3
            </button>
            <button className="rounded border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-400 hover:bg-gray-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

