import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileText, Building2, HardHat } from "lucide-react";

export default function Regulatory() {
  const timeline = [
    {
      phase: "Phase 1: Site Selection & Due Diligence",
      duration: "Months 1-2",
      status: "Complete",
      items: ["Feasibility Study", "Environmental Assessment", "Initial County Meetings"],
      icon: FileText,
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      phase: "Phase 2: GCUWCD Permitting",
      duration: "Months 3-6",
      status: "In Progress",
      items: ["Hydrogeological Report", "Test Well Drilling", "Production Permit Application"],
      icon: Building2,
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      phase: "Phase 3: TCEQ & County Approvals",
      duration: "Months 6-12",
      status: "Pending",
      items: ["TLAP Permit (Wastewater)", "Public Water System (PWS) Registration", "Platting & Zoning"],
      icon: Building2,
      color: "text-orange-600",
      bg: "bg-orange-100"
    },
    {
      phase: "Phase 4: Construction Start",
      duration: "Month 13+",
      status: "Future",
      items: ["Notice to Proceed", "Site Grading", "Utility Installation"],
      icon: HardHat,
      color: "text-gray-600",
      bg: "bg-gray-100"
    }
  ];

  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Regulatory Pathway</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A de-risked permitting strategy leveraging our deep relationships with local agencies to accelerate approval timelines.
          </p>
        </div>
      </div>

      <section className="py-16 container">
        <div className="relative border-l-2 border-border ml-4 md:ml-12 space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm ${item.status === 'Complete' ? 'bg-green-500' : item.status === 'In Progress' ? 'bg-blue-500' : 'bg-gray-300'}`} />
              
              <Card className="glass-panel transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center ${item.color}`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{item.phase}</h3>
                        <div className="text-sm font-medium text-muted-foreground">{item.duration}</div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      item.status === 'Complete' ? 'bg-green-100 text-green-700' :
                      item.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {item.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {item.items.map((subItem, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 rounded bg-muted/30 border border-border/50">
                        <CheckCircle2 className={`h-4 w-4 ${item.status === 'Complete' ? 'text-green-500' : 'text-muted-foreground'}`} />
                        <span className="text-sm font-medium">{subItem}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="opacity-50 hover:opacity-100 transition-opacity">
            <div className="h-16 flex items-center justify-center font-serif font-bold text-2xl text-gray-400">TCEQ</div>
            <p className="text-xs text-muted-foreground mt-2">Texas Commission on Environmental Quality</p>
          </div>
          <div className="opacity-50 hover:opacity-100 transition-opacity">
            <div className="h-16 flex items-center justify-center font-serif font-bold text-2xl text-gray-400">GCUWCD</div>
            <p className="text-xs text-muted-foreground mt-2">Gillespie County Underground Water Conservation District</p>
          </div>
          <div className="opacity-50 hover:opacity-100 transition-opacity">
            <div className="h-16 flex items-center justify-center font-serif font-bold text-2xl text-gray-400">TxDOT</div>
            <p className="text-xs text-muted-foreground mt-2">Texas Department of Transportation</p>
          </div>
          <div className="opacity-50 hover:opacity-100 transition-opacity">
            <div className="h-16 flex items-center justify-center font-serif font-bold text-2xl text-gray-400">COUNTY</div>
            <p className="text-xs text-muted-foreground mt-2">Gillespie County Commissioners Court</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
