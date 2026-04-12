"use client";

import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface CoreValuesEditorProps {
  onSave: (message: string, type: "success" | "error") => void;
}

const defaultValues = [
  { title: "Innovation", description: "Continuously seeking new and better solutions" },
  { title: "Quality First", description: "Ensuring the highest standards in every product" },
  { title: "Sustainability", description: "Committed to environmentally responsible practices" },
  { title: "Integrity", description: "Conducting business with honesty and transparency" },
  { title: "Customer Focus", description: "Prioritizing client satisfaction and needs" },
  { title: "Team Work", description: "Collaborating to achieve shared goals" },
];

export function CoreValuesEditor({ onSave }: CoreValuesEditorProps) {
  const [values, setValues] = useState(defaultValues);

  useEffect(() => {
    const saved = localStorage.getItem("ipj_core_values");
    if (saved) {
      setValues(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("ipj_core_values", JSON.stringify(values));
    onSave("Core values saved successfully!", "success");
  };

  const updateValue = (index: number, field: "title" | "description", value: string) => {
    const updated = [...values];
    updated[index] = { ...updated[index], [field]: value };
    setValues(updated);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-brand-green text-xl">Edit Core Values</CardTitle>
          <CardDescription className="font-body">Edit the 6 core value cards displayed on the website</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((val, i) => (
              <Card key={i} className="bg-gray-50/50 border-gray-100 shadow-none">
                <CardContent className="p-4 space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                    <Badge variant="secondary" className="bg-brand-green/10 text-brand-green font-body font-bold rounded-lg w-8 h-8 flex items-center justify-center p-0">
                      {i + 1}
                    </Badge>
                    <span className="text-xs font-semibold text-muted-foreground font-body">Value Card {i + 1}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Title</Label>
                    <Input
                      type="text"
                      value={val.title}
                      onChange={(e) => updateValue(i, "title", e.target.value)}
                      className="font-body bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Description</Label>
                    <Textarea
                      value={val.description}
                      onChange={(e) => updateValue(i, "description", e.target.value)}
                      rows={2}
                      className="font-body bg-white resize-none"
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
