"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2, HelpCircle, ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";

interface VisionMissionEditorProps {
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

export function VisionMissionEditor({ onSave }: VisionMissionEditorProps) {
  const [vision, setVision] = useState(
    "To become a leading and trusted food ingredient supplier in Indonesia, known for quality, innovation, and reliability."
  );
  const [missions, setMissions] = useState([
    "Provide high-quality food ingredients at competitive prices",
    "Build long-term partnerships based on trust and mutual growth",
    "Continuously innovate to meet evolving market demands",
    "Ensure consistent supply chain and timely delivery",
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("ipj_vision_mission");
    if (saved) {
      const data = JSON.parse(saved);
      setVision(data.vision || vision);
      setMissions(data.missions || missions);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("ipj_vision_mission", JSON.stringify({ vision, missions }));
    onSave("Vision & Mission saved successfully!", "success");
  };

  const addMission = () => {
    setMissions([...missions, ""]);
  };

  const removeMission = (index: number) => {
    setMissions(missions.filter((_, i) => i !== index));
  };

  const updateMission = (index: number, value: string) => {
    const updated = [...missions];
    updated[index] = value;
    setMissions(updated);
  };

  const moveMission = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= missions.length) return;
    const updated = [...missions];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    setMissions(updated);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-brand-green text-xl">Edit Vision & Mission</CardTitle>
          <CardDescription className="font-body">Define your company&apos;s core purpose and goals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Vision */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2 font-body font-semibold">
              Vision Statement
              <FieldTooltip text="The company's long-term aspirational goal" />
            </Label>
            <Textarea
              value={vision}
              onChange={(e) => setVision(e.target.value)}
              rows={3}
              placeholder="Enter vision statement..."
              className="font-body resize-none"
            />
            <p className="text-xs text-muted-foreground font-body">What the company aspires to become</p>
          </div>

          <Separator />

          {/* Missions */}
          <div className="space-y-4">
            <Label className="flex items-center gap-2 font-body font-semibold">
              Mission Points
              <FieldTooltip text="Key action statements for the company" />
            </Label>
            
            <div className="space-y-3">
              {missions.map((mission, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex flex-col gap-0.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 rounded-sm"
                      onClick={() => moveMission(i, "up")}
                      disabled={i === 0}
                      title="Move Up"
                    >
                      <ArrowUp className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-5 w-5 rounded-sm"
                      onClick={() => moveMission(i, "down")}
                      disabled={i === missions.length - 1}
                      title="Move Down"
                    >
                      <ArrowDown className="w-3 h-3" />
                    </Button>
                  </div>
                  <Input
                    type="text"
                    value={mission}
                    onChange={(e) => updateMission(i, e.target.value)}
                    className="font-body"
                    placeholder={`Mission point ${i + 1}`}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeMission(i)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={addMission}
              className="mt-2 text-brand-green border-brand-green/20 hover:bg-brand-green/5 font-body"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Mission Point
            </Button>
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
