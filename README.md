# VigilSense Web App — Thermal Human Detection Interface

An interactive web interface for **real-time human and vehicle detection** in thermal imagery, built as part of the **VigilSense** project.  
The app connects to a FastAPI backend serving a fine-tuned **YOLOv8** model optimized for **edge deployment**.

---

## Tech Stack
- **Frontend:** React, TypeScript, Vite, TailwindCSS, shadcn/ui  
- **Backend (API):** FastAPI → [Thermal Detection API](https://github.com/Manimozhi121/thermal-detection-api)  
- **ML Model:** YOLOv8 → [VigilSense-TF25](https://github.com/Manimozhi121/Vigilsense-TF25)  
- **Deployment:** Render (Frontend + Backend)

---

## ⚙️ Setup & Run

```bash
# Clone repository
git clone https://github.com/Manimozhi121/thermal-detection-webapp.git
cd thermal-detection-webapp

# Install dependencies
npm install

# Add your backend API URL
cp .env.example .env
# Example:
# VITE_API_URL=https://thermal-detection-api.onrender.com

# Run the development server
npm run dev

