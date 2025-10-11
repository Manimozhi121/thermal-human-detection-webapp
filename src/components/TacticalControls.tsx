import { Settings, Sliders, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export function TacticalControls() {
  return (
    <div className="w-full animate-slide-up" style={{ animationDelay: "0.2s" }}>
      <h2 className="text-2xl font-tactical text-primary glow-text mb-4">
        TACTICAL CONTROLS
      </h2>

      <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 p-6">
        <div className="space-y-6">
          {/* Detection Threshold */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sliders className="h-4 w-4 text-primary" />
                <span className="font-tactical text-sm uppercase text-foreground">
                  Detection Threshold
                </span>
              </div>
              <span className="text-primary font-mono text-sm">0.50</span>
            </div>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono">
              <span>0.30</span>
              <span>0.90</span>
            </div>
          </div>

          {/* Visualization Mode */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Eye className="h-4 w-4 text-primary" />
              <span className="font-tactical text-sm uppercase text-foreground">
                Visualization Mode
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 font-mono text-xs"
              >
                BOXES
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 font-mono text-xs"
              >
                HEAT
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 font-mono text-xs"
              >
                BOTH
              </Button>
            </div>
          </div>

          {/* Playback Speed */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Settings className="h-4 w-4 text-primary" />
              <span className="font-tactical text-sm uppercase text-foreground">
                Playback Speed
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['0.5x', '1x', '2x', 'FRAME'].map((speed) => (
                <Button
                  key={speed}
                  variant="outline"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 font-mono text-xs"
                >
                  {speed}
                </Button>
              ))}
            </div>
          </div>

          {/* Export Options */}
          <div className="pt-4 border-t border-primary/20">
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-tactical"
            >
              <Download className="mr-2 h-4 w-4" />
              EXPORT RESULTS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
