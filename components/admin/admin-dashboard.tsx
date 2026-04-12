"use client";

import { useState, useEffect, useCallback } from "react";
import NextImage from "next/image";
import {
  LayoutDashboard, Image, FileText, Eye, Heart, Package,
  Factory, Trophy, Users, Phone, Settings, LogOut, Menu,
  X, ChevronRight, ExternalLink, TrendingUp, FileEdit, Clock,
} from "lucide-react";
import { HeroEditor } from "./editors/hero-editor";
import { AboutEditor } from "./editors/about-editor";
import { VisionMissionEditor } from "./editors/vision-mission-editor";
import { CoreValuesEditor } from "./editors/core-values-editor";
import { ProductsEditor } from "./editors/products-editor";
import { ApplicationsEditor } from "./editors/applications-editor";
import { AdvantagesEditor } from "./editors/advantages-editor";
import { ClientsEditor } from "./editors/clients-editor";
import { ContactEditor } from "./editors/contact-editor";
import { SettingsEditor } from "./editors/settings-editor";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", group: "main" },
  { id: "hero", icon: Image, label: "Hero Section", group: "content" },
  { id: "about", icon: FileText, label: "About Us", group: "content" },
  { id: "vision", icon: Eye, label: "Vision & Mission", group: "content" },
  { id: "values", icon: Heart, label: "Core Values", group: "content" },
  { id: "products", icon: Package, label: "Products", group: "content" },
  { id: "applications", icon: Factory, label: "Applications", group: "content" },
  { id: "advantages", icon: Trophy, label: "Advantages", group: "content" },
  { id: "clients", icon: Users, label: "Clients", group: "content" },
  { id: "contact", icon: Phone, label: "Contact Info", group: "settings" },
  { id: "settings", icon: Settings, label: "Settings", group: "settings" },
];

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();

  const showToast = useCallback((message: string, type: "success" | "error" = "success") => {
    toast({
      title: type === "success" ? "Success" : "Error",
      description: message,
      variant: type === "success" ? "success" : "destructive",
    });
  }, [toast]);

  const quickLinks = [
    { id: "hero", label: "Hero Section", desc: "Edit banner & headlines", icon: Image, color: "bg-blue-500" },
    { id: "products", label: "Products", desc: "Manage product cards", icon: Package, color: "bg-emerald-500" },
    { id: "about", label: "About Us", desc: "Company description", icon: FileText, color: "bg-violet-500" },
    { id: "contact", label: "Contact Info", desc: "Update contact details", icon: Phone, color: "bg-amber-500" },
    { id: "values", label: "Core Values", desc: "Edit company values", icon: Heart, color: "bg-rose-500" },
    { id: "settings", label: "Settings", desc: "Backup & password", icon: Settings, color: "bg-slate-500" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-8">
            {/* Welcome Banner */}
            <Card className="border-0 bg-gradient-to-br from-brand-green via-brand-green-light to-brand-green shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-20 w-32 h-32 bg-brand-saffron/10 rounded-full translate-y-1/2" />
              <CardHeader className="relative z-10 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 font-body text-xs">
                    Admin Panel
                  </Badge>
                  <Badge variant="secondary" className="bg-brand-saffron/30 text-white border-0 font-body text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    <span suppressHydrationWarning>
                      {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </Badge>
                </div>
                <CardTitle className="text-2xl lg:text-3xl text-white font-heading">
                  Welcome back! 👋
                </CardTitle>
                <CardDescription className="text-white/70 font-body text-base">
                  Manage your website content easily. All changes are saved to your browser automatically.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-0 pb-6">
                <div className="flex flex-wrap gap-3 mt-2">
                  <Button
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white border-0 font-body"
                    asChild
                  >
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Preview Website
                    </a>
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-brand-saffron/30 hover:bg-brand-saffron/40 text-white border-0 font-body"
                    onClick={() => setActiveSection("hero")}
                  >
                    <FileEdit className="w-4 h-4 mr-2" />
                    Start Editing
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Editable Sections", value: "11", icon: FileEdit, color: "text-brand-green" },
                { label: "Product Cards", value: "3", icon: Package, color: "text-brand-saffron" },
                { label: "Core Values", value: "6", icon: Heart, color: "text-rose-500" },
                { label: "Data Status", value: "Synced", icon: TrendingUp, color: "text-emerald-500" },
              ].map((stat, i) => (
                <Card key={i} className="border-gray-100/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-lg font-bold font-heading text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-lg font-bold text-brand-green font-heading mb-4 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-brand-saffron" />
                Quick Actions
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickLinks.map((link) => (
                  <Card
                    key={link.id}
                    className="border-gray-100/50 hover:shadow-lg hover:border-brand-green/20 transition-all duration-300 cursor-pointer group"
                    onClick={() => setActiveSection(link.id)}
                  >
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl ${link.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                        <link.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground font-body truncate">
                          {link.label}
                        </p>
                        <p className="text-xs text-muted-foreground font-body mt-0.5">
                          {link.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Content Completion */}
            <Card className="border-gray-100/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-heading text-brand-green">Content Completion</CardTitle>
                <CardDescription className="font-body">How much of your website content has been customized</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { label: "Hero Section", progress: 100 },
                    { label: "Products", progress: 100 },
                    { label: "About Us", progress: 80 },
                    { label: "Contact Info", progress: 60 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-sm font-medium text-foreground font-body w-28 shrink-0">{item.label}</span>
                      <Progress value={item.progress} className="h-2 flex-1" />
                      <span className="text-xs font-medium text-muted-foreground font-body w-10 text-right">{item.progress}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case "hero": return <HeroEditor onSave={showToast} />;
      case "about": return <AboutEditor onSave={showToast} />;
      case "vision": return <VisionMissionEditor onSave={showToast} />;
      case "values": return <CoreValuesEditor onSave={showToast} />;
      case "products": return <ProductsEditor onSave={showToast} />;
      case "applications": return <ApplicationsEditor onSave={showToast} />;
      case "advantages": return <AdvantagesEditor onSave={showToast} />;
      case "clients": return <ClientsEditor onSave={showToast} />;
      case "contact": return <ContactEditor onSave={showToast} />;
      case "settings": return <SettingsEditor onSave={showToast} />;
      default: return null;
    }
  };

  const mainGroup = menuItems.filter(i => i.group === "main");
  const contentGroup = menuItems.filter(i => i.group === "content");
  const settingsGroup = menuItems.filter(i => i.group === "settings");

  const renderMenuItems = (items: typeof menuItems) =>
    items.map((item) => (
      <TooltipProvider key={item.id} delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-body transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-brand-green text-white font-semibold shadow-lg shadow-brand-green/20"
                  : "text-gray-500 hover:bg-gray-50 hover:text-brand-green"
              }`}
            >
              <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="truncate">{item.label}</span>
              {activeSection === item.id && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white/70" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-body">
            <p>Edit {item.label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ));

  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[260px] bg-white border-r border-gray-100 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <NextImage
                  src="/images/logoIPJ.png"
                  alt="IPJ Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-sm font-bold text-brand-green block font-body tracking-wide">INTIBOGA</span>
                <span className="text-[10px] text-muted-foreground block font-body">Admin Panel</span>
              </div>
            </div>
            <button
              className="lg:hidden text-gray-400 hover:text-gray-600 p-1"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Menu */}
        <ScrollArea className="flex-1">
          <nav className="p-3 space-y-1">
            {/* Main */}
            {renderMenuItems(mainGroup)}

            <Separator className="my-3" />
            <p className="px-3 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider font-body">
              Content
            </p>
            {renderMenuItems(contentGroup)}

            <Separator className="my-3" />
            <p className="px-3 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider font-body">
              System
            </p>
            {renderMenuItems(settingsGroup)}
          </nav>
        </ScrollArea>

        {/* Logout */}
        <div className="p-3 border-t border-gray-100">
          <Button
            variant="ghost"
            onClick={onLogout}
            className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50 font-body"
          >
            <LogOut className="w-[18px] h-[18px]" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        {/* Top Bar */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 lg:px-8 py-3 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-brand-green font-heading">
                {menuItems.find((i) => i.id === activeSection)?.label || "Dashboard"}
              </h1>
              <p className="text-xs text-muted-foreground font-body hidden sm:block">
                {activeSection === "dashboard" ? "Overview & quick actions" : "Edit and save your changes"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="success" className="hidden sm:flex font-body text-xs">
              ● Auto-save on
            </Badge>
            <Button
              variant="outline"
              size="sm"
              className="font-body"
              asChild
            >
              <a href="/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">View Site</span>
              </a>
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {renderContent()}
        </main>
      </div>

      <Toaster />
    </div>
  );
}
