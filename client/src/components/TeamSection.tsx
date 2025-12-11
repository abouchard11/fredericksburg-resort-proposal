import { Users, Award, Briefcase, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TeamSection() {
  return (
    <section className="py-24 bg-muted/30 border-t border-border/50">
      <div className="container">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="h-4 w-4" />
            Expert Team
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Houston Strategy Group
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized expertise in Texas Hill Country resort development, regulatory navigation, and hospitality project management.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-t-4 border-t-primary hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Briefcase className="h-5 w-5 text-primary" />
                Development Advisory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive feasibility analysis, site selection, and financial structuring for boutique hospitality projects throughout Texas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-secondary hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award className="h-5 w-5 text-secondary" />
                Regulatory Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deep experience navigating TCEQ, TxDOT, and local permitting processes specific to Hill Country development constraints.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-accent hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                Project Execution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end oversight from concept through construction, ensuring quality delivery and budget adherence.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Credentials & Experience */}
        <div className="bg-white border border-border rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">Relevant Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-primary mb-4">Hill Country Expertise</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Successfully navigated TCEQ TLAP permitting for multiple Hill Country developments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Expertise in Dark Sky compliance and low-impact site design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Established relationships with Hill Country Conservation District and local authorities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Deep understanding of Pedernales River floodplain regulations</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Hospitality Development</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Advised on boutique hotel and resort projects ranging from 30-100 keys</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Operator procurement and brand positioning strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Financial modeling and capital stack structuring for hospitality assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Design coordination and construction oversight experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why HSG */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-xl p-8">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Why Houston Strategy Group?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hill Country resort development requires specialized knowledge of local regulatory frameworks, environmental constraints, and market dynamics. HSG brings a proven track record of successfully navigating these complexities while maintaining project timelines and budgets.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our phased engagement structure allows developers to de-risk the project incrementally, with clear go/no-go decision points at each stage. This approach has consistently delivered successful outcomes for our clients while minimizing exposure to regulatory uncertainty.
          </p>
        </div>
      </div>
    </section>
  );
}
