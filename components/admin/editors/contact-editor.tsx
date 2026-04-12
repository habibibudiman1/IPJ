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

interface ContactEditorProps {
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

export function ContactEditor({ onSave }: ContactEditorProps) {
  const [companyName, setCompanyName] = useState("PT. Intiboga Pangan Jaya");
  const [address, setAddress] = useState("Surabaya, East Java, Indonesia");
  const [email, setEmail] = useState("info@intiboga.com");
  const [phone, setPhone] = useState("+62 813 6119 6131");

  useEffect(() => {
    const saved = localStorage.getItem("ipj_contact");
    if (saved) {
      const data = JSON.parse(saved);
      setCompanyName(data.companyName || companyName);
      setAddress(data.address || address);
      setEmail(data.email || email);
      setPhone(data.phone || phone);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("ipj_contact", JSON.stringify({ companyName, address, email, phone }));
    onSave("Contact info saved successfully!", "success");
  };

  return (
    <div className="max-w-2xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-brand-green text-xl">Edit Contact Information</CardTitle>
          <CardDescription className="font-body">This information appears in the footer and contact section</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-5">
            <div className="space-y-2">
              <Label className="flex items-center gap-2 font-body font-semibold">
                Company Name
                <FieldTooltip text="Official company name shown in footer" />
              </Label>
              <Input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="font-body bg-gray-50/50"
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 font-body font-semibold">
                Address
                <FieldTooltip text="Office address shown in the footer" />
              </Label>
              <Textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={2}
                className="font-body bg-gray-50/50 resize-none"
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 font-body font-semibold">
                Email Address
                <FieldTooltip text="Contact email for inquiries" />
              </Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-body bg-gray-50/50"
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2 font-body font-semibold">
                Phone Number
                <FieldTooltip text="Contact phone number" />
              </Label>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="font-body bg-gray-50/50"
              />
            </div>
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
