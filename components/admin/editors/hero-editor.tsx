"use client";

import { useState, useEffect } from "react";
import { Save, Upload, ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface HeroEditorProps {
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

export function HeroEditor({ onSave }: HeroEditorProps) {
  const [headline, setHeadline] = useState("Integrated Supply Service");
  const [subheadline, setSubheadline] = useState("Committed to supporting your business with high-quality food ingredients");
  const [ctaText, setCtaText] = useState("Explore Our Products");
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ipj_hero");
    if (saved) {
      const data = JSON.parse(saved);
      setHeadline(data.headline || headline);
      setSubheadline(data.subheadline || subheadline);
      setCtaText(data.ctaText || ctaText);
    }
    setHasImage(!!localStorage.getItem("ipj_hero_image"));
  }, []);

  const handleSave = () => {
    localStorage.setItem("ipj_hero", JSON.stringify({ headline, subheadline, ctaText }));
    onSave("Hero section saved successfully!", "success");
  };

  return (
    <div className="max-w-2xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-brand-green text-xl">Edit Hero Section</CardTitle>
          <CardDescription className="font-body">Customize the main banner that visitors see first</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Headline */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-body font-semibold">
              Headline
              <FieldTooltip text="Main title displayed on the hero banner. Keep it short and impactful." />
            </Label>
            <Input
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="Enter headline..."
              className="font-body"
            />
            <p className="text-xs text-muted-foreground font-body">The big title visitors see first when they visit your website</p>
          </div>

          {/* Subheadline */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-body font-semibold">
              Subheadline
              <FieldTooltip text="Supporting text below the headline that provides more context." />
            </Label>
            <Textarea
              value={subheadline}
              onChange={(e) => setSubheadline(e.target.value)}
              rows={3}
              placeholder="Enter subheadline..."
              className="font-body resize-none"
            />
            <p className="text-xs text-muted-foreground font-body">A brief description that appears below the main title</p>
          </div>

          {/* CTA Button Text */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-body font-semibold">
              CTA Button Text
              <FieldTooltip text="Text on the main action button. This is the orange button on the hero." />
            </Label>
            <Input
              value={ctaText}
              onChange={(e) => setCtaText(e.target.value)}
              placeholder="Enter button text..."
              className="font-body"
            />
            <p className="text-xs text-muted-foreground font-body">The orange call-to-action button text</p>
          </div>

          <Separator />

          {/* Hero Image Upload */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-body font-semibold">
              Hero Background Image
              <FieldTooltip text="Background image for the hero section. Recommended size: 1920x1080px." />
            </Label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-brand-green/30 transition-colors bg-gray-50/50">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                      localStorage.setItem("ipj_hero_image", reader.result as string);
                      setHasImage(true);
                      onSave("Hero image uploaded!", "success");
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
                id="hero-image-upload"
              />
              <label htmlFor="hero-image-upload" className="cursor-pointer">
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-gray-100 flex items-center justify-center">
                  <ImageIcon className="w-7 h-7 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground font-body font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-muted-foreground/70 font-body mt-1">
                  PNG, JPG, WebP up to 5MB
                </p>
                {hasImage && (
                  <p className="text-xs text-brand-green font-body mt-2 font-medium">
                    ✓ Image uploaded
                  </p>
                )}
              </label>
            </div>
          </div>

          <Separator />

          {/* Save Button */}
          <Button onClick={handleSave} className="bg-brand-green hover:bg-brand-green-light font-body shadow-lg shadow-brand-green/20">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
