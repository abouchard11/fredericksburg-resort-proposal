import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LocationContext() {
  return (
    <section className="py-24 bg-white border-t border-border/50">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Location & Regional Context
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategically positioned in the heart of Texas Hill Country with exceptional access to major metropolitan feeder markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Regional Map */}
          <Card className="overflow-hidden border-2 border-primary/20 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-2 text-xl">
                <MapPin className="h-5 w-5 text-primary" />
                Regional Access
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <img 
                src="/fredericksburg-resort-proposal/images/maps/regional-map.jpg" 
                alt="Regional map showing Fredericksburg location relative to Austin, San Antonio, and Houston"
                className="w-full h-auto object-contain"
              />
              <div className="p-6 bg-muted/30">
                <h4 className="font-semibold text-primary mb-3">Drive Time Analysis</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Austin Metro (2.3M)</span>
                    <span className="font-semibold">80 miles • 1.5 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">San Antonio Metro (1.5M)</span>
                    <span className="font-semibold">70 miles • 1.25 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Houston Metro (2.3M)</span>
                    <span className="font-semibold">280 miles • 4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">DFW Metro (7.5M)</span>
                    <span className="font-semibold">270 miles • 4 hours</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Winery Map */}
          <Card className="overflow-hidden border-2 border-secondary/20 hover:shadow-xl transition-shadow">
            <CardHeader className="bg-secondary/5">
              <CardTitle className="flex items-center gap-2 text-xl">
                <MapPin className="h-5 w-5 text-secondary" />
                Wine Trail Proximity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <img 
                src="/fredericksburg-resort-proposal/images/maps/winery-map.png" 
                alt="Map of Fredericksburg wineries and tasting rooms"
                className="w-full h-auto object-contain"
              />
              <div className="p-6 bg-muted/30">
                <h4 className="font-semibold text-secondary mb-3">Wine Country Integration</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Site B is located directly on Highway 290 Wine Trail, surrounded by 50+ wineries and tasting rooms. 
                  This positioning allows guests to walk or bike to multiple tasting rooms, creating a unique immersive 
                  wine country experience that differentiates the property from remote competitors.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Location Benefits */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-xl p-8">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">Strategic Location Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-2">Highway Visibility</h4>
              <p className="text-sm text-muted-foreground">
                Direct frontage on Highway 290, the primary corridor for Austin and San Antonio visitors traveling to wine country.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Natural Amenities</h4>
              <p className="text-sm text-muted-foreground">
                1,400 feet of Pedernales River frontage provides unique waterfront positioning and recreational opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Infrastructure Access</h4>
              <p className="text-sm text-muted-foreground">
                Existing utilities at property line significantly reduce development risk and capital expenditure requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
