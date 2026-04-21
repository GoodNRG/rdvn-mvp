import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [ { name: "Mon", retail: 120, vending: 80, institutional: 200 }, { name: "Tue", retail: 140, vending: 95, institutional: 210 }, { name: "Wed", retail: 160, vending: 110, institutional: 250 }, { name: "Thu", retail: 180, vending: 130, institutional: 260 }, { name: "Fri", retail: 220, vending: 170, institutional: 300 }, ];

export default function Dashboard() { return ( <div className="p-6 grid gap-4"> <div className="flex justify-between items-center"> <h1 className="text-2xl font-bold">Distribution Velocity Network</h1> <Button>Export Event Data</Button> </div>

<div className="grid grid-cols-3 gap-4">
    <Card>
      <CardContent className="p-4">
        <p className="text-sm">Retail Velocity</p>
        <p className="text-2xl font-bold">+18%</p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <p className="text-sm">Vending Velocity</p>
        <p className="text-2xl font-bold">+32%</p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4">
        <p className="text-sm">Institutional Velocity</p>
        <p className="text-2xl font-bold">+41%</p>
      </CardContent>
    </Card>
  </div>

  <Card>
    <CardContent className="p-4 h-80">
      <p className="mb-2 font-semibold">Consumption Velocity by Channel</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="retail" stroke="#8884d8" />
          <Line type="monotone" dataKey="vending" stroke="#82ca9d" />
          <Line type="monotone" dataKey="institutional" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>

  <Card>
    <CardContent className="p-4">
      <p className="font-semibold">Event Feed (Live System)</p>
      <div className="text-sm mt-2 space-y-1">
        <p>• Vending Machine #204 — Stockout event (SKU: Energy Drink)</p>
        <p>• Hospital Unit A3 — Restock event (Case: 24 units)</p>
        <p>• Retail Store #88 — 12 unit sales spike detected</p>
      </div>
    </CardContent>
  </Card>
</div>

); }
