import { Lightbulb, Home, Waves, Sofa } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DesignVision() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-white border-t border-border/50">
      <div className="container">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Lightbulb className="h-4 w-4" />
            Design Concept
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Hill Country Modern Aesthetic
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A sophisticated blend of native materials, contemporary design, and seamless integration with the natural landscape.
          </p>
        </div>

        {/* Hero Rendering */}
        <div className="mb-12">
          <Card className="overflow-hidden border-2 border-accent/30 shadow-2xl">
            <CardContent className="p-0">
              <img 
                src="/fredericksburg-resort-proposal/images/renderings/hero_resort_view.png" 
                alt="Conceptual rendering of the Hill Country resort at sunset"
                className="w-full h-auto object-cover"
              />
              <div className="p-6 bg-accent/5">
                <h3 className="text-xl font-serif font-bold text-accent mb-2">Resort Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The resort features Hill Country Modern architecture with native limestone walls, dark metal roofs, 
                  and expansive glass to frame views of the Pedernales River valley. Mature live oak trees are preserved 
                  and integrated into the site design, creating a seamless connection between built and natural environments.
                </p>
                <p className="text-xs text-muted-foreground/70 italic mt-3">
                  *Conceptual Rendering - For Illustrative Purposes Only
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Renderings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Pool Deck */}
          <Card className="overflow-hidden border-2 border-primary/20 hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="/fredericksburg-resort-proposal/images/renderings/pool_deck_view.png" 
                  alt="Infinity pool deck overlooking the river"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-2">
                    <Waves className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Pool & Amenities</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Infinity-edge pool with fire pit seating areas and native limestone terracing, designed to maximize river views.
                </p>
                <p className="text-xs text-muted-foreground/60 italic mt-2">
                  *Visual Example - Conceptual Design
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Interior */}
          <Card className="overflow-hidden border-2 border-primary/20 hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="/fredericksburg-resort-proposal/images/renderings/interior_clubhouse.png" 
                  alt="Luxury clubhouse interior"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-2">
                    <Sofa className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Interior Design</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Clubhouse features exposed timber beams, limestone accent walls, and floor-to-ceiling windows for natural light.
                </p>
                <p className="text-xs text-muted-foreground/60 italic mt-2">
                  *Visual Example - Conceptual Design
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Aerial Site */}
          <Card className="overflow-hidden border-2 border-primary/20 hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="/fredericksburg-resort-proposal/images/renderings/aerial_site_view.png" 
                  alt="Aerial view of resort site layout"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Site Integration</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  40-50 guest accommodations nestled among live oaks with central amenity core and preserved natural landscape.
                </p>
                <p className="text-xs text-muted-foreground/60 italic mt-2">
                  *Visual Example - Conceptual Design
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Design Principles */}
        <div className="bg-white border border-border rounded-xl p-8">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">Design Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-primary mb-3">Materials & Sustainability</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Native Texas limestone sourced locally to minimize transportation impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Dark metal roofing for longevity and compliance with Dark Sky ordinances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Reclaimed timber beams and locally-sourced wood finishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Energy-efficient glazing systems to reduce HVAC loads</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-3">Landscape Integration</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Preservation of existing live oak trees and native vegetation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Native landscaping (grasses, agave, wildflowers) requiring minimal irrigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Terraced site design to minimize grading and preserve natural topography</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Pedestrian trails connecting to Pedernales River access points</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
