"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface ApplicationsEditorProps {
  onSave: (message: string, type: "success" | "error") => void;
}

const defaultApplications = [
  "Bakery Industry",
  "Snack Production",
  "Dairy Products",
  "Beverage Industry",
  "Confectionery",
];

export function ApplicationsEditor({ onSave }: ApplicationsEditorProps) {
  const [applications, setApplications] = useState(defaultApplications);

  useEffect(() => {
    const saved = localStorage.getItem("ipj_applications");
    if (saved) {
      setApplications(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("ipj_applications", JSON.stringify(applications));
    onSave("Applications saved successfully!", "success");
  };

  const addApplication = () => {
    setApplications([...applications, ""]);
  };

  const removeApplication = (index: number) => {
    if (applications.length <= 1) {
      onSave("You must have at least one application", "error");
      return;
    }
    setApplications(applications.filter((_, i) => i !== index));
  };

  const updateApplication = (index: number, value: string) => {
    const updated = [...applications];
    updated[index] = value;
    setApplications(updated);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="font-heading text-brand-green text-xl">Edit Applications</CardTitle>
            <CardDescription className="font-body">Manage the industry applications list</CardDescription>
          </div>
          <Button
            onClick={addApplication}
            variant="outline"
            className="text-brand-green border-brand-green/20 hover:bg-brand-green/5 font-body shrink-0"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Application
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            {applications.map((app, i) => (
              <div key={i} className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-brand-green/10 text-brand-green font-body font-bold rounded-lg w-8 h-8 flex items-center justify-center p-0 shrink-0">
                  {i + 1}
                </Badge>
                <Input
                  type="text"
                  value={app}
                  onChange={(e) => updateApplication(i, e.target.value)}
                  className="font-body"
                  placeholder="Enter application name..."
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeApplication(i)}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
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
