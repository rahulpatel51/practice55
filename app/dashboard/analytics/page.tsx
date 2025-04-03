"use client"

import { useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import { Line, Bar, Doughnut } from "react-chartjs-2"
import { Calendar, Download, Filter, Users } from "lucide-react"

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

export default function Analytics() {
  const [dateRange, setDateRange] = useState("Last 30 days")

  // Traffic sources chart data
  const trafficData = {
    labels: ["Direct", "Organic Search", "Referral", "Social Media", "Email", "Paid Ads"],
    datasets: [
      {
        data: [35, 25, 15, 12, 8, 5],
        backgroundColor: [
          "rgb(20, 184, 166)",
          "rgb(56, 189, 248)",
          "rgb(168, 85, 247)",
          "rgb(249, 115, 22)",
          "rgb(236, 72, 153)",
          "rgb(234, 179, 8)",
        ],
        borderColor: "#0f172a",
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  }

  // Visitor stats chart data
  const visitorData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "New Visitors",
        data: [2800, 1800, 3200, 2400, 2800, 3600, 4200, 3800, 4600, 4200, 4800, 5200],
        borderColor: "rgb(20, 184, 166)",
        backgroundColor: "rgba(20, 184, 166, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Returning Visitors",
        data: [1800, 1200, 2200, 1600, 1800, 2400, 2800, 2600, 3200, 3000, 3400, 3800],
        borderColor: "rgb(56, 189, 248)",
        backgroundColor: "rgba(56, 189, 248, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  }

  // Conversion rate chart data
  const conversionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Conversion Rate (%)",
        data: [2.4, 2.1, 2.8, 3.2, 3.5, 3.8, 4.1, 4.3, 4.5, 4.8, 5.0, 5.2],
        backgroundColor: "rgb(20, 184, 166)",
        borderRadius: 6,
        barThickness: 12,
      },
    ],
  }

  // Chart options
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
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
        },
      },
    },
  }

  const barChartOptions = {
    ...lineChartOptions,
    scales: {
      ...lineChartOptions.scales,
      y: {
        ...lineChartOptions.scales.y,
        beginAtZero: true,
        ticks: {
          ...lineChartOptions.scales.y.ticks,
          callback: (value: number) => `${value}%`,
        },
      },
    },
  }

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
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
    cutout: "70%",
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-gray-400">Detailed insights about your store performance</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5">
            <Calendar size={16} className="mr-2 text-gray-400" />
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="bg-transparent text-sm text-white focus:outline-none"
            >
              <option value="Today">Today</option>
              <option value="Yesterday">Yesterday</option>
              <option value="Last 7 days">Last 7 days</option>
              <option value="Last 30 days">Last 30 days</option>
              <option value="This month">This month</option>
              <option value="Last month">Last month</option>
              <option value="Custom range">Custom range</option>
            </select>
          </div>

          <button className="flex items-center rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-sm">
            <Filter size={16} className="mr-2 text-gray-400" />
            Filters
          </button>

          <button className="flex items-center rounded-md bg-teal-500 px-3 py-1.5 text-sm text-white">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">Total Visits</h3>
            <div className="rounded-full bg-teal-500/20 p-2 text-teal-500">
              <Users size={20} />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">128,450</p>
            <p className="mt-1 text-sm font-medium text-green-500">+12.5% from last month</p>
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">Unique Visitors</h3>
            <div className="rounded-full bg-blue-500/20 p-2 text-blue-500">
              <Users size={20} />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">96,345</p>
            <p className="mt-1 text-sm font-medium text-green-500">+8.2% from last month</p>
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">Bounce Rate</h3>
            <div className="rounded-full bg-amber-500/20 p-2 text-amber-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 13L10 16L17 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">32.8%</p>
            <p className="mt-1 text-sm font-medium text-red-500">+2.4% from last month</p>
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">Avg. Session</h3>
            <div className="rounded-full bg-purple-500/20 p-2 text-purple-500">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 8V12L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">3m 42s</p>
            <p className="mt-1 text-sm font-medium text-green-500">+12.5% from last month</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold">Visitor Statistics</h3>
          <p className="text-sm text-gray-400">New vs returning visitors over time</p>
          <div className="mt-4 h-[300px] w-full">
            <Line data={visitorData} options={lineChartOptions} />
          </div>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold">Traffic Sources</h3>
          <p className="text-sm text-gray-400">Where your visitors are coming from</p>
          <div className="mt-4 h-[300px] w-full">
            <Doughnut data={trafficData} options={doughnutOptions} />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold">Conversion Rate</h3>
        <p className="text-sm text-gray-400">Monthly conversion rate percentage</p>
        <div className="mt-4 h-[300px] w-full">
          <Bar data={conversionData} options={barChartOptions} />
        </div>
      </div>
    </div>
  )
}

