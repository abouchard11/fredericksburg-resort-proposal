import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, MapPin, TrendingUp, Users, Clock, Wine, Zap, FileText, Building2, HardHat, DollarSign, AlertTriangle, Mail, Phone, Briefcase, Target, Lightbulb } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Engagement Phases
  const phases = [
    {
      phase: "Phase 1: Feasibility",
      duration: "2-3 Weeks",
      fee: "$24,500",
      items: ["Site Visits & Utility Assessment", "Regulatory Pathway Review", "Go/No-Go Recommendation"],
      icon: FileText,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      phase: "Phase 2: Due Diligence",
      duration: "6-8 Weeks",
      fee: "$78,500",
      items: ["Phase I ESA", "Floodplain Survey", "Well Test & HCUWCD Inquiry"],
      icon: Building2,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      phase: "Phase 3: Engineering",
      duration: "10-14 Weeks",
      fee: "$82,500",
      items: ["RFP Management", "Geotech Oversight", "Fire Flow Analysis"],
      icon: Zap,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      phase: "Phase 4: Permitting",
      duration: "10-18 Months",
      fee: "$138,000",
      items: ["TCEQ TLAP Application", "HCUWCD Permit", "TxDOT Access Approval"],
      icon: FileText,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      phase: "Phase 5: Oversight",
      duration: "12-18 Months",
      fee: "$52,500",
      items: ["Utility Contractor Oversight", "TCEQ Inspections", "As-Built Documentation"],
      icon: HardHat,
      color: "text-gray-600",
      bg: "bg-gray-50"
    }
  ];

  const capexComparison = [
    { site: "Site A (Enchanted Rock)", capex: 850 },
    { site: "Site B (Hwy 290 Wine Trail)", capex: 555 }
  ];

  const marketMetrics = [
    { label: "Annual Visitors", value: "1.2M", icon: Users },
    { label: "Target Occupancy", value: "72%", icon: Target },
    { label: "Average Daily Rate", value: "$275", icon: DollarSign },
    { label: "Nearby Wineries", value: "50+", icon: Wine }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section id="overview" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-secondary/40 z-10" />
          <motion.div style={{ y: heroY, opacity: opacityHero }} className="w-full h-full">
            <img 
              src="/images/hero-background.png" 
              alt="Texas Hill Country" 
              className="w-full h-full object-cover object-center scale-110"
            />
          </motion.div>
        </div>

        <div className="container relative z-20 pt-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                CONFIDENTIAL PROPOSAL
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
                Fredericksburg <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Hill Country Resort
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl font-light leading-relaxed">
                Infrastructure & Permitting Strategy for a 40-50 Key Boutique Resort Development
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none text-lg px-8 h-14" onClick={() => scrollToSection('market')}>
                  Market Overview <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 h-14" onClick={() => scrollToSection('engagement')}>
                  Engagement Scope
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/70 cursor-pointer" onClick={() => scrollToSection('market')}>
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto mb-2" />
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-24 bg-background relative">
        <div className="container">
          <div className="mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Expert-Reviewed & Validated | December 2025</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Executive Summary</h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Houston Strategy Group presents a comprehensive feasibility analysis for the proposed Fredericksburg Hill Country Resort, a boutique hospitality development targeting 40-50 keys in one of Texas's premier tourism destinations. This proposal outlines a detailed five-phase engagement structure for infrastructure due diligence, regulatory permitting, and construction oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-primary">Site Recommendation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Site B (Highway 290 Wine Trail) is recommended for superior infrastructure access, Highway 290 visibility, Pedernales River frontage, and reduced capital requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-gradient-to-br from-secondary/5 to-secondary/10 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-secondary">Utility Strategy</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Private Well + MBR (Membrane Bioreactor) scenario maximizes capacity, enables water reuse, and avoids municipal annexation risks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-6">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-3 text-accent">Engagement Value</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Five-phase scope with performance-based bonuses up to $35,000. Full engagement discount of $24,250 available for upfront commitment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">Market Fundamentals</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {marketMetrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="flex justify-center mb-3">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section id="market" className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Market Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Fredericksburg stands as one of Texas's most prominent leisure tourism destinations, attracting approximately <strong>1.2 million visitors annually</strong> to its German heritage, wine country, and boutique shopping experiences. The market demonstrates strong seasonality with peak visitation during spring wildflower season (March-April) and fall harvest season (October-November).
            </p>
          </div>

          {/* Feeder Markets */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">Feeder Market Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-primary" />
                    Austin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">2.3M</div>
                  <p className="text-sm text-muted-foreground mb-3">Metro Population</p>
                  <div className="text-sm font-medium text-primary">80 miles | 1.5 hour drive</div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-secondary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-secondary" />
                    San Antonio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary mb-2">1.5M</div>
                  <p className="text-sm text-muted-foreground mb-3">Metro Population</p>
                  <div className="text-sm font-medium text-secondary">70 miles | 1.25 hour drive</div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-accent hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-accent" />
                    Houston
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent mb-2">2.3M</div>
                  <p className="text-sm text-muted-foreground mb-3">Metro Population</p>
                  <div className="text-sm font-medium text-accent">280 miles | 4 hour drive</div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-purple-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                    Dallas-Fort Worth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">7.5M</div>
                  <p className="text-sm text-muted-foreground mb-3">Metro Population</p>
                  <div className="text-sm font-medium text-purple-600">270 miles | 4 hour drive</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Events & Demand */}
          <div className="bg-white border border-border rounded-xl p-8 overflow-x-auto">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Key Events & Demand Generators</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-3 px-4 font-semibold text-primary">Event</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Period</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Attendance</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-4">Wildflower Trail & Wine Trail</td>
                  <td className="py-4 px-4">March-April</td>
                  <td className="py-4 px-4">~25,000</td>
                  <td className="py-4 px-4">Peak spring ADR, high winery traffic</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-4">Food & Wine Fest</td>
                  <td className="py-4 px-4">October</td>
                  <td className="py-4 px-4">~15,000</td>
                  <td className="py-4 px-4">Premium pricing, culinary tourism</td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50">
                  <td className="py-4 px-4">Oktoberfest</td>
                  <td className="py-4 px-4">October</td>
                  <td className="py-4 px-4">~20,000</td>
                  <td className="py-4 px-4">German heritage celebration, weekend compression</td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-4 px-4">Trade Days</td>
                  <td className="py-4 px-4">Monthly</td>
                  <td className="py-4 px-4">~10,000/month</td>
                  <td className="py-4 px-4">Consistent weekend leisure demand</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Competitive Landscape */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Competitive Landscape</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fredericksburg's lodging supply is heavily weighted toward bed-and-breakfast properties, vacation rentals, and limited-service hotels. <strong>No full-service resort with integrated restaurant, spa, and pool amenities currently exists in the market</strong>, representing a significant whitespace opportunity for a 40-50 key boutique property targeting affluent leisure travelers seeking elevated experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With strong demand fundamentals, limited upscale supply, and robust feeder market access, a well-positioned property targeting 72% occupancy at a $275 ADR represents conservative underwriting relative to demonstrated market performance.
            </p>
          </div>
        </div>
      </section>

      {/* Site Comparison */}
      <section id="sites" className="py-24 bg-background border-t border-border/50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Site Evaluation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              HSG has evaluated two candidate sites based on location, infrastructure access, natural amenities, regulatory considerations, and capital expenditure requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Site A */}
            <Card className="border-2 border-muted-foreground/20 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-muted/50">
                <CardTitle className="text-2xl text-primary">Site A: Enchanted Rock Hill Country Ranch</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Key Attributes</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size</span>
                      <span className="font-semibold">~70 acres</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-semibold">$2,040,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Distance to Downtown</span>
                      <span className="font-semibold">8 miles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Key Features</span>
                      <span className="font-semibold text-right">Hilltop views, stargazing</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Infrastructure Challenges</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Remote location requires extensive infrastructure investment including deep wells (400-600 ft), fire suppression system, private road construction, and electric service extension.
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="text-3xl font-bold text-orange-600">7.5 / 10</div>
                  <p className="text-xs text-orange-700 mt-1">Scenic appeal limited by infrastructure costs</p>
                </div>
              </CardContent>
            </Card>

            {/* Site B - Recommended */}
            <Card className="border-4 border-accent shadow-xl hover:shadow-2xl transition-shadow relative">
              <div className="absolute -top-3 -right-3 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                RECOMMENDED
              </div>
              <CardHeader className="bg-accent/10">
                <CardTitle className="text-2xl text-accent">Site B: Highway 290 Wine Trail</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Key Attributes</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size</span>
                      <span className="font-semibold">32.56 acres</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-semibold">$1,630,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Distance to Downtown</span>
                      <span className="font-semibold">5 miles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Key Features</span>
                      <span className="font-semibold text-right">1,400 ft Pedernales frontage</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Strategic Advantages</h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Existing well infrastructure + underground electric</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Highway 290 visibility and access</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Pedernales River frontage and natural amenities</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>Lower utility CapEx ($485K-$625K vs $750K-$950K)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-accent/10 border border-accent rounded-lg p-4">
                  <div className="text-3xl font-bold text-accent">8.5 / 10</div>
                  <p className="text-xs text-accent/80 mt-1">Superior location with reduced development risk</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Capital Expenditure Comparison */}
          <div className="bg-white border border-border rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">Utility Capital Expenditure Comparison</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={capexComparison}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="site" />
                <YAxis label={{ value: 'CapEx ($K)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => `$${value}K`} />
                <Bar dataKey="capex" fill="#F39200" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground mt-6">
              *Site B CapEx assumes existing well is adequate for commercial use. Add $45K-$65K if new well drilling required. TxDOT decel lane ($75K-$125K) is additional to utility CapEx shown.
            </p>
          </div>

          {/* Critical Contingencies */}
          <div className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-yellow-900 mb-4">Site B Critical Contingencies</h4>
                <ul className="space-y-3 text-sm text-yellow-800">
                  <li className="flex gap-2">
                    <span className="font-semibold min-w-fit">Well Capacity Verification:</span>
                    <span>Existing well must pass 72-hour pump test for commercial use (add $45K-$65K if new well required)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold min-w-fit">TxDOT Access Permit:</span>
                    <span>Highway 290 commercial entrance requires deceleration lane ($75K-$125K) + permit fees ($8K-$12K)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold min-w-fit">Floodplain Survey:</span>
                    <span>Pedernales frontage may require FEMA LOMR if in Zone A/AE ($15K-$25K engineering + application)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold min-w-fit">Highway 290 Widening:</span>
                    <span>TxDOT 10-year CIP includes 290 widening (2028-2032); verify current ROW and potential taking risk</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Scope */}
      <section id="engagement" className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Engagement Scope & Fees</h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              HSG proposes a comprehensive five-phase engagement structure beginning with preliminary feasibility and progressing through site due diligence, engineering coordination, permitting execution, and construction oversight.
            </p>
          </div>

          {/* Fee Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-blue-100/50">
              <CardContent className="p-8">
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide mb-2">Base Fees (All 5 Phases)</div>
                <div className="text-4xl font-bold text-primary mb-4">$376,000</div>
                <p className="text-sm text-muted-foreground">Comprehensive scope across all phases</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-green-100/50">
              <CardContent className="p-8">
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide mb-2">Performance Bonuses</div>
                <div className="text-4xl font-bold text-green-600 mb-4">Up to $35,000</div>
                <p className="text-sm text-muted-foreground">For successful permit approvals</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-accent/20 to-accent/30 border-2 border-accent">
              <CardContent className="p-8">
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wide mb-2">Maximum Engagement Value</div>
                <div className="text-4xl font-bold text-accent mb-4">$411,000</div>
                <p className="text-sm text-muted-foreground">With all bonuses realized</p>
              </CardContent>
            </Card>
          </div>

          {/* Retainer & Discount */}
          <div className="bg-white border-2 border-primary rounded-xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Initial Retainer</h4>
                <div className="text-3xl font-bold text-primary mb-2">$12,250</div>
                <p className="text-sm text-muted-foreground">50% of Phase 1 to initiate engagement</p>
                <p className="text-xs text-muted-foreground mt-3">Subsequent phases activated upon client approval and milestone completion</p>
              </div>
              <div className="bg-accent/5 border border-accent rounded-lg p-6">
                <h4 className="text-lg font-semibold text-accent mb-3">Full Engagement Discount</h4>
                <div className="text-3xl font-bold text-accent mb-2">$24,250 savings</div>
                <p className="text-sm text-muted-foreground">7.5% discount for upfront commitment to all five phases</p>
                <p className="text-xs text-muted-foreground mt-3">Effective rate: $351,750 for complete scope</p>
              </div>
            </div>
          </div>

          {/* Third-Party Costs */}
          <div className="bg-muted/50 border border-border rounded-xl p-8 mb-16">
            <h4 className="text-lg font-semibold text-primary mb-4">Third-Party Professional Services (Pass-Through)</h4>
            <p className="text-muted-foreground mb-4">
              Engineering, surveying, environmental testing, and permitting fees are estimated and billed on a pass-through basis:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">$285,000</div>
                <p className="text-sm text-muted-foreground">Low Estimate</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">$385,000</div>
                <p className="text-sm text-muted-foreground">High Estimate</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Includes Phase I ESA, floodplain surveys, well testing, HCUWCD coordination, TCEQ permitting, TxDOT access approval, and engineering oversight.
            </p>
          </div>

          {/* Phases */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">Five-Phase Engagement Structure</h3>
            <div className="space-y-6">
              {phases.map((phase, idx) => {
                const Icon = phase.icon;
                return (
                  <Card key={idx} className={`border-l-4 border-l-primary hover:shadow-lg transition-shadow ${phase.bg}`}>
                    <CardContent className="p-8">
                      <div className="flex gap-6">
                        <div className={`${phase.color} flex-shrink-0`}>
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                              <h4 className="text-xl font-semibold text-foreground">{phase.phase}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{phase.duration}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">{phase.fee}</div>
                              <p className="text-xs text-muted-foreground">HSG Fee</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {phase.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Regulatory */}
      <section id="infrastructure" className="py-24 bg-background border-t border-border/50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Infrastructure & Regulatory Pathway</h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-16">
            Successful resort development requires coordinated infrastructure planning and regulatory navigation across multiple jurisdictions and agencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Utilities */}
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Utility Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Water Supply</h4>
                  <p className="text-sm text-muted-foreground">Private well + membrane bioreactor (MBR) system for water reuse and conservation. Existing well requires 72-hour pump test verification.</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Wastewater</h4>
                  <p className="text-sm text-muted-foreground">MBR system enables on-site treatment and landscape irrigation, reducing municipal dependency and operational costs.</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Electric & Gas</h4>
                  <p className="text-sm text-muted-foreground">Existing underground electric infrastructure on Site B. Natural gas service extension required from Highway 290.</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Stormwater</h4>
                  <p className="text-sm text-muted-foreground">Floodplain considerations on Pedernales frontage. FEMA LOMR may be required if in Zone A/AE.</p>
                </div>
              </CardContent>
            </Card>

            {/* Regulatory */}
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-secondary/5">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-secondary" />
                  Regulatory Approvals
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">TCEQ (Texas Commission on Environmental Quality)</h4>
                  <p className="text-sm text-muted-foreground">TLAP (Texas Land Application Permit) for MBR system. Typical approval timeline: 6-12 months.</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">HCUWCD (Gillespie County UWCD)</h4>
                  <p className="text-sm text-muted-foreground">Groundwater use permit for well operation. Coordination with county on well capacity and aquifer sustainability.</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">TxDOT (Texas Department of Transportation)</h4>
                  <p className="text-sm text-muted-foreground">Highway 290 commercial access permit. Deceleration lane required. Typical approval: 3-6 months.</p>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Local Permitting</h4>
                  <p className="text-sm text-muted-foreground">Gillespie County building permits, subdivision approval (if applicable), and local zoning compliance.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regulatory Considerations */}
          <Card className="mt-8 border-2 border-primary/20">
            <CardHeader className="bg-primary/5">
              <CardTitle>Gillespie County Considerations</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground"><strong>Dark Sky Ordinance:</strong> Outdoor lighting limited to &lt;3,000K color temp with full cutoff fixtures (budget $8K-$15K premium)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground"><strong>Road Impact Fees:</strong> Commercial development subject to road impact fees (~$18K-$28K based on trip generation)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground"><strong>Subdivision Approval:</strong> Properties &gt;10 acres creating new lots require subdivision plat approval</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Financials Summary */}
      <section id="financials" className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Financial Summary</h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-16">
            Total engagement cost includes HSG professional services, third-party engineering and permitting, and contingency reserves.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-lg">HSG Professional Services</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base Fees</span>
                    <span className="font-semibold">$376,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Performance Bonuses</span>
                    <span className="font-semibold">Up to $35,000</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between font-bold">
                    <span>Total HSG</span>
                    <span className="text-primary">$376,000 - $411,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="bg-secondary/5">
                <CardTitle className="text-lg">Third-Party Services (Pass-Through)</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Engineering & Surveying</span>
                    <span className="font-semibold">$120K-$150K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Environmental & Testing</span>
                    <span className="font-semibold">$80K-$120K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Permitting & Fees</span>
                    <span className="font-semibold">$85K-$115K</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between font-bold">
                    <span>Total Third-Party</span>
                    <span className="text-secondary">$285,000 - $385,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent">
              <CardHeader className="bg-accent/10">
                <CardTitle className="text-lg text-accent">Total Engagement Cost</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">HSG Services</span>
                    <span className="font-semibold">$376K-$411K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Third-Party Services</span>
                    <span className="font-semibold">$285K-$385K</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                    <span>Total Range</span>
                    <span className="text-accent">$661K - $796K</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">Excludes construction phase contingencies and client-specific requirements</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Value Proposition */}
          <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Engagement Value Proposition</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="h-6 w-6 text-accent" />
                    <h4 className="font-semibold text-foreground">Strategic Clarity</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Clear go/no-go decision point after Phase 1, enabling early capital allocation decisions.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-accent" />
                    <h4 className="font-semibold text-foreground">Risk Mitigation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Comprehensive due diligence identifies regulatory and infrastructure risks before construction commitments.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="h-6 w-6 text-accent" />
                    <h4 className="font-semibold text-foreground">Regulatory Certainty</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Coordinated permitting pathway with proven relationships across TCEQ, TxDOT, and local authorities.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background border-t border-border/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Next Steps</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're prepared to begin Phase 1 feasibility analysis upon your authorization. The initial retainer of $12,250 initiates site visits, utility assessment, and regulatory pathway review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Email</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Reach out with questions about the proposal or to schedule a discussion.
                </p>
                <a href="mailto:info@houstonstrategy.net" className="text-accent font-semibold hover:underline">
                  info@houstonstrategy.net
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Direct contact for immediate discussion of engagement terms.
                </p>
                <a href="tel:+17135551234" className="text-accent font-semibold hover:underline">
                  (713) 555-1234
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">CONFIDENTIAL & PROPRIETARY</p>
            <p className="text-muted-foreground leading-relaxed">
              This proposal contains proprietary and confidential information prepared exclusively for the intended recipient. The information contained herein may not be reproduced, distributed, or disclosed to third parties without the express written consent of Houston Strategy Group. This proposal and all associated materials remain the property of Houston Strategy Group until a formal engagement agreement is executed.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
