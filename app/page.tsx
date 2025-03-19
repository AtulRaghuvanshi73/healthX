import Link from "next/link";
import { CalendarClock, Shield, Users, ArrowRight, CheckCircle2, Clock, Calendar, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="w-full py-4 bg-white shadow-md">
        <div className="container px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CalendarClock className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">HealthX</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-slate-500 hover:text-primary">
              Features
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-primary">
              Pricing
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                  Streamline Healthcare Scheduling with HealthX
                </h1>
                <p className="max-w-[600px] text-slate-500 md:text-xl">
                  Automate appointment booking, reduce no-shows, and improve patient satisfaction with our intelligent scheduling platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Book a Demo
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Easy Integration</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg?height=500&width=800"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
