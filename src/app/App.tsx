import { useState } from "react";
import Frame226 from "@/imports/Frame226";
import Frame227 from "@/imports/Frame227";
import Frame233 from "@/imports/Frame233";
import Frame234 from "@/imports/Frame234-5-5875";
import Frame235 from "@/imports/Frame235";
import Frame238 from "@/imports/Frame238";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "howItWorks" | "performance" | "platform" | "useCases" | "bookDemo">("home");

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#2fd5bf] to-[#0166fa]">
      <div 
        className="w-full relative"
        style={{ 
          height: currentPage === "home" ? "11072px" : 
                  currentPage === "howItWorks" ? "6672px" : 
                  currentPage === "performance" ? "5800px" :
                  currentPage === "platform" ? "5376px" :
                  currentPage === "useCases" ? "5500px" :
                  "2550px" // Frame238 height (Book a Demo)
        }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const text = target.textContent?.trim();
          
          // Navigate to How It Works page
          if (text === "How It Works") {
            setCurrentPage("howItWorks");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          // Navigate to Performance & Coaching page
          else if (text === "Performance & Coaching") {
            setCurrentPage("performance");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          // Navigate to Platform page
          else if (text === "Platform") {
            setCurrentPage("platform");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          // Navigate to Use Cases page
          else if (text === "Use Cases") {
            setCurrentPage("useCases");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          // Navigate to Book a Demo page
          else if (text === "Book a Demo") {
            setCurrentPage("bookDemo");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          // Navigate to Home page
          else if (
            target.closest('[data-name="LOGO-01 1"]')
          ) {
            setCurrentPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        {currentPage === "home" ? <Frame226 /> : 
         currentPage === "howItWorks" ? <Frame227 /> : 
         currentPage === "performance" ? <Frame233 /> :
         currentPage === "platform" ? <Frame234 /> :
         currentPage === "useCases" ? <Frame235 /> :
         <Frame238 />}
      </div>
    </div>
  );
}