import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { DollarSign, Calculator } from "lucide-react";

export function FeeCalculator() {
  const [includePhase1, setIncludePhase1] = useState(true);
  const [includePhase2, setIncludePhase2] = useState(true);
  const [includePhase3, setIncludePhase3] = useState(true);
  const [includePhase4, setIncludePhase4] = useState(true);
  const [includePhase5, setIncludePhase5] = useState(true);
  const [includeBonus, setIncludeBonus] = useState(true);

  const fees = {
    phase1: 18500,
    phase2: 55000,
    phase3: 67500,
    phase4: 95000,
    phase4Bonus: 35000,
    phase5: 130000,
  };

  const calculateTotal = () => {
    let total = 0;
    if (includePhase1) total += fees.phase1;
    if (includePhase2) total += fees.phase2;
    if (includePhase3) total += fees.phase3;
    if (includePhase4) {
      total += fees.phase4;
      if (includeBonus) total += fees.phase4Bonus;
    }
    if (includePhase5) total += fees.phase5;

    return total;
  };

  const total = calculateTotal();

  return (
    <Card className="glass-panel border-t-4 border-t-accent">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-accent" />
          Interactive Fee Estimator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Phase 1: Feasibility</Label>
              <div className="text-sm text-muted-foreground">${fees.phase1.toLocaleString()}</div>
            </div>
            <Switch checked={includePhase1} onCheckedChange={setIncludePhase1} />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Phase 2: Due Diligence</Label>
              <div className="text-sm text-muted-foreground">${fees.phase2.toLocaleString()}</div>
            </div>
            <Switch checked={includePhase2} onCheckedChange={setIncludePhase2} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Phase 3: Engineering</Label>
              <div className="text-sm text-muted-foreground">${fees.phase3.toLocaleString()}</div>
            </div>
            <Switch checked={includePhase3} onCheckedChange={setIncludePhase3} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Phase 4: Permitting</Label>
              <div className="text-sm text-muted-foreground">${fees.phase4.toLocaleString()} + ${fees.phase4Bonus.toLocaleString()} Bonus</div>
            </div>
            <Switch checked={includePhase4} onCheckedChange={setIncludePhase4} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Phase 5: Oversight</Label>
              <div className="text-sm text-muted-foreground">${fees.phase5.toLocaleString()}</div>
            </div>
            <Switch checked={includePhase5} onCheckedChange={setIncludePhase5} />
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-0.5">
              <Label className="text-base text-accent font-bold">Include Success Bonuses</Label>
              <div className="text-xs text-muted-foreground">Performance-based fee for Phase 4</div>
            </div>
            <Switch checked={includeBonus} onCheckedChange={setIncludeBonus} disabled={!includePhase4} />
          </div>

          <div className="bg-primary/5 p-4 rounded-lg flex justify-between items-center">
            <span className="font-serif font-bold text-lg text-primary">Estimated Total</span>
            <span className="font-bold text-2xl text-foreground flex items-center">
              <DollarSign className="h-5 w-5 text-muted-foreground" />
              {total.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
