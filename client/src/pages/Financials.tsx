import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { DollarSign, TrendingUp, Clock, AlertTriangle } from "lucide-react";

export default function Financials() {
  const feeData = [
    { name: "Strategy & Mgmt", value: 24500, color: "#003366" }, // Phase 1
    { name: "Engineering", value: 185000, color: "#00A0D2" }, // Phase 2
    { name: "Permitting", value: 125000, color: "#F39200" }, // Phase 3
    { name: "Construction Admin", value: 76500, color: "#2E7D32" }, // Phase 4
  ];

  const roiData = [
    { name: "Standard Process", cost: 100, label: "Baseline Cost" },
    { name: "HSG Strategy", cost: 70, label: "Optimized Cost" },
  ];

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Investment Summary</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A transparent fee structure designed to align incentives and maximize project ROI through accelerated delivery.
          </p>
        </div>
      </div>

      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Fee Breakdown */}
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Fee Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={feeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {feeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      itemStyle={{ color: '#003366', fontWeight: 'bold' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {feeData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ROI / Cost Avoidance */}
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Cost of Delays Avoided</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={roiData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12, fontWeight: 600 }} />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="cost" radius={[0, 4, 4, 0]} barSize={40}>
                      {roiData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 1 ? '#2E7D32' : '#94a3b8'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-bold text-green-800">30% Cost Reduction</div>
                    <p className="text-sm text-green-700">
                      Our streamlined permitting process avoids an estimated $250k in holding costs and delay penalties.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Discount Offer */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-sm font-bold mb-4">
                <Clock className="h-4 w-4" />
                LIMITED TIME OFFER
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Early Commitment Discount</h2>
              <p className="text-primary-foreground/80 text-lg max-w-xl">
                Sign by <span className="font-bold text-white">December 31st</span> to receive a 5% discount on Phase 1 Strategy & Management fees.
              </p>
            </div>
            
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 min-w-[200px]">
              <div className="text-sm uppercase tracking-widest font-medium mb-1">Save Up To</div>
              <div className="text-5xl font-bold text-accent">$15,000</div>
            </div>
          </div>
        </div>

        {/* Third Party Costs Disclaimer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-panel border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="text-lg font-serif font-bold text-primary mb-4">Engagement Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Total HSG Engagement Value</span>
                  <span className="font-bold text-foreground">$376,000 - $411,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-muted-foreground">Retainer to Start (50% Phase 1)</span>
                  <span className="font-bold text-accent">$12,250</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-muted-foreground text-sm">Proposal Validity</span>
                  <span className="text-sm font-medium">Dec 2025 - Jun 30, 2026</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 border border-border rounded-lg bg-muted/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
              <div>
                <h4 className="font-bold text-foreground text-sm uppercase tracking-wide mb-1">Third-Party Cost Disclosure</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Fees presented herein do not include direct costs for third-party vendors (e.g., drillers, surveyors, lab testing) or regulatory application fees.
                </p>
                <div className="font-bold text-foreground">
                  Estimated Third-Party Costs: $252,000 - $334,000
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  (Includes $95k legally required for TCEQ)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
