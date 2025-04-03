"use client"

import { useState } from "react"
import { Search, Filter, Plus, MoreHorizontal, Mail, Phone } from "lucide-react"

export default function Employees() {
  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("All")

  // Mock employees data
  const employees = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Senior Developer",
      department: "Engineering",
      email: "rahul@adminhub.com",
      phone: "+91 98765 43210",
      avatar: "/placeholder.svg?height=100&width=100",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "UI/UX Designer",
      department: "Design",
      email: "priya@adminhub.com",
      phone: "+91 87654 32109",
      avatar: "/placeholder.svg?height=100&width=100",
      status: "Active",
    },
    {
      id: 3,
      name: "Amit Kumar",
      position: "Product Manager",
      department: "Product",
      email: "amit@adminhub.com",
      phone: "+91 76543 21098",
      avatar: "/placeholder.svg?height=100&width=100",
      status: "On Leave",
    },
    {
      id: 4,
      name: "Neha Gupta",
      position: "Marketing Specialist",
      department: "Marketing",
      email: "neha@adminhub.com",
      phone: "+91 65432 10987",
      avatar: "/placeholder.svg?height=100&width=100",
      status: "Active",
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Sales Executive",
      department: "Sales",
      email: "vikram@adminhub.com",
      phone: "+91 54321 09876",
      avatar: "/placeholder.svg?height=100&width=100",
      status: "Active",
    },
    {
      id: 6,
      name: "Anjali Desai",
      position: "HR Manager",
      department: "Human Resources",
      email: "anjali@adminhub.com",
      phone: "+91 43210 98765",
      avatar: "/placeholder.svg?height=100&width=100",
      status: "Active",
    },
    {
      id: 7,
      name: "Rajesh Verma",
      position: "Finance Analyst",
      department: "Finance",
      email: "rajesh@adminhub.com",
      phone: "+91 32109 87654",
      avatar: "/placeholder.svg?height=100&width=100",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Meera Joshi",
      position: "Customer Support",
      department: "Support",
      email: "meera@adminhub.com",
      phone: "+91 21098 76543",
      avatar: "/placeholder.svg?height=100&width=100",
      status: "Active",
    },
  ]

  // Get unique departments for filter
  const departments = ["All", ...new Set(employees.map((employee) => employee.department))]

  // Filter employees based on search query and department filter
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDepartment = departmentFilter === "All" || employee.department === departmentFilter

    return matchesSearch && matchesDepartment
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Employees</h1>
          <p className="text-gray-400">Manage your team members</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center rounded-md bg-teal-500 px-3 py-1.5 text-sm text-white">
            <Plus size={16} className="mr-2" />
            Add Employee
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4 backdrop-blur-sm sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-full rounded-md border border-gray-700 bg-gray-800 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex items-center rounded-md border border-gray-700 bg-gray-800 px-3">
            <Filter size={16} className="mr-2 text-gray-400" />
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="h-10 bg-transparent text-sm text-white focus:outline-none"
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredEmployees.map((employee) => (
          <div
            key={employee.id}
            className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
          >
            <div className="relative flex flex-col items-center p-6">
              <div className="absolute right-4 top-4">
                <button className="rounded-full p-1 text-gray-400 hover:bg-gray-800 hover:text-white">
                  <MoreHorizontal size={16} />
                </button>
              </div>

              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-gray-800">
                <img
                  src={employee.avatar || "/placeholder.svg"}
                  alt={employee.name}
                  className="h-full w-full object-cover"
                />
                <div
                  className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-gray-800 ${
                    employee.status === "Active"
                      ? "bg-green-500"
                      : employee.status === "On Leave"
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                ></div>
              </div>

              <h3 className="mt-4 text-lg font-medium">{employee.name}</h3>
              <p className="text-sm text-gray-400">{employee.position}</p>

              <div className="mt-2 inline-block rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                {employee.department}
              </div>

              <div className="mt-6 w-full space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={14} className="text-gray-400" />
                  <span className="text-gray-300">{employee.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone size={14} className="text-gray-400" />
                  <span className="text-gray-300">{employee.phone}</span>
                </div>
              </div>

              <div className="mt-6 flex w-full gap-2">
                <button className="flex flex-1 items-center justify-center rounded-md border border-teal-500/30 bg-teal-500/10 py-1.5 text-sm font-medium text-teal-500 hover:bg-teal-500/20">
                  View Profile
                </button>
                <button className="flex flex-1 items-center justify-center rounded-md border border-gray-700 bg-gray-800 py-1.5 text-sm text-white hover:bg-gray-700">
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

