"use client"

import { useState } from "react"
import { RefreshCw, DollarSign, ShoppingCart, Package, Users } from "lucide-react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import { Line, Bar } from "react-chartjs-2"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler)

export default function Dashboard() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    // Simulate data refresh
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }

  // Revenue chart data
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [380000, 190000, 500000, 420000, 570000, 540000, 700000],
        borderColor: "rgb(20, 184, 166)",
        backgroundColor: "rgba(20, 184, 166, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "rgb(20, 184, 166)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: "Profit",
        data: [200000, 120000, 300000, 280000, 380000, 350000, 450000],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "rgb(59, 130, 246)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  }

  // Sales chart data
  const salesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [120, 190, 150, 170, 230, 290, 200],
        backgroundColor: "rgb(20, 184, 166)",
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  }

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: "#94a3b8",
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#fff",
        bodyColor: "#cbd5e1",
        borderColor: "#334155",
        borderWidth: 1,
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: "#94a3b8",
        },
      },
      y: {
        grid: {
          color: "#1e293b",
          drawBorder: false,
        },
        ticks: {
          color: "#94a3b8",
          callback: (value: number) => {
            if (value >= 1000000) return `₹${value / 1000000}M`
            if (value >= 1000) return `₹${value / 1000}K`
            return `₹${value}`
          },
        },
      },
    },
  }

  const barChartOptions = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y: {
        ...chartOptions.scales.y,
        beginAtZero: true,
      },
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Admin!</h1>
          <p className="text-gray-400">Here&apos;s what&apos;s happening today</p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-emerald-500 px-4 py-2 text-white shadow-lg transition-all hover:from-teal-600 hover:to-emerald-600 disabled:opacity-70"
        >
          <RefreshCw size={18} className={isRefreshing ? "animate-spin" : ""} />
          Refresh Data
        </button>
      </div>

      <div>
        <h2 className="text-xl font-bold">Dashboard Overview</h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Revenue */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-400">Total Revenue</h3>
              <div className="rounded-full bg-teal-500/20 p-2 text-teal-500">
                <DollarSign size={20} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold">₹24,78,000</p>
              <p className="mt-1 text-sm font-medium text-green-500">+12.5% from last month</p>
            </div>
          </div>

          {/* Total Orders */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-400">Total Orders</h3>
              <div className="rounded-full bg-blue-500/20 p-2 text-blue-500">
                <ShoppingCart size={20} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold">1,245</p>
              <p className="mt-1 text-sm font-medium text-green-500">+8.2% from last month</p>
            </div>
          </div>

          {/* Total Products */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-400">Total Products</h3>
              <div className="rounded-full bg-teal-500/20 p-2 text-teal-500">
                <Package size={20} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold">450</p>
              <p className="mt-1 text-sm font-medium text-green-500">+5.3% from last month</p>
            </div>
          </div>

          {/* Total Customers */}
          <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-400">Total Customers</h3>
              <div className="rounded-full bg-purple-500/20 p-2 text-purple-500">
                <Users size={20} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-3xl font-bold">2,456</p>
              <p className="mt-1 text-sm font-medium text-green-500">+6.7% from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold">Revenue Overview</h3>
          <p className="text-sm text-gray-400">Monthly revenue and profit for the current year</p>
          <div className="mt-4 h-[300px] w-full">
            <Line data={revenueData} options={chartOptions} />
          </div>
        </div>

        {/* Sales Statistics */}
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold">Sales Statistics</h3>
          <p className="text-sm text-gray-400">Daily sales for the current week</p>
          <div className="mt-4 h-[300px] w-full">
            <Bar data={salesData} options={barChartOptions} />
          </div>
        </div>
      </div>
    </div>
  )
}

