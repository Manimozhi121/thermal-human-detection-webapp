import { Activity, Target, Zap, Clock } from "lucide-react";

export function AnalyticsDashboard() {
  return (
    <div className="w-full animate-slide-up" style={{ animationDelay: "0.1s" }}>
      <h2 className="text-2xl font-tactical text-primary glow-text mb-4">
        REAL-TIME ANALYTICS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Detection Counter */}
        <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground font-mono uppercase">Detected</span>
            </div>
            <div className="text-4xl font-tactical text-primary glow-text mb-1">
              0
            </div>
            <p className="text-xs text-muted-foreground font-mono">HUMANS IN FRAME</p>
          </div>
        </div>

        {/* Confidence Meter */}
        <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <Activity className="h-5 w-5 text-accent" />
              <span className="text-xs text-muted-foreground font-mono uppercase">Confidence</span>
            </div>
            <div className="text-4xl font-tactical text-accent glow-text mb-1">
              0%
            </div>
            <p className="text-xs text-muted-foreground font-mono">AVG CERTAINTY</p>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <Zap className="h-5 w-5 text-green-500" />
              <span className="text-xs text-muted-foreground font-mono uppercase">FPS</span>
            </div>
            <div className="text-4xl font-tactical text-green-500 glow-text mb-1">
              --
            </div>
            <p className="text-xs text-muted-foreground font-mono">FRAMES/SEC</p>
          </div>
        </div>

        {/* Inference Time */}
        <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span className="text-xs text-muted-foreground font-mono uppercase">Latency</span>
            </div>
            <div className="text-4xl font-tactical text-blue-500 glow-text mb-1">
              --
            </div>
            <p className="text-xs text-muted-foreground font-mono">MILLISECONDS</p>
          </div>
        </div>
      </div>

      {/* Heat Map Timeline */}
      <div className="mt-4 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-tactical text-sm text-primary uppercase">Detection Timeline</h3>
          <span className="text-xs text-muted-foreground font-mono">LAST 30 FRAMES</span>
        </div>
        <div className="h-20 w-full bg-muted/20 rounded-lg flex items-end gap-1 p-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-primary/30 rounded-t transition-all hover:bg-primary/50"
              style={{ height: `${Math.random() * 100}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
