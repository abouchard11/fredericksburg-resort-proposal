import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, QrCode, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
          
          {/* Contact Info & QR */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground">
                Ready to move forward? Contact our team to schedule a detailed walkthrough of the proposal.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email Us</div>
                  <a href="mailto:permitting@houstonstrategy.net" className="text-muted-foreground hover:text-primary transition-colors">permitting@houstonstrategy.net</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Call Us</div>
                  <a href="tel:+15125550123" className="text-muted-foreground hover:text-primary transition-colors">(512) 555-0123</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Office</div>
                  <p className="text-muted-foreground">Fredericksburg, Texas</p>
                </div>
              </div>
            </div>

            <Card className="bg-white border-none shadow-xl overflow-hidden max-w-sm">
              <CardContent className="p-0 flex">
                <div className="bg-primary p-6 flex items-center justify-center">
                  <QrCode className="h-16 w-16 text-white" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="font-serif font-bold text-lg text-primary mb-1">Scan to Visit</div>
                  <div className="text-sm text-muted-foreground">houstonstrategy.net</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-panel border-t-4 border-t-accent">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">First name</label>
                    <Input id="first-name" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">Last name</label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" placeholder="I'm interested in discussing the proposal..." className="min-h-[120px]" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </Layout>
  );
}
