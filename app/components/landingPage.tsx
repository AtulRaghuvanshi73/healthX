"use client"

import Link from "next/link";
import { CalendarClock, Shield, Users, ArrowRight, CheckCircle2, Clock, Calendar, Laptop, Star, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/components/ui/command";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [open, setOpen] = useState(false);

  // Handle keyboard shortcut to open search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Dummy search items
  const searchItems = [
    {
      group: "Services",
      items: [
        { name: "Book Appointment", href: "#" },
        { name: "Virtual Consultation", href: "#" },
        { name: "Find a Doctor", href: "#" },
        { name: "Medication Refill", href: "#" },
      ]
    },
    {
      group: "Support",
      items: [
        { name: "Contact Support", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Insurance Information", href: "#" },
      ]
    },
    {
      group: "Resources",
      items: [
        { name: "Health Blog", href: "#" },
        { name: "Patient Portal", href: "#" },
        { name: "Medical Records", href: "#" },
        { name: "Prescription Guide", href: "#" },
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Search Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search across HealthX..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchItems.map((group) => (
            <CommandGroup key={group.group} heading={group.group}>
              {group.items.map((item) => (
                <CommandItem key={item.name} onSelect={() => {
                  setOpen(false);
                  // You would typically navigate to the href in a real implementation
                }}>
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Need help?">
            <CommandItem onSelect={() => {
              setOpen(false);
              // Navigate to help page or open chat support
            }}>
              Contact our Healthcare Support Team
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      {/* Navbar - Reorganized */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur border-b bg-white/80 shadow-sm">
        <div className="container px-4 md:px-6 h-16 flex items-center">
          <div className="flex items-center gap-2 mr-6">
            <CalendarClock className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight text-primary">HealthX</span>
          </div>
          <div className="hidden md:flex items-center gap-6 mr-auto">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex items-center gap-2 text-sm"
              onClick={() => setOpen(true)}
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm">Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden"
              onClick={() => setOpen(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - With Image on Right */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 border-b">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 w-fit">
                Trusted by 500+ Healthcare Providers
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Modern Healthcare Scheduling Solution
              </h1>
              <p className="text-xl text-slate-600 max-w-xl">
                Streamline appointments, reduce no-shows, and improve patient satisfaction with our AI-powered scheduling platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="gap-1 shadow-lg">
                  Get Started <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Book a Demo
                </Button>
              </div>
              <div className="flex flex-wrap items-start gap-6 text-sm mt-4">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">Easy Integration</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80"
                  alt="Healthcare Professional using HealthX"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Centered */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Powerful Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Everything you need to streamline healthcare
              </h2>
              <p className="text-xl text-slate-600 mx-auto">
                Our platform offers comprehensive tools designed specifically for healthcare providers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Smart Scheduling</CardTitle>
                <CardDescription>
                  Intelligent appointment booking that optimizes your calendar automatically.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Our AI algorithms ensure optimal schedule distribution, reducing wait times and maximizing provider efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Enhanced Security</CardTitle>
                <CardDescription>
                  HIPAA-compliant platform that keeps patient data safe and secure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  End-to-end encryption and secure authentication ensure patient information is always protected.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Automated Reminders</CardTitle>
                <CardDescription>
                  Reduce no-shows with intelligent notification system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Customizable SMS, email, and push notifications to keep patients informed and on time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Centered */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Trusted by healthcare professionals
              </h2>
              <p className="text-xl text-slate-600 mx-auto">
                See what our clients have to say about HealthX.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base text-slate-700">
                  "HealthX has transformed our practice. Patient no-shows have decreased by 60% since we started using the platform."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-medium text-primary">DR</span>
                  </div>
                  <div>
                    <p className="font-medium">Dr. Rebecca Johnson</p>
                    <p className="text-sm text-slate-500">Family Medicine Practice</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base text-slate-700">
                  "The integration with our EHR system was seamless. The support team at HealthX has been incredibly responsive."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-medium text-primary">MT</span>
                  </div>
                  <div>
                    <p className="font-medium">Mark Thompson</p>
                    <p className="text-sm text-slate-500">IT Director, City Medical Center</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base text-slate-700">
                  "Our patients love being able to book and manage appointments online. It's made everyone's life easier."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-medium text-primary">SL</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Lopez</p>
                    <p className="text-sm text-slate-500">Practice Manager, Wellness Clinic</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section - Centered */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-slate-600 mx-auto">
                Choose a plan that works for your practice
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-0 shadow-lg flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">₹499</span>
                  <span className="text-slate-500 ml-1">/month</span>
                </div>
                <CardDescription className="mt-2">
                  Perfect for small practices
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  {["Up to 2 providers", "500 appointments/month", "Email reminders", "Basic analytics", "8/5 support"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            
            {/* Professional Plan */}
            <Card className="border-2 border-primary shadow-lg flex flex-col relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Professional</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">₹2000</span>
                  <span className="text-slate-500 ml-1">/month</span>
                </div>
                <CardDescription className="mt-2">
                  For growing medical practices
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  {["Up to 5 providers", "2000 appointments/month", "SMS & email reminders", "Advanced analytics", "EHR integration", "24/7 support"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            
            {/* Enterprise Plan - Fixed the missing closing tag */}
            <Card className="border-0 shadow-lg flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">₹10000</span>
                  <span className="text-slate-500 ml-1">/month</span>
                </div>
                <CardDescription className="mt-2">
                  For large healthcare organizations
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  {["Unlimited providers", "Unlimited appointments", "Custom integrations", "Priority support", "Dedicated account manager", "Custom branding"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Centered */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to transform your practice?
            </h2>
            <p className="text-lg text-white/80 max-w-[700px] md:text-xl/relaxed">
              Join thousands of healthcare providers who trust HealthX to streamline their scheduling
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button size="lg" variant="secondary">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Centered */}
      <footer className="w-full py-6 bg-slate-900 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CalendarClock className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">HealthX</span>
              </div>
              <p className="text-sm text-slate-400">
                Making healthcare scheduling simple and efficient.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Product</h3>
              <ul className="space-y-2">
                {["Features", "Integrations", "Pricing", "FAQ"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Company</h3>
              <ul className="space-y-2">
                {["About", "Careers", "Blog", "Legal"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Connect</h3>
              <ul className="space-y-2">
                {["Contact", "Twitter", "LinkedIn", "Facebook"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 max-w-5xl mx-auto">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} HealthX. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-xs text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-slate-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
