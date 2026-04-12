"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2, ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface ClientsEditorProps {
  onSave: (message: string, type: "success" | "error") => void;
}

const defaultPartners = [
  { name: "Partner Company A" },
  { name: "Partner Company B" },
  { name: "Partner Company C" },
  { name: "Partner Company D" },
];

export function ClientsEditor({ onSave }: ClientsEditorProps) {
  const [partners, setPartners] = useState(defaultPartners);
  const [imageUploadStatus, setImageUploadStatus] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem("ipj_partners");
    let currentPartners = defaultPartners;
    if (saved) {
      currentPartners = JSON.parse(saved);
      setPartners(currentPartners);
    } else {
      // If no ipj_partners, we set it up
      setPartners(defaultPartners);
    }
    
    // Check initial image status
    const status: Record<number, boolean> = {};
    for (let i = 0; i < currentPartners.length; i++) {
        status[i] = !!localStorage.getItem(`ipj_client_logo_${i}`);
    }
    setImageUploadStatus(status);
  }, []);

  const handleSave = () => {
    localStorage.setItem("ipj_partners", JSON.stringify(partners));
    onSave("Partner companies saved successfully!", "success");
  };

  const addPartner = () => {
    setPartners([...partners, { name: "" }]);
  };

  const removePartner = (index: number) => {
    if (partners.length <= 1) {
      onSave("You must have at least one partner company", "error");
      return;
    }
    setPartners(partners.filter((_, i) => i !== index));
  };

  const updatePartner = (index: number, value: string) => {
    const updated = [...partners];
    updated[index] = { name: value };
    setPartners(updated);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="font-heading text-brand-green text-xl">Edit Partner Companies</CardTitle>
            <CardDescription className="font-body">Manage the partner company logos shown on the website</CardDescription>
          </div>
          <Button
            onClick={addPartner}
            variant="outline"
            className="text-brand-saffron border-brand-saffron/20 hover:bg-brand-saffron/5 font-body shrink-0"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Partner
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {partners.map((partner, i) => (
              <Card key={i} className="bg-gray-50/50 border-gray-100 shadow-none">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-brand-green font-body">Partner {i + 1}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removePartner(i)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 h-8 w-8 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Company Name</Label>
                    <Input
                      type="text"
                      value={partner.name}
                      onChange={(e) => updatePartner(i, e.target.value)}
                      className="font-body bg-white"
                      placeholder="Enter company name..."
                    />
                  </div>

                  {/* Logo Upload */}
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Company Logo</Label>
                    <div className="border border-dashed border-gray-200 rounded-lg p-5 text-center hover:border-brand-green/30 transition-colors bg-white">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = () => {
                              localStorage.setItem(`ipj_client_logo_${i}`, reader.result as string);
                              setImageUploadStatus(prev => ({...prev, [i]: true}));
                              onSave(`Partner ${i + 1} logo uploaded!`, "success");
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="hidden"
                        id={`client-logo-${i}`}
                      />
                      <label htmlFor={`client-logo-${i}`} className="cursor-pointer flex flex-col items-center">
                        <ImageIcon className="w-6 h-6 text-muted-foreground/50 mb-2" />
                        <span className="text-xs text-muted-foreground font-body font-medium">Click to upload logo</span>
                        {imageUploadStatus[i] && (
                            <span className="text-xs text-brand-green font-body font-medium mt-1.5 px-2 py-0.5 bg-brand-green/10 rounded-full">
                                Logo uploaded
                            </span>
                        )}
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-muted-foreground font-body">
            💡 These appear as logos in the &ldquo;Clients &amp; Partners&rdquo; section
          </p>

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
