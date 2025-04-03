"use client"

import { useState } from "react"
import {
  Download,
  Filter,
  Search,
  ChevronDown,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Plus,
} from "lucide-react"

// Product status component
function ProductStatus({ status }: { status: string }) {
  let bgColor = "bg-gray-500/20"
  let textColor = "text-gray-400"
  let icon = <CheckCircle size={14} />

  switch (status.toLowerCase()) {
    case "in stock":
      bgColor = "bg-green-500/20"
      textColor = "text-green-500"
      icon = <CheckCircle size={14} />
      break
    case "low stock":
      bgColor = "bg-amber-500/20"
      textColor = "text-amber-500"
      icon = <CheckCircle size={14} />
      break
    case "out of stock":
      bgColor = "bg-red-500/20"
      textColor = "text-red-500"
      icon = <XCircle size={14} />
      break
  }

  return (
    <div className={`flex items-center gap-1.5 rounded-full ${bgColor} px-2.5 py-1 ${textColor}`}>
      {icon}
      <span className="text-xs font-medium">{status}</span>
    </div>
  )
}

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")

  // Mock products data
  const products = [
    {
      id: "PRD-001",
      name: "Premium Wireless Headphones",
      image: "/placeholder.svg?height=60&width=60",
      category: "Electronics",
      price: "₹8,999",
      stock: 45,
      status: "In Stock",
      sku: "ELEC-WH-001",
    },
    {
      id: "PRD-002",
      name: "Organic Cotton T-Shirt",
      image: "/placeholder.svg?height=60&width=60",
      category: "Clothing",
      price: "₹1,299",
      stock: 120,
      status: "In Stock",
      sku: "CLTH-TS-002",
    },
    {
      id: "PRD-003",
      name: "Stainless Steel Water Bottle",
      image: "/placeholder.svg?height=60&width=60",
      category: "Home & Kitchen",
      price: "₹899",
      stock: 8,
      status: "Low Stock",
      sku: "HOME-WB-003",
    },
    {
      id: "PRD-004",
      name: "Leather Wallet",
      image: "/placeholder.svg?height=60&width=60",
      category: "Accessories",
      price: "₹1,499",
      stock: 35,
      status: "In Stock",
      sku: "ACCS-LW-004",
    },
    {
      id: "PRD-005",
      name: "Smart Fitness Tracker",
      image: "/placeholder.svg?height=60&width=60",
      category: "Electronics",
      price: "₹3,499",
      stock: 0,
      status: "Out of Stock",
      sku: "ELEC-FT-005",
    },
    {
      id: "PRD-006",
      name: "Ceramic Coffee Mug",
      image: "/placeholder.svg?height=60&width=60",
      category: "Home & Kitchen",
      price: "₹499",
      stock: 65,
      status: "In Stock",
      sku: "HOME-CM-006",
    },
    {
      id: "PRD-007",
      name: "Bluetooth Speaker",
      image: "/placeholder.svg?height=60&width=60",
      category: "Electronics",
      price: "₹2,999",
      stock: 5,
      status: "Low Stock",
      sku: "ELEC-BS-007",
    },
    {
      id: "PRD-008",
      name: "Denim Jeans",
      image: "/placeholder.svg?height=60&width=60",
      category: "Clothing",
      price: "₹2,499",
      stock: 40,
      status: "In Stock",
      sku: "CLTH-DJ-008",
    },
  ]

  // Get unique categories for filter
  const categories = ["All", ...new Set(products.map((product) => product.category))]

  // Filter products based on search query and category filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = categoryFilter === "All" || product.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-gray-400">Manage your product inventory</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex items-center rounded-md bg-teal-500 px-3 py-1.5 text-sm text-white">
            <Plus size={16} className="mr-2" />
            Add Product
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
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-full rounded-md border border-gray-700 bg-gray-800 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex items-center rounded-md border border-gray-700 bg-gray-800 px-3">
            <Filter size={16} className="mr-2 text-gray-400" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-10 bg-transparent text-sm text-white focus:outline-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <button className="flex items-center rounded-md border border-gray-700 bg-gray-800 px-3 py-2.5 text-sm">
            More Filters
            <ChevronDown size={16} className="ml-2 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
          >
            <div className="relative h-48 w-full bg-gray-800">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute right-2 top-2">
                <button className="rounded-full bg-gray-900/80 p-1.5 text-white backdrop-blur-sm hover:bg-gray-800">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs text-gray-400">{product.sku}</span>
                <ProductStatus status={product.status} />
              </div>

              <h3 className="mb-1 text-lg font-medium">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.category}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">{product.price}</span>
                <span className="text-sm text-gray-400">Stock: {product.stock}</span>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex flex-1 items-center justify-center rounded-md border border-gray-700 bg-gray-800 py-1.5 text-sm text-white hover:bg-gray-700">
                  <Eye size={14} className="mr-1.5" />
                  View
                </button>
                <button className="flex flex-1 items-center justify-center rounded-md border border-gray-700 bg-gray-800 py-1.5 text-sm text-white hover:bg-gray-700">
                  <Edit size={14} className="mr-1.5" />
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

