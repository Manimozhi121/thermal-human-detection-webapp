import { UploadStation } from "@/components/UploadStation";

const Index = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 military-grid">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold glow-text tracking-wider uppercase">
          Thermal Human Detection
        </h1>
        <p className="text-muted-foreground font-mono mt-2">
          YOLOv8-Powered Human Detection System
        </p>
      </div>

      <UploadStation />

    </main>
  );
};

export default Index;