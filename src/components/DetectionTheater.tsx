import { useState } from "react";
import { Maximize2, Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DetectionTheaterProps {
  isProcessing?: boolean;
}

export function DetectionTheater({ isProcessing = false }: DetectionTheaterProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-tactical text-primary glow-text">
          DETECTION THEATER
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">VIEWPORT ACTIVE</span>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>

      <div className="relative w-full aspect-video bg-card/50 rounded-xl border-2 border-primary/30 overflow-hidden">
        {/* Military Grid Background */}
        <div className="absolute inset-0 military-grid opacity-20"></div>
        
        {/* Scan Line Effect */}
        <div className="absolute inset-0 scan-line"></div>

        {/* Main Content Area */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {isProcessing ? (
            <div className="text-center">
              <div className="inline-block p-8 rounded-full bg-primary/10 mb-4 animate-pulse-glow">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-primary font-tactical text-xl glow-text">
                PROCESSING THERMAL DATA
              </p>
              <p className="text-muted-foreground font-mono text-sm mt-2">
                AI DETECTION IN PROGRESS...
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-primary font-tactical text-xl glow-text mb-2">
                AWAITING MISSION DATA
              </p>
              <p className="text-muted-foreground font-mono text-sm">
                UPLOAD FILES TO BEGIN DETECTION
              </p>
            </div>
          )}
        </div>

        {/* Corner Markers */}
        <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-primary/50"></div>
        <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-primary/50"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-primary/50"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-primary/50"></div>
      </div>

      {/* Playback Controls */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="border-primary/30 hover:border-primary hover:bg-primary/10"
        >
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-primary/30 hover:border-primary hover:bg-primary/10"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-primary/30 hover:border-primary hover:bg-primary/10"
        >
          <SkipForward className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-primary/30 hover:border-primary hover:bg-primary/10 ml-4"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
