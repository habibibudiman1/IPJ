"use client";

import { useState, useEffect } from "react";
import { Save, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";

interface AboutEditorProps {
  onSave: (message: string, type: "success" | "error") => void;
}

function FieldTooltip({ text }: { text: string }) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-[220px] font-body text-xs">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function AboutEditor({ onSave }: AboutEditorProps) {
  const [description, setDescription] = useState(
    "PT. Intiboga Pangan Jaya is a trusted supplier of food ingredients, operating from Surabaya, East Java, Indonesia. We are committed to supporting our clients across various food industries by providing high-quality ingredients, including Potato Flakes, Glucose Syrup, and other essential materials."
  );

  const [stats, setStats] = useState({
    location: "Surabaya, East Java",
    industry: "Food Ingredients Supplier",
    focus: "B2B / Industrial Supply",
  });

  useEffect(() => {
    const saved = localStorage.getItem("ipj_about");
    if (saved) {
      const data = JSON.parse(saved);
      setDescription(data.description || description);
      setStats(data.stats || stats);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("ipj_about", JSON.stringify({ description, stats }));
    onSave("About Us section saved successfully!", "success");
  };

  return (
    <div className="max-w-3xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-brand-green text-xl">Edit About Us</CardTitle>
          <CardDescription className="font-body">Manage company description and statistics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-body font-semibold">
              Company Description
              <FieldTooltip text="The main paragraph introducing your company." />
            </Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Enter company description..."
              className="font-body resize-none"
            />
            <p className="text-xs text-muted-foreground font-body">Maximum recommended length: 300 characters</p>
          </div>

          <Separator />
          
          <div className="space-y-4">
            <Label className="flex items-center gap-2 font-body font-semibold">
              Company Facts / Stats
              <FieldTooltip text="Short bullet points that highlight key information about the company." />
            </Label>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground font-body">Location</Label>
                <Input
                  value={stats.location}
                  onChange={(e) => setStats({ ...stats, location: e.target.value })}
                  placeholder="e.g., Surabaya"
                  className="font-body"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground font-body">Industry</Label>
                <Input
                  value={stats.industry}
                  onChange={(e) => setStats({ ...stats, industry: e.target.value })}
                  placeholder="e.g., Food Ingredients"
                  className="font-body"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground font-body">Focus Area</Label>
                <Input
                  value={stats.focus}
                  onChange={(e) => setStats({ ...stats, focus: e.target.value })}
                  placeholder="e.g., B2B Supply"
                  className="font-body"
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground font-body mt-2">These appear as three small info cards</p>
          </div>

          <Separator />

          <Button onClick={handleSave} className="bg-brand-green hover:bg-brand-green-light font-body shadow-lg shadow-brand-green/20">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
