"use client";

import { useState, useRef } from "react";
import { Save, Download, Upload, Lock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SettingsEditorProps {
  onSave: (message: string, type: "success" | "error") => void;
}

export function SettingsEditor({ onSave }: SettingsEditorProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChangePassword = () => {
    const savedPassword = localStorage.getItem("ipj_admin_password") || "admin123";
    if (currentPassword !== savedPassword) {
      onSave("Current password is incorrect", "error");
      return;
    }
    if (newPassword.length < 6) {
      onSave("New password must be at least 6 characters", "error");
      return;
    }
    if (newPassword !== confirmPassword) {
      onSave("Passwords do not match", "error");
      return;
    }
    localStorage.setItem("ipj_admin_password", newPassword);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    onSave("Password changed successfully!", "success");
  };

  const handleExport = () => {
    const data: Record<string, string | null> = {};
    const keys = [
      "ipj_hero", "ipj_about", "ipj_vision_mission", "ipj_core_values",
      "ipj_products", "ipj_applications", "ipj_advantages", "ipj_clients", "ipj_contact"
    ];
    keys.forEach((key) => {
      data[key] = localStorage.getItem(key);
    });

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ipj-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    onSave("Data exported successfully!", "success");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        Object.entries(data).forEach(([key, value]) => {
          if (value !== null) {
            localStorage.setItem(key, value as string);
          }
        });
        onSave("Data imported successfully! Refresh to see changes.", "success");
      } catch {
        onSave("Invalid JSON file", "error");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="max-w-2xl space-y-6">
      {/* Change Password */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0">
            <Lock className="w-5 h-5 text-brand-green" />
          </div>
          <div>
            <CardTitle className="text-xl text-brand-green font-heading">Change Password</CardTitle>
            <CardDescription className="font-body">Update your admin login password</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="font-body font-semibold">Current Password</Label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="font-body bg-gray-50/50"
                placeholder="Enter current password..."
              />
            </div>
            <div className="space-y-2">
              <Label className="font-body font-semibold">New Password</Label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="font-body bg-gray-50/50"
                placeholder="Enter new password (min 6 characters)..."
              />
            </div>
            <div className="space-y-2">
              <Label className="font-body font-semibold">Confirm New Password</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="font-body bg-gray-50/50"
                placeholder="Re-enter new password..."
              />
            </div>
          </div>

          <Button
            onClick={handleChangePassword}
            className="bg-brand-green hover:bg-brand-green-light font-body shadow-lg shadow-brand-green/20"
          >
            <Save className="w-4 h-4 mr-2" />
            Update Password
          </Button>
        </CardContent>
      </Card>

      {/* Export/Import */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-brand-saffron/10 flex items-center justify-center shrink-0">
            <Download className="w-5 h-5 text-brand-saffron" />
          </div>
          <div>
            <CardTitle className="text-xl text-brand-green font-heading">Backup & Restore</CardTitle>
            <CardDescription className="font-body">Export or import your website content data</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Button
              onClick={handleExport}
              variant="outline"
              className="h-12 border-brand-green/20 text-brand-green hover:bg-brand-green/5 font-body"
            >
              <Download className="w-4 h-4 mr-2" />
              Export as JSON
            </Button>

            <div>
              <input
                type="file"
                ref={fileInputRef}
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="w-full h-12 border-brand-saffron/20 text-brand-saffron hover:bg-brand-saffron/5 font-body"
              >
                <Upload className="w-4 h-4 mr-2" />
                Import JSON
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
            <p className="text-sm text-amber-900 font-body">
              <strong>Warning:</strong> Importing data will immediately overwrite your current content. Make sure to export a backup first.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
