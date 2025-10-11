import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

export function IntelligenceFeed() {
  const activities = [
    { type: "info", time: "00:00:00", message: "System initialized and ready" },
    { type: "success", time: "00:00:01", message: "Thermal detection model loaded" },
    { type: "warning", time: "00:00:02", message: "Awaiting mission data upload" },
  ];

  return (
    <div className="w-full animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <h2 className="text-2xl font-tactical text-primary glow-text mb-4">
        INTELLIGENCE FEED
      </h2>

      <div className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 p-6">
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-3">
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="mt-0.5">
                  {activity.type === "success" && (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  )}
                  {activity.type === "warning" && (
                    <AlertTriangle className="h-4 w-4 text-accent" />
                  )}
                  {activity.type === "info" && (
                    <Info className="h-4 w-4 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                    <span className={`
                      font-mono text-xs uppercase
                      ${activity.type === "success" ? "text-green-500" : ""}
                      ${activity.type === "warning" ? "text-accent" : ""}
                      ${activity.type === "info" ? "text-primary" : ""}
                    `}>
                      {activity.type}
                    </span>
                  </div>
                  <p className="text-sm text-foreground">{activity.message}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="mt-4 pt-4 border-t border-primary/20 flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono">
            TOTAL EVENTS: {activities.length}
          </span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-xs text-primary font-mono">LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
