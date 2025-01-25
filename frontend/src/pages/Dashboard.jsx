import "./Dashboard.css"
import { BarChart } from "../components/Charts/BarChart"

const clickData = [
  { date: "21-01-25", clicks: 1234 },
  { date: "20-01-25", clicks: 1140 },
  { date: "19-01-25", clicks: 134 },
  { date: "18-01-25", clicks: 34 },
]

const deviceData = [
  { device: "Mobile", clicks: 134 },
  { device: "Desktop", clicks: 40 },
  { device: "Tablet", clicks: 3 },
]

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="card">
        <div className="card__header">
          <h2 className="card__title">Total Clicks</h2>
          <div className="card__value">1234</div>
        </div>
        <div className="card__content">
          <div className="chart">
            <BarChart data={clickData} />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card__header">
          <h2 className="card__title">Click Devices</h2>
        </div>
        <div className="card__content">
          <div className="chart chart--horizontal">
            <BarChart data={deviceData} layout="horizontal" />
          </div>
        </div>
      </div>
    </div>
  )
}

