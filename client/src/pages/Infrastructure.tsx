import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Zap, Sprout, ArrowRight } from "lucide-react";

export default function Infrastructure() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Utility Infrastructure</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Sustainable water and wastewater solutions designed for the unique hydrogeology of the Texas Hill Country.
          </p>
        </div>
      </div>

      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* MBR System Diagram */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
              <Droplets className="h-8 w-8 text-secondary" />
              Wastewater Treatment
            </h2>
            <p className="text-muted-foreground">
              We propose a state-of-the-art Membrane Bioreactor (MBR) system. This technology produces high-quality effluent suitable for beneficial reuse (irrigation), turning a liability into an asset.
            </p>
            
            <Card className="glass-panel overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-border/50">
                <CardTitle className="text-lg">MBR Process Flow</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-col gap-4 relative">
                  {/* Flow Steps */}
                  {[
                    { title: "Influent", desc: "Raw Wastewater", color: "bg-gray-500" },
                    { title: "Screening", desc: "Debris Removal", color: "bg-blue-900" },
                    { title: "Bioreactor", desc: "Biological Treatment", color: "bg-blue-700" },
                    { title: "Membrane Filtration", desc: "0.04 Micron Filter", color: "bg-blue-500" },
                    { title: "UV Disinfection", desc: "Pathogen Kill", color: "bg-cyan-500" },
                    { title: "Irrigation", desc: "Beneficial Reuse", color: "bg-green-600" },
                  ].map((step, index, arr) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className={`w-12 h-12 rounded-full ${step.color} text-white flex items-center justify-center font-bold shadow-lg z-10`}>
                        {index + 1}
                      </div>
                      <div className="flex-1 bg-white/50 p-3 rounded-lg border border-border/50 shadow-sm group-hover:shadow-md transition-shadow">
                        <div className="font-bold text-primary">{step.title}</div>
                        <div className="text-xs text-muted-foreground">{step.desc}</div>
                      </div>
                      {index < arr.length - 1 && (
                        <div className="absolute left-6 top-10 w-0.5 h-full bg-border -z-0" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Water Supply / Aquifer */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
              <Zap className="h-8 w-8 text-accent" />
              Water Supply Strategy
            </h2>
            <p className="text-muted-foreground">
              Dual-source strategy utilizing the reliable Edwards-Trinity Aquifer combined with rainwater harvesting to ensure drought resilience.
            </p>

            <div className="relative h-[500px] bg-[#e8e4d9] rounded-xl overflow-hidden border border-[#d4cfc0] shadow-inner">
              {/* Geological Layers Visualization (CSS Art) */}
              <div className="absolute inset-0 flex flex-col">
                {/* Surface */}
                <div className="h-[15%] bg-[#8B4513]/20 border-b border-[#8B4513]/30 flex items-end justify-center pb-2">
                  <span className="text-xs font-bold text-[#8B4513] uppercase tracking-widest">Surface Soil</span>
                </div>
                {/* Limestone */}
                <div className="h-[35%] bg-[#F5F5DC] border-b border-[#D2B48C] flex items-center justify-center relative">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest bg-white/50 px-2 py-1 rounded">Edwards Limestone</span>
                  {/* Random rocks */}
                  <div className="absolute top-4 left-10 w-8 h-4 bg-gray-300 rounded-full opacity-50" />
                  <div className="absolute bottom-10 right-20 w-12 h-6 bg-gray-300 rounded-full opacity-50" />
                </div>
                {/* Aquifer */}
                <div className="h-[30%] bg-blue-200/50 border-b border-blue-300 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-400/10 animate-pulse" />
                  <span className="text-lg font-bold text-blue-800 uppercase tracking-widest z-10 bg-white/60 px-4 py-2 rounded shadow-sm">Edwards-Trinity Aquifer</span>
                  {/* Water particles */}
                  <div className="absolute top-2 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-60" />
                  <div className="absolute bottom-4 right-1/3 w-3 h-3 bg-blue-500 rounded-full opacity-60" />
                </div>
                {/* Bedrock */}
                <div className="h-[20%] bg-gray-400 border-t border-gray-500 flex items-start justify-center pt-4">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">Granite Bedrock</span>
                </div>
              </div>

              {/* Well Shaft */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-[70%] bg-gray-800 z-20">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-500/50 rounded-full blur-md animate-pulse" />
              </div>
              
              {/* Pump House */}
              <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-16 h-12 bg-white border border-gray-400 shadow-lg z-30 flex items-center justify-center">
                <div className="w-full h-1 bg-red-500 absolute top-1/2" />
              </div>

              {/* Labels */}
              <div className="absolute top-4 right-4 bg-white/90 p-3 rounded shadow text-xs space-y-1">
                <div className="font-bold">Well Depth: 350-450 ft</div>
                <div>Yield: 50-100 GPM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-green-50 border-green-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Sprout className="h-10 w-10 text-green-600 mb-4" />
              <div className="text-3xl font-bold text-green-800 mb-1">100%</div>
              <div className="text-sm text-green-700">Effluent Reuse for Irrigation</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Droplets className="h-10 w-10 text-blue-600 mb-4" />
              <div className="text-3xl font-bold text-blue-800 mb-1">40%</div>
              <div className="text-sm text-blue-700">Potable Water Savings</div>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-100">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Zap className="h-10 w-10 text-orange-600 mb-4" />
              <div className="text-3xl font-bold text-orange-800 mb-1">Tier 1</div>
              <div className="text-sm text-orange-700">Reliability Rating</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
