"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface AdvantagesEditorProps {
  onSave: (message: string, type: "success" | "error") => void;
}

const defaultAdvantages = [
  { title: "Custom Solutions", description: "Tailored products to meet specific client requirements" },
  { title: "Local Expertise", description: "Deep understanding of the Indonesian food market" },
  { title: "Strategic Location", description: "Based in Surabaya with access to major logistics networks" },
  { title: "Quality Control", description: "Strict quality assurance at every stage" },
  { title: "Reliable Supply", description: "Consistent stock availability and on-time delivery" },
];

export function AdvantagesEditor({ onSave }: AdvantagesEditorProps) {
  const [advantages, setAdvantages] = useState(defaultAdvantages);

  useEffect(() => {
    const saved = localStorage.getItem("ipj_advantages");
    if (saved) {
      setAdvantages(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("ipj_advantages", JSON.stringify(advantages));
    onSave("Advantages saved successfully!", "success");
  };

  const addAdvantage = () => {
    setAdvantages([...advantages, { title: "", description: "" }]);
  };

  const removeAdvantage = (index: number) => {
    if (advantages.length <= 1) {
      onSave("You must have at least one advantage", "error");
      return;
    }
    setAdvantages(advantages.filter((_, i) => i !== index));
  };

  const updateAdvantage = (index: number, field: "title" | "description", value: string) => {
    const updated = [...advantages];
    updated[index] = { ...updated[index], [field]: value };
    setAdvantages(updated);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="font-heading text-brand-green text-xl">Edit Advantages</CardTitle>
            <CardDescription className="font-body">Manage the &ldquo;Why Choose Us&rdquo; cards</CardDescription>
          </div>
          <Button
            onClick={addAdvantage}
            variant="outline"
            className="text-brand-green border-brand-green/20 hover:bg-brand-green/5 font-body shrink-0"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Advantage
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {advantages.map((adv, i) => (
              <Card key={i} className="bg-gray-50/50 border-gray-100 shadow-none">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                    <span className="text-sm font-bold text-brand-green font-body">Advantage {i + 1}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeAdvantage(i)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 h-8 w-8 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Title</Label>
                    <Input
                      type="text"
                      value={adv.title}
                      onChange={(e) => updateAdvantage(i, "title", e.target.value)}
                      className="font-body bg-white"
                      placeholder="Enter advantage title..."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Description</Label>
                    <Textarea
                      value={adv.description}
                      onChange={(e) => updateAdvantage(i, "description", e.target.value)}
                      rows={2}
                      className="font-body bg-white resize-none"
                      placeholder="Enter advantage description..."
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
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
