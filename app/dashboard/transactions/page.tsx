"use client"

import { useState } from "react"
import { Search, Filter, Download, ChevronDown, ArrowUp, ArrowDown } from "lucide-react"

// Transaction status component
function TransactionStatus({ type }: { type: string }) {
  let bgColor = "bg-gray-500/20"
  let textColor = "text-gray-400"
  let icon = <ArrowUp size={14} />

  switch (type.toLowerCase()) {
    case "credit":
      bgColor = "bg-green-500/20"
      textColor = "text-green-500"
      icon = <ArrowUp size={14} />
      break
    case "debit":
      bgColor = "bg-red-500/20"
      textColor = "text-red-500"
      icon = <ArrowDown size={14} />
      break
  }

  return (
    <div className={`flex items-center gap-1.5 rounded-full ${bgColor} px-2.5 py-1 ${textColor}`}>
      {icon}
      <span className="text-xs font-medium">{type}</span>
    </div>
  )
}

export default function Transactions() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState("All")
  
  // Mock transactions data
  const transactions = [
    {
      id: "TXN-12345",
      date: "2023-07-15",
      description: "Payment from John Doe",
      amount: "₹12,500",
      type: "Credit",
      status: "Completed",
      account: "HDFC Bank ****1234"
    },
    {
      id: "TXN-12346",
      date: "2023-07-14",
      description: "Supplier Payment",
      amount: "₹8,750",
      type: "Debit",
      status: "Completed",
      account: "ICICI Bank ****5678"
    },
    {
      id: "TXN-12347",
      date: "2023-07-14",
      description: "Subscription Renewal",
      amount: "₹5,200",
      type: "Debit",
      status: "Completed",
      account: "HDFC Bank ****1234"
    },
    {
      id: "TXN-12348",
      date: "2023-07-13",
      description: "Payment from Emily Davis",
      amount: "₹15,800",
      type: "Credit",
      status: "Completed",
      account: "HDFC Bank ****1234"
    },
    {
      id: "TXN-12349",
      date: "2023-07-12",
      description: "Office Supplies",
      amount: "₹3,600",
      type: "Debit",
      status: "Completed",
      account: "ICICI Bank ****5678"
    },
    {
      id: "TXN-12350",
      date: "2023-07-12",
      description: "Payment from Sarah Brown",
      amount: "₹9,300",
      type: "Credit",
      status: "Pending",
      account: "HDFC Bank ****1234"
    },
    {
      id: "TXN-12351",
      date: "2023-07-11",
      description: "Utility Bill Payment",
      amount: "₹7,450",
      type: "Debit",
      status: "Completed",
      account: "HDFC Bank ****1234"
    },
    {
      id: "TXN-12352",
      date: "2023-07-10",
      description: "Payment from Lisa Taylor",
      amount: "₹4,200",
      type: "Credit",
      status: "Completed",
      account: "ICICI Bank ****5678"
    }
  ]
  
  // Filter transactions based on search query and type filter
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesType = typeFilter === "All" || transaction.type === typeFilter
    
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Transactions</h1>
          <p className="text-gray-400">View and manage your financial transactions</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
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
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 w-full rounded-md border border-gray-700 bg-gray-800 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
        
        <div className="flex gap-3">
          <div className="flex items-center rounded-md border border-gray-700 bg-gray-800 px-3">
            <Filter size={16} className="mr-2 text-gray-400" />
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="h-10 bg-transparent text-sm text-white focus:outline-none"
            >
              <option value="All">All Types</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </div>
          
          <button className="flex items-center rounded-md border border-gray-700 bg-gray-800 px-3 py-2.5 text-sm">
            Date Range
            <ChevronDown size={16} className="ml-2 text-gray-400" />
          </button>
        </div>
      </div>
      
      {/* Transactions Table */}
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/80">
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Transaction ID
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Date
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Description
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Amount
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Type
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Status
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">
                  Account
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-800/50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    {transaction.id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {transaction.description}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    {transaction.amount}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <TransactionStatus type={transaction.type} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                      transaction.status === "Completed" ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500"
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-300">
                    {transaction.account}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-800 bg-gray-900/80 px-6 py-3">
          <div className="text-sm text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">24</span> results
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
            <button className="rounded border border-gray-700 bg-gray-800 px-3 py-1 text-\

