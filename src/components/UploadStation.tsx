import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Upload, Loader2, AlertCircle, CheckCircle, Gauge, Zap } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:10000/api/process";

export function UploadStation() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      // Reset states for new file
      setFile(selectedFile);
      setProcessedUrl(null);
      setError(null);
      setIsSuccess(false);

      // Create a preview URL
      const preview = URL.createObjectURL(selectedFile);
      setPreviewUrl(preview);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("No file selected. Please upload a thermal image or video.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setProcessedUrl(null);
    setIsSuccess(false);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.detail || `HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const resultUrl = URL.createObjectURL(blob);
      setProcessedUrl(resultUrl);
      setIsSuccess(true);

    } catch (err: any) {
      setError(err.message || "An unknown error occurred during processing.");
      console.error("Processing error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMedia = (url: string, isVideo: boolean) => {
    if (isVideo) {
      return <video src={url} controls autoPlay loop className="w-full h-full object-contain rounded-md" />;
    }
    return <img src={url} alt="media" className="w-full h-full object-contain rounded-md" />;
  };

  const isVideo = file?.type.startsWith("video/");

  return (
    <Card className="w-full max-w-4xl bg-card/50 backdrop-blur-sm border-glow shadow-tactical">
      <CardHeader>
        <CardTitle className="text-center text-4xl font-bold glow-text tracking-wider">
          Vigilsense
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Performance Metrics */}
        <div className="flex justify-center gap-8 font-mono text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-cyan-400" />
            <span>
              Accuracy (mAP@0.5): <span className="font-bold text-cyan-300">0.862</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span>
              Speed (CPU): <span className="font-bold text-yellow-300">~135 FPS</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Column */}
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-lg upload-gradient">
            <Input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*,video/*"
            />
            <Button onClick={handleUploadClick} variant="outline" className="mb-4 bg-transparent hover:bg-primary/10">
              <Upload className="mr-2 h-4 w-4" /> Select File
            </Button>
            {file ? (
              <div className="text-center font-mono text-sm text-muted-foreground">
                <p>Selected: {file.name}</p>
                <p>Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            ) : (
              <p className="text-muted-foreground">Upload an image or video file.</p>
            )}
          </div>

          {/* Action Column */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <Button onClick={handleSubmit} disabled={!file || isLoading} size="lg" className="w-full pulse-glow">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Analyze Asset"
              )}
            </Button>
            {error && (
              <Alert variant="destructive" className="w-full">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {isSuccess && (
               <Alert variant="default" className="w-full bg-green-900/50 border-green-500/50 text-green-300">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Analysis complete. View results below.</AlertDescription>
              </Alert>
            )}
          </div>
        </div>

        {/* Results Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="min-h-[300px] bg-muted/50 rounded-lg p-2 military-grid">
            <h3 className="text-lg font-semibold mb-2 text-center text-muted-foreground">ORIGINAL</h3>
            {previewUrl && renderMedia(previewUrl, !!isVideo)}
          </div>
          <div className="min-h-[300px] bg-muted/50 rounded-lg p-2 military-grid">
            <h3 className="text-lg font-semibold mb-2 text-center text-primary glow-text">ANALYSIS RESULT</h3>
            {processedUrl && renderMedia(processedUrl, !!isVideo)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}