"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2, ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface ProductsEditorProps {
  onSave: (message: string, type: "success" | "error") => void;
}

const defaultProducts = [
  {
    title: "Potato Flakes",
    description: "High-quality dehydrated potato flakes, ideal for snack production, bakery fillings, and ready-to-eat food applications. Available in various specifications to meet your production needs.",
    details: [
      "Excellent texture and flavor retention",
      "Easily rehydratable",
      "Available in multiple mesh sizes",
      "Long shelf life and easy storage",
      "Consistent quality for industrial production"
    ],
    tag: "Featured"
  },
  {
    title: "Glucose Syrup",
    description: "Versatile glucose syrup suitable for confectionery, beverages, bakery, and dairy products. Provides sweetness, texture, and moisture retention.",
    details: [
      "High clarity and neutral taste",
      "Improves product texture and mouthfeel",
      "Controls crystallization and viscosity",
      "Enhances color and flavor stability",
      "Customizable DE (Dextrose Equivalent) levels"
    ],
    tag: "Premium"
  },
  {
    title: "Other Supporting Ingredients",
    description: "A range of complementary food ingredients including margarine cream and specialty items to support diverse food manufacturing needs.",
    details: [
      "Premium quality margarine and shortening",
      "Specialty cream for bakery applications",
      "Consistent melting profiles",
      "Enhances volume and structure in baked goods",
      "Tailored solutions for specific recipes"
    ],
    tag: "Specialty"
  },
];

export function ProductsEditor({ onSave }: ProductsEditorProps) {
  const [products, setProducts] = useState(defaultProducts);
  const [imageUploadStatus, setImageUploadStatus] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem("ipj_products");
    if (saved) {
      setProducts(JSON.parse(saved));
    }
    
    // Check initial image status
    const status: Record<number, boolean> = {};
    for (let i = 0; i < (saved ? JSON.parse(saved).length : defaultProducts.length); i++) {
        status[i] = !!localStorage.getItem(`ipj_product_image_${i}`);
    }
    setImageUploadStatus(status);
  }, []);

  const handleSave = () => {
    localStorage.setItem("ipj_products", JSON.stringify(products));
    onSave("Products saved successfully!", "success");
  };

  const addProduct = () => {
    setProducts([...products, { title: "", description: "", details: [], tag: "" }]);
  };

  const removeProduct = (index: number) => {
    if (products.length <= 1) {
      onSave("You must have at least one product", "error");
      return;
    }
    setProducts(products.filter((_, i) => i !== index));
  };

  const updateProduct = (index: number, field: string, value: string) => {
    const updated = [...products];
    if (field === "details") {
      updated[index] = { ...updated[index], details: value.split("\n") };
    } else {
      updated[index] = { ...updated[index], [field]: value };
    }
    setProducts(updated);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="font-heading text-brand-green text-xl">Edit Products</CardTitle>
            <CardDescription className="font-body">Manage product cards shown on the website</CardDescription>
          </div>
          <Button
            onClick={addProduct}
            variant="outline"
            className="text-brand-green border-brand-green/20 hover:bg-brand-green/5 font-body"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            {products.map((product, i) => (
              <Card key={i} className="bg-gray-50/50 border-gray-100 shadow-none">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-brand-green font-body">Product {i + 1}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeProduct(i)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 h-8 w-8 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Product Name</Label>
                    <Input
                      type="text"
                      value={product.title}
                      onChange={(e) => updateProduct(i, "title", e.target.value)}
                      className="font-body bg-white"
                      placeholder="Enter product name..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Tag / Badge</Label>
                    <Input
                      type="text"
                      value={product.tag || ""}
                      onChange={(e) => updateProduct(i, "tag", e.target.value)}
                      className="font-body bg-white"
                      placeholder="e.g. Featured, Premium..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Description</Label>
                    <Textarea
                      value={product.description}
                      onChange={(e) => updateProduct(i, "description", e.target.value)}
                      rows={3}
                      className="font-body bg-white resize-none"
                      placeholder="Enter product description..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Key Features (One per line)</Label>
                    <Textarea
                      value={(product.details || []).join("\n")}
                      onChange={(e) => updateProduct(i, "details", e.target.value)}
                      rows={5}
                      className="font-body bg-white resize-none"
                      placeholder="Feature 1&#10;Feature 2&#10;..."
                    />
                  </div>

                  {/* Image Upload */}
                  <div className="space-y-2">
                    <Label className="text-xs font-medium text-muted-foreground font-body">Product Image</Label>
                    <div className="border border-dashed border-gray-200 rounded-lg p-5 text-center hover:border-brand-green/30 transition-colors bg-white">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = () => {
                              localStorage.setItem(`ipj_product_image_${i}`, reader.result as string);
                              setImageUploadStatus(prev => ({...prev, [i]: true}));
                              onSave(`Product ${i + 1} image uploaded!`, "success");
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="hidden"
                        id={`product-image-${i}`}
                      />
                      <label htmlFor={`product-image-${i}`} className="cursor-pointer flex flex-col items-center">
                        <ImageIcon className="w-6 h-6 text-muted-foreground/50 mb-2" />
                        <span className="text-xs text-muted-foreground font-body font-medium">Click to upload image</span>
                        {imageUploadStatus[i] && (
                            <span className="text-xs text-brand-green font-body font-medium mt-1.5 px-2 py-0.5 bg-brand-green/10 rounded-full">
                                Image uploaded
                            </span>
                        )}
                      </label>
                    </div>
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
