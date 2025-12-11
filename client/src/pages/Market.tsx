import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapView } from "@/components/Map";
import { Users, Clock, Car, Map as MapIcon, TrendingUp } from "lucide-react";

export default function Market() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Market Overview</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Fredericksburg is the epicenter of the Texas Wine Country, drawing over 1.5 million affluent visitors annually from major Texas metros.
          </p>
        </div>
      </div>

      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Feeder Markets Data */}
          <Card className="glass-panel border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Austin Metro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-foreground mb-1">2.4M</div>
              <p className="text-sm text-muted-foreground mb-4">Population</p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 p-2 rounded">
                <Clock className="h-4 w-4" />
                1.5 Hours Drive Time
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel border-t-4 border-t-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                San Antonio Metro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-foreground mb-1">2.6M</div>
              <p className="text-sm text-muted-foreground mb-4">Population</p>
              <div className="flex items-center gap-2 text-sm font-medium text-secondary bg-secondary/5 p-2 rounded">
                <Clock className="h-4 w-4" />
                1.25 Hours Drive Time
              </div>
            </CardContent>
          </Card>

          <Card className="glass-panel border-t-4 border-t-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Houston Metro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-foreground mb-1">7.3M</div>
              <p className="text-sm text-muted-foreground mb-4">Population</p>
              <div className="flex items-center gap-2 text-sm font-medium text-accent bg-accent/5 p-2 rounded">
                <Clock className="h-4 w-4" />
                4.0 Hours Drive Time
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-[500px] rounded-xl overflow-hidden shadow-xl border border-border relative">
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur p-3 rounded-lg shadow-sm border border-border/50">
              <h3 className="font-serif font-semibold text-primary flex items-center gap-2">
                <MapIcon className="h-4 w-4" /> Regional Feeder Map
              </h3>
            </div>
            <MapView 
              className="w-full h-full"
              onMapReady={(map) => {
                // Center on Fredericksburg
                const center = { lat: 30.2747, lng: -98.8715 };
                map.setCenter(center);
                map.setZoom(8);

                // Add markers for major cities
                const cities = [
                  { pos: { lat: 30.2672, lng: -97.7431 }, title: "Austin (1.5h)" },
                  { pos: { lat: 29.4241, lng: -98.4936 }, title: "San Antonio (1.25h)" },
                  { pos: { lat: 29.7604, lng: -95.3698 }, title: "Houston (4h)" },
                  { pos: { lat: 32.7767, lng: -96.7970 }, title: "Dallas/Ft Worth (4.5h)" },
                ];

                cities.forEach(city => {
                  new google.maps.Marker({
                    position: city.pos,
                    map: map,
                    title: city.title,
                    label: {
                      text: city.title,
                      color: "#003366",
                      fontWeight: "bold",
                      fontSize: "14px",
                      className: "bg-white px-2 py-1 rounded shadow-sm mt-8"
                    }
                  });
                });

                // Add Fredericksburg Marker (Star)
                new google.maps.Marker({
                  position: center,
                  map: map,
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: "#F39200",
                    fillOpacity: 1,
                    strokeWeight: 2,
                    strokeColor: "#FFFFFF",
                  },
                  zIndex: 999
                });
                
                // Draw circles for drive times (approximate)
                // 1.5 hr radius ~ 90 miles
                new google.maps.Circle({
                  strokeColor: "#003366",
                  strokeOpacity: 0.3,
                  strokeWeight: 1,
                  fillColor: "#003366",
                  fillOpacity: 0.05,
                  map,
                  center: center,
                  radius: 144840 // meters
                });
              }}
            />
          </div>

          <div className="space-y-6">
            <div className="bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-serif font-bold mb-2">Why Fredericksburg?</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                As the second most visited wine destination in the U.S. (behind Napa Valley), Fredericksburg commands high ADRs and occupancy rates year-round.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif font-semibold text-foreground border-b border-border pb-2">Key Demographics</h4>
              
              <div className="flex items-start gap-3">
                <div className="bg-secondary/10 p-2 rounded-full text-secondary mt-1">
                  <Car className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">Drive-To Market</div>
                  <p className="text-sm text-muted-foreground">20M+ people within a 4-hour drive radius.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-accent/10 p-2 rounded-full text-accent mt-1">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">High Spending Power</div>
                  <p className="text-sm text-muted-foreground">Average visitor household income exceeds $120k.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
