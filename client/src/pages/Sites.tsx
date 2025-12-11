import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapView } from "@/components/Map";
import { Check, MapPin, Wine } from "lucide-react";

export default function Sites() {
  return (
    <Layout>
      <div className="bg-muted/30 py-12 border-b border-border/50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Site Comparison</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Evaluating two premier locations based on infrastructure access, regulatory constraints, and market visibility.
          </p>
        </div>
      </div>

      <section className="py-16 container">
        <Tabs defaultValue="site-a" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="site-a">Site A: Enchanted Rock</TabsTrigger>
              <TabsTrigger value="site-b">Site B: Wine Trail</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Interactive Map Below</span>
            </div>
          </div>

          <TabsContent value="site-a" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <Badge className="bg-primary mb-2">Ranch Road 965</Badge>
                  <h2 className="text-3xl font-serif font-bold text-foreground">Enchanted Rock Corridor</h2>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Located on the scenic route to Enchanted Rock State Natural Area, this site offers dramatic views and a secluded, nature-immersive guest experience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="bg-muted/20 border-none">
                    <CardContent className="p-4">
                      <div className="font-semibold text-primary mb-1">Pros</div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Iconic views of Enchanted Rock</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Less traffic noise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Premium "Retreat" positioning</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted/20 border-none">
                    <CardContent className="p-4">
                      <div className="font-semibold text-destructive mb-1">Cons</div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-destructive font-bold text-xs mt-0.5">✕</span>
                          <span>Limited utility access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive font-bold text-xs mt-0.5">✕</span>
                          <span>Stricter dark sky regulations</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-4">
                  <h3 className="font-serif font-semibold mb-3">Infrastructure Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Water Availability</span>
                      <span className="font-medium text-orange-600">Moderate (Well Required)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full w-[40%]" />
                    </div>
                    
                    <div className="flex justify-between text-sm mt-2">
                      <span>Permitting Complexity</span>
                      <span className="font-medium text-green-600">Low</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-[20%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                <img 
                  src="/images/site-enchanted-rock.png" 
                  alt="Site A Aerial View" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-medium text-primary">
                  Aerial Visualization
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="site-b" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <Badge className="bg-secondary mb-2">Highway 290</Badge>
                  <h2 className="text-3xl font-serif font-bold text-foreground">Wine Trail Corridor</h2>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Situated directly on the famous Highway 290 Wine Trail, this site offers maximum visibility and immediate access to over 50 wineries and tasting rooms.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="bg-muted/20 border-none">
                    <CardContent className="p-4">
                      <div className="font-semibold text-primary mb-1">Pros</div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>High visibility & traffic count</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Walkable to adjacent wineries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Commercial zoning precedent</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted/20 border-none">
                    <CardContent className="p-4">
                      <div className="font-semibold text-destructive mb-1">Cons</div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-destructive font-bold text-xs mt-0.5">✕</span>
                          <span>Higher land cost</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-destructive font-bold text-xs mt-0.5">✕</span>
                          <span>Highway noise mitigation needed</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-4">
                  <h3 className="font-serif font-semibold mb-3">Infrastructure Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Water Availability</span>
                      <span className="font-medium text-green-600">High (Public Utility Potential)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-[80%]" />
                    </div>
                    
                    <div className="flex justify-between text-sm mt-2">
                      <span>Permitting Complexity</span>
                      <span className="font-medium text-orange-600">Moderate (TxDOT Access)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full w-[60%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
                <img 
                  src="/images/site-wine-trail.png" 
                  alt="Site B Aerial View" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-medium text-primary">
                  Aerial Visualization
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Shared Map Section */}
        <div className="mt-16 h-[500px] rounded-xl overflow-hidden shadow-xl border border-border relative">
           <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur p-3 rounded-lg shadow-sm border border-border/50">
              <h3 className="font-serif font-semibold text-primary flex items-center gap-2">
                <Wine className="h-4 w-4" /> Wine Trail & Site Locations
              </h3>
            </div>
            <MapView 
              className="w-full h-full"
              onMapReady={(map) => {
                const center = { lat: 30.25, lng: -98.80 }; // Between sites
                map.setCenter(center);
                map.setZoom(11);

                // Site A Marker
                new google.maps.Marker({
                  position: { lat: 30.35, lng: -98.85 }, // Approx location north
                  map: map,
                  title: "Site A: Enchanted Rock",
                  label: {
                    text: "A",
                    color: "white",
                    fontWeight: "bold"
                  },
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 14,
                    fillColor: "#003366",
                    fillOpacity: 1,
                    strokeWeight: 2,
                    strokeColor: "#FFFFFF",
                  }
                });

                // Site B Marker
                new google.maps.Marker({
                  position: { lat: 30.23, lng: -98.75 }, // Approx location east on 290
                  map: map,
                  title: "Site B: Wine Trail",
                  label: {
                    text: "B",
                    color: "white",
                    fontWeight: "bold"
                  },
                  icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 14,
                    fillColor: "#00A0D2",
                    fillOpacity: 1,
                    strokeWeight: 2,
                    strokeColor: "#FFFFFF",
                  }
                });

                // Draw 290 Corridor Line
                const wineTrailCoords = [
                  { lat: 30.27, lng: -98.87 }, // FBG
                  { lat: 30.20, lng: -98.60 }, // Stonewall area
                ];
                new google.maps.Polyline({
                  path: wineTrailCoords,
                  geodesic: true,
                  strokeColor: "#F39200",
                  strokeOpacity: 0.6,
                  strokeWeight: 8,
                  map: map
                });
              }}
            />
        </div>
      </section>
    </Layout>
  );
}
