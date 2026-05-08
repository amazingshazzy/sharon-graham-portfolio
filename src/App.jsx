import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  ArrowRight,
  User,
  Brain,
  Route,
  Activity,
  Smartphone,
  Fingerprint,
  Shirt,
  Scan,
  Sparkles,
  Image,
} from "lucide-react";
import "./index.css";
import "./App.css";


const skillSections = [
  {
    num: "01",
    title: "AI Design",
    text: "Concept design, generative workflows, intelligent interfaces, and portfolio storytelling.",
    tools: [
      { name: "Midjourney", img: "/tools/midjourney.webp" },
      { name: "ChatGPT", img: "/tools/chatgpt.webp" },
      { name: "Claude", img: "/tools/claude.webp" },
      { name: "Gemini", img: "/tools/gemini.webp" },
      { name: "Google AI Studio", img: "/tools/google-ai-studio.webp" },
    ],
  },
  {
    num: "02",
    title: "3D Experiences",
    text: "Virtual try-on concepts, product visualisation, cinematic mockups, and immersive scenes.",
    tools: [
      { name: "Three.js", img: "/tools/threejs.webp" },
      { name: "Blender", img: "/tools/blender.webp" },
      { name: "Cinema 4D", img: "/tools/cinema4d.webp" },
    ],
  },
  {
    num: "03",
    title: "Web Portfolio",
    text: "Responsive self-hosted websites with motion, video intros, and professional case studies.",
    tools: [
      { name: "Figma", img: "/tools/figma.webp" },
      { name: "Canva", img: "/tools/canva.webp" },
      { name: "Vite", img: "/tools/vite.webp" },
      { name: "React", img: "/tools/react.webp" },
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const toolsWrapVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const toolVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const img = (fileName) =>
  new URL(`./assets/images/${fileName}`, import.meta.url).href;


const projects = [
  {
    title: "AI Virtual Try-On",
    category: "3D Fashion / AI Experience",
    image: img("3d_virtualTryon_6.webp"),
     images: [
  img("3d_virtualTryon_1.webp"),          // 0
  img("3d_virtualTryon_2.webp"),          // 1
  img("3d_virtualTryon_3.webp"),          // 2
  img("3d_virtualTryon_4.webp"),          // 3
  img("3d_virtualTryon_5.webp"),          // 4
  img("3d_virtualTryon_6.webp"),          // 5
  img("3d_virtualTryon_7.webp"),          // 6
  img("3d_virtualTryon_8.webp"),          // 7
  img("3d_virtualTryon_9.webp"),          // 8
  img("3d_virtualTryon_10.webp"),         // 9
  img("3d_virtualTryon_Architecture.webp") // 10
],
  },
  {
    title: "KIT2.6",
    label: "AI Agentic Use Case B",
    category: "Intelligent Luxury Vehicle AI Companion",
    image: img("KIT26_hero_main.webp"),
   images: [
  img("KIT26_hero_main.webp"),          // 0
  img("KIT26_ai-ui_1.webp"),            // 1
  img("KIT26_ai-ui_Car_1.webp"),        // 2
  img("KIT26_ai-ui_car_2.webp"),        // 3
  img("KIT26_ai-ui_Mobile_1.webp"),     // 4
  img("KIT26_ai-ui_Mobile_2.webp"),     // 5
  img("KIT26_ai-ui_Mobile_4.webp"),     // 6
  img("KIT26_ai-ui_Mobile_5.webp"),     // 7
  img("KIT26_ai-ui_car_3.webp"),        // 8
  img("KIT26_Architecture_car_1.webp"), // 9
  img("KIT26_dashboard.webp"),          // 10
  img("KIT26_architecture.webp"),       // 11
],
    featured: true,
    description:
      "A voice-first AI companion for premium electric vehicles, designed to know the driver, optimise battery and powertrain performance, control infotainment and ADAS features, and deliver a hyper-personalised luxury experience.",
  },
  {
    title: "Arion Bank",
    label: "AI Agentic Use Case C",
    category: "AI Banking / KYC / Crypto Wealth",
    image: img("Arion_Bank_KYC_main.webp"),
    images: [
      img("Arion_Bank_KYC_main.webp"),
      img("Arion_Bank_KYC_1.webp"),
      img("Arion_Bank_KYC_2.webp"),
      img("Arion_Bank_KYC_3.webp"),
      img("Arion_Bank_KYC_4.webp"),
      img("Arion_Bank_KYC_5.webp"),
      img("Arion_Bank_KYC_6.webp"),
      img("Arion_Bank_KYC_Architecture_8.webp"),
    ],
    featured: true,
    description:
      "An AI-powered wealth and crypto banking app that streamlines KYC, supports Bitcoin trading, monitors risk, and delivers personalised financial intelligence for modern investors.",
  },
];

const services = [
  [
    "01",
    "AI Design",
    "Concept design, generative workflows, intelligent interfaces, and portfolio storytelling.",
  ],
  [
    "02",
    "3D Experiences",
    "Virtual try-on concepts, product visualization, cinematic mockups, and immersive scenes.",
  ],
  [
    "03",
    "Web Portfolio",
    "Responsive self-hosted websites with motion, video intros, and professional case studies.",
  ],
];

const stats = [
  ["3D + AI", "Core focus"],
  ["55+", "AI/UX projects"],
  ["2026", "Portfolio launch"],
  ["100%", "Creative ownership"],
];

function Header({ scrolled, setMenuOpen }) {
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? "bg-white/75 pt-5 pb-3 border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          : "bg-white/45 pt-8 pb-6 md:pt-10 md:pb-7 border-white/20"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="group inline-block leading-none">
       <span
  className={`block leading-[0.78] tracking-[-0.04em] text-[#eb5428] transition-all duration-500 group-hover:opacity-80 ${
    scrolled
      ? "text-[3.4rem] md:text-[4rem]"
      : "text-[4.4rem] md:text-[5.2rem]"
  }`}
  style={{ fontFamily: "'Alex Brush', cursive" }}
>
  Sharon. G
</span>

          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 0.42, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="mt-3 block text-[10px] font-medium uppercase tracking-[0.5em] text-black/70"
          >
            AI · Innovation · UX/UI · Design
          </motion.span>
        </a>

        <motion.button
          onClick={() => setMenuOpen(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="group flex h-12 w-12 items-center justify-center rounded-full bg-black transition-all duration-300 hover:bg-[#eb5428]"
          aria-label="Open menu"
        >
          <div className="flex w-5 flex-col gap-[6px]">
            <span className="h-[2px] w-5 rounded-full bg-white transition-all duration-300 group-hover:w-4" />
            <span className="h-[2px] w-5 rounded-full bg-white transition-all duration-300 group-hover:w-6" />
          </div>
        </motion.button>
      </nav>
    </header>
  );
}

function MobileMenu({ londonTime, setMenuOpen }) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/20 backdrop-blur-xl">
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#eb5428]"
        aria-label="Close menu"
      >
        <span className="absolute h-[2px] w-7 rotate-45 bg-[#eb5428]" />
        <span className="absolute h-[2px] w-7 -rotate-45 bg-[#eb5428]" />
      </button>

      <div className="absolute left-6 top-28 max-w-xs text-white">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/60">
          Location
        </p>
        <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em]">
          Based in <span className="text-[#eb5428]">London</span>
          <br />
          and work remotely.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-white/70">
          {londonTime}
        </p>
      </div>

      <div className="flex h-full flex-col items-end justify-center gap-4 px-6 text-right text-5xl font-semibold uppercase leading-none tracking-[-0.06em] text-white">
        {["Home", "About", "Work", "Services", "Contact"].map((link) => (
          <a
            key={link}
            onClick={() => setMenuOpen(false)}
            href={`#${link.toLowerCase()}`}
          >
            {link}
          </a>
        ))}

 <a
  href="/cv/Sharon_Graham_AI_Product_Designer_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="cv-button"
>
  View / Download CV
</a>
      </div>
    </div>
  );
}

function ProjectModal({ selectedProject, setSelectedProject }) {
  if (!selectedProject) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto bg-black/70 p-5 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative my-8 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#f4f1ea] p-8 text-black">
        <button
          type="button"
          onClick={() => setSelectedProject(null)}
          className="sticky top-0 z-[2000] ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-black text-xl text-white"
        >
          ×
        </button>

        <div className="mb-6 overflow-hidden rounded-[1.5rem]">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-black/40">
          {selectedProject.label || "Use Case"}
        </p>

        <h2 className="text-5xl font-semibold tracking-[-0.06em]">
          {selectedProject.title}
        </h2>

        <p className="mt-3 text-black/60">{selectedProject.category}</p>

        {selectedProject.description && (
          <p className="mt-5 max-w-3xl leading-7 text-black/70">
            {selectedProject.description}
          </p>
        )}

        {selectedProject.title === "AI Virtual Try-On" && (
        <VirtualTryOnUseCase project={selectedProject} />
        )}

        {selectedProject.title === "KIT2.6" && (
          <Kit26UseCase project={selectedProject} />
        )}

        {selectedProject.title === "Arion Bank" && (
          <ArionBankUseCase project={selectedProject} />
        )}
      </div>
    </motion.div>
  );
}


/* =========================================================
   6B) SMALL COMPONENT:
   What this is:
   - Detailed case study for VirtualTryOnUseCase,Arion Bank,Kit26UseCase
   - Follows the same AI Use Case Template structure
   - Keeps architecture, flow, and business logic consistent
========================================================= */
/* AI Virtual Try-On Use Case */
function VirtualTryOnUseCase({ project }) {
  return (
    <div className="mt-10 space-y-8 text-black/75">

      {/* AI VIRTUAL TRY-ON USER FLOW */}
      <div className="rounded-3xl bg-white/70 p-6">
        <h4 className="mb-4 text-lg font-semibold">AI Virtual Try-On User Flow</h4>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-black/40">
          Fashion Try-On Experience
        </p>

        <div className="flex flex-wrap items-stretch justify-between gap-3">
          {[
            { label: "User uploads photo", icon: User },
            { label: "Outfit image uploaded", icon: Shirt },
            { label: "AI analyses garment", icon: Brain },
            { label: "Body + pose preserved", icon: Scan },
            { label: "Outfit is swapped", icon: Sparkles },
            { label: "Try-on result generated", icon: Image },
          ].map((step, index, arr) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={step.label}>
                <div className="group relative min-h-[120px] flex-1 basis-[150px] rounded-2xl border border-[#eb5428]/30 bg-[#eb5428]/10 p-4 transition duration-300 hover:-translate-y-1 hover:bg-[#eb5428] hover:shadow-[0_18px_45px_rgba(235,84,40,0.25)]">
                  
                  <span className="absolute right-3 top-2 scale-75 text-lg opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                    {index === 5 ? "👗" : "✨"}
                  </span>

                  <p className="mb-1 text-xs font-bold text-[#eb5428] group-hover:text-white">
                    0{index + 1}
                  </p>

                  <p className="text-sm font-semibold text-black/75 group-hover:text-white">
                    {step.label}
                  </p>

                  <div className="mt-3 flex justify-end">
                    <Icon size={20} className="text-[#eb5428] group-hover:text-white" />
                  </div>
                </div>

                {index < arr.length - 1 && (
                  <div className="hidden items-center md:flex">
                    <ArrowRight size={20} className="text-[#eb5428] opacity-70" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ARCHITECTURE PLAN */}
      <div className="rounded-3xl bg-white/70 p-6">
        <h4 className="mb-4 text-lg font-semibold">Architecture Plan</h4>

        <div className="space-y-3">
          {[
            {
              icon: "🖥️",
              title: "Frontend Interface",
              desc: "A clean web interface where users upload Photo A, their personal image, and Photo B, the outfit image.",
            },
            {
              icon: "📤",
              title: "Image Upload Layer",
              desc: "Handles image preview, validation, file compression, and secure transfer to the backend API.",
            },
            {
              icon: "🤖",
              title: "AI Processing Layer",
              desc: "The system labels the images clearly, analyses the outfit, and extracts garment type, colour, fabric, fit, and style.",
            },
            {
              icon: "✨",
              title: "Image Generation Model",
              desc: "The AI model applies the outfit from Photo B onto the user in Photo A while preserving face, pose, body type, lighting, and background.",
            },
            {
              icon: "☁️",
              title: "Cloud + API Gateway",
              desc: "Vercel AI Gateway connects the app to the image-generation model without needing a separate direct model API setup.",
            },
            {
              icon: "🗂️",
              title: "Storage + Database",
              desc: "Generated results, user sessions, metadata, and try-on history can be stored using cloud storage and a database.",
            },
          ].map((item, index, arr) => (
            <React.Fragment key={item.title}>
              <div className="group rounded-2xl bg-black/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/70 hover:backdrop-blur-md hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70 text-lg transition duration-300 group-hover:bg-[#eb5428]">
                    <span className="transition duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-black/85">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-black/55 transition duration-300 group-hover:text-black/75">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {index < arr.length - 1 && (
                <div className="flex justify-center">
                  <ArrowRight
                    size={18}
                    className="rotate-90 text-[#eb5428] opacity-60"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CINEMATIC VISUAL STORY */}
      <div className="space-y-6">

        <div className="mb-6 overflow-hidden rounded-[1.5rem]">
          <img
            src={project.images[6]}
            alt="AI Virtual Try-On hero"
            className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="rounded-[2rem] bg-black p-6 text-white">
          <h4 className="mb-4 text-2xl font-semibold">
            Upload + Try-On Experience
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            <img src={project.images[1]} className="h-52 w-full rounded-2xl object-cover" />
            <img src={project.images[2]} className="h-52 w-full rounded-2xl object-cover" />
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/70 p-6">
          <h4 className="mb-4 text-2xl font-semibold">
            AI Outfit Transformation
          </h4>
          <div className="grid gap-4 md:grid-cols-3">
            <img src={project.images[3]} className="h-56 w-full rounded-2xl object-cover" />
            <img src={project.images[4]} className="h-56 w-full rounded-2xl object-cover" />
            <img src={project.images[5]} className="h-56 w-full rounded-2xl object-cover" />
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/70 p-6">
          <h4 className="mb-4 text-2xl font-semibold">
            Mobile + Virtual Mirror Experience
          </h4>
          <div className="grid gap-4 md:grid-cols-3">
            <img src={project.images[8]} className="h-56 w-full rounded-2xl object-cover" />
            <img src={project.images[7]} className="h-56 w-full rounded-2xl object-cover" />
          <img src={project.images[1]} className="h-56 w-full rounded-2xl object-cover" />
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/70 p-6">
          <h4 className="mb-4 text-2xl font-semibold">
            AI Virtual Try-On Architecture
          </h4>
          <img
            src={project.images[10]}
            className="w-full rounded-2xl object-cover"
          />
        </div>

      </div>

      <div className="mb-6 overflow-hidden rounded-[1.5rem]">
        <img
          src={project.images[9]}
          className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
        />
      </div>

      {/* BUSINESS VALUE */}
      <div className="rounded-3xl bg-white/70 p-6">
        <h4 className="mb-5 text-lg font-semibold">Business Value</h4>

        <div className="space-y-5">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#eb5428]">
              Customer Confidence
            </p>
            <p className="text-black/70">
              The AI Virtual Try-On app helps customers see how an outfit may look on them before purchase. 
              By preserving the user’s face, body type, pose, and background while changing only the outfit, 
              the experience creates a more personal and realistic shopping journey.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#eb5428]">
              E-Commerce Conversion
            </p>
            <p className="text-black/70">
              The system reduces uncertainty in online fashion shopping by giving users a visual preview of the product. 
              This can increase engagement, improve purchase confidence, and support higher conversion rates for fashion retailers.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#eb5428]">
              Reducing Returns
            </p>
            <p className="text-black/70">
              Since customers can preview clothing before buying, the app can help reduce size, style, and expectation-related returns. 
              This creates value for both customers and retailers by improving satisfaction and lowering operational costs.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#eb5428]">
              Future Innovation
            </p>
            <p className="text-black/70">
              The concept can be extended into 3D avatars, virtual fitting rooms, personalised styling, gamified outfit discovery, 
              luxury fashion experiences, and AI-powered recommendation systems.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

/* Kit26UseCase */
function Kit26UseCase({ project }) {
  return (
    <div className="mt-10 space-y-8 text-black/75">

      {/* DRIVER USER FLOW */}
      <div className="rounded-3xl bg-white/70 p-6">
        <h4 className="mb-4 text-lg font-semibold">Driver User Flow</h4>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-black/40">
          Intelligent Driver Flow
        </p>

        <div className="flex flex-wrap items-stretch justify-between gap-3">
          {[
            { label: "Driver recognised", icon: User },
            { label: "Intent understood", icon: Brain },
            { label: "Journey optimised", icon: Route },
            { label: "Vehicle monitored", icon: Activity },
            { label: "Mobile app synced", icon: Smartphone },
            { label: "Biometric ignition", icon: Fingerprint },
          ].map((step, index, arr) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={step.label}>
                <div className="group relative min-h-[120px] flex-1 basis-[150px] rounded-2xl border border-[#eb5428]/30 bg-[#eb5428]/10 p-4 transition duration-300 hover:-translate-y-1 hover:bg-[#eb5428] hover:shadow-[0_18px_45px_rgba(235,84,40,0.25)]">
                  
                  <span className="absolute right-3 top-2 scale-75 text-lg opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                    {index === 5 ? "💎" : "✨"}
                  </span>

                  <p className="mb-1 text-xs font-bold text-[#eb5428] group-hover:text-white">
                    0{index + 1}
                  </p>

                  <p className="text-sm font-semibold text-black/75 group-hover:text-white">
                    {step.label}
                  </p>

                  <div className="mt-3 flex justify-end">
                    <Icon size={20} className="text-[#eb5428] group-hover:text-white" />
                  </div>
                </div>

                {index < arr.length - 1 && (
                  <div className="hidden items-center md:flex">
                    <ArrowRight size={20} className="text-[#eb5428] opacity-70" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

{/* ARCHITECTURE PLAN */}
<div className="rounded-3xl bg-white/70 p-6">
  <h4 className="mb-4 text-lg font-semibold">Architecture Plan</h4>

  <div className="space-y-3">
    {[
      {
        icon: "🖥️",
        title: "Interface Layer",
        desc: "Dashboard UI, voice assistant, and mobile app for human–vehicle interaction.",
      },
      {
        icon: "🤖",
        title: "Agent Core",
        desc: "Intent engine, memory, decision system, and personalisation logic.",
      },
      {
        icon: "⚙️",
        title: "Vehicle Systems",
        desc: "Battery, powertrain, infotainment, and ADAS connected to the AI layer.",
      },
      {
        icon: "☁️",
        title: "Cloud Intelligence",
        desc: "AI APIs, analytics, OTA updates, and continuous optimisation.",
      },
      {
        icon: "💎",
        title: "Manufacturing AI",
        desc: "Leather hide inspection for premium quality control and craftsmanship.",
      },
    ].map((item, index, arr) => (
      <React.Fragment key={item.title}>
        {/* ARCHITECTURE BLOCK */}
        <div className="group rounded-2xl bg-black/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/70 hover:backdrop-blur-md hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70 text-lg transition duration-300 group-hover:bg-[#eb5428]">
              <span className="transition duration-300 group-hover:scale-110">
                {item.icon}
              </span>
            </div>

            <div>
              <p className="text-sm font-semibold text-black/85">
                {item.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-black/55 transition duration-300 group-hover:text-black/75">
                {item.desc}
              </p>
            </div>
          </div>
        </div>

        {/* CONNECTING FLOW ARROW */}
        {index < arr.length - 1 && (
          <div className="flex justify-center">
            <ArrowRight
              size={18}
              className="rotate-90 text-[#eb5428] opacity-60"
            />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
</div>
      {/* CINEMATIC VISUAL STORY */}
      <div className="space-y-6">

        <div className="mb-6 overflow-hidden rounded-[1.5rem]">
          <img
            src={project.images[10]}
            alt="KIT2.6 hero"
            className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="rounded-[2rem] bg-black p-6 text-white">
          <h4 className="mb-4 text-2xl font-semibold">
            Dashboard + AI Companion Experience
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            <img src={project.images[4]} className="h-52 w-full rounded-2xl object-cover" />
            <img src={project.images[5]} className="h-52 w-full rounded-2xl object-cover" />
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/70 p-6">
          <h4 className="mb-4 text-2xl font-semibold">
            Mobile App Experience
          </h4>
          <div className="grid gap-4 md:grid-cols-3">
            <img src={project.images[6]} className="h-56 w-full rounded-2xl object-cover" />
            <img src={project.images[7]} className="h-56 w-full rounded-2xl object-cover" />
            <img src={project.images[2]} className="h-56 w-full rounded-2xl object-cover" />
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/70 p-6">
          <h4 className="mb-4 text-2xl font-semibold">
            AI Agent Architecture
          </h4>
          <img
            src={project.images[11]}
            className="w-full rounded-2xl object-cover"
          />
        </div>

      </div>
        <div className="mb-6 overflow-hidden rounded-[1.5rem]">
          <img
          src={project.images[1]}
            className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
  <div className="mb-6 overflow-hidden rounded-[1.5rem]">
          <img
          src={project.images[3]}
            className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

      {/* BUSINESS VALUE */}
      <div className="rounded-3xl bg-white/70 p-6">
        <h4 className="mb-5 text-lg font-semibold">Business Value</h4>

        <div className="space-y-5">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#eb5428]">
              Customer Experience
            </p>
            <p className="text-black/70">
              The system addresses key pain points in modern electric vehicles, including fragmented interfaces, reactive diagnostics, 
              and limited personalisation. By unifying vehicle systems under a single AI agent, KIT2.6 reduces complexity, improves 
              usability, and enables proactive maintenance and optimisation, resulting in a smoother and more reliable ownership experience.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#eb5428]">
              Solving Pain Points
            </p>
            <p className="text-black/70">
              The system addresses key pain points in modern electric vehicles, including fragmented interfaces, reactive diagnostics, 
              and limited personalisation. By unifying vehicle systems under a single AI agent, KIT2.6 reduces complexity, improves 
            usability, and enables proactive maintenance and optimisation, resulting in a smoother and more reliable ownership experience.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#eb5428]">
              Premium Craftsmanship
            </p>
            <p className="text-black/70">
              KIT2.6 elevates premium luxury craftsmanship by integrating AI into both the driving experience and the manufacturing process. 
              Through intelligent systems such as automated leather hide inspection, the vehicle achieves higher quality standards, 
              consistency, and attention to detail — reinforcing brand identity and redefining what luxury means in the age of AI.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

/* ArionBankUseCase */
function ArionBankUseCase({ project }) {
  return (
    <div className="mt-10 space-y-8 text-black/75">

      {/* PROBLEM + SOLUTION */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-white/70 p-6">
          <h4 className="mb-3 text-lg font-semibold">Problem</h4>
          <p className="leading-relaxed text-black/70">
            Wealth clients and crypto traders often face slow onboarding, fragmented identity checks,
            complex compliance steps, and limited visibility across traditional and digital assets.
          </p>
        </div>

        <div className="rounded-3xl bg-white/70 p-6">
          <h4 className="mb-3 text-lg font-semibold">Solution</h4>
          <p className="leading-relaxed text-black/70">
            Arion Bank introduces an AI-assisted banking experience that combines KYC automation,
            Bitcoin trading, portfolio intelligence, and risk monitoring into one secure mobile platform.
          </p>
        </div>
      </div>

      {/* CORE CAPABILITIES */}
      <div className="rounded-3xl bg-black p-6 text-white">
        <h4 className="mb-3 text-lg font-semibold">Core Capabilities</h4>

        <div className="grid gap-3 md:grid-cols-3">
          <p>KYC identity verification</p>
          <p>Bitcoin wallet + trading</p>
          <p>Wealth portfolio dashboard</p>
          <p>Risk and compliance alerts</p>
          <p>AI investor insights</p>
          <p>Secure biometric access</p>
        </div>
      </div>

      {/* AGENTIC USER FLOW */}
      <div className="rounded-3xl bg-white/70 p-6">
        <h4 className="mb-4 text-lg font-semibold">Agentic User Flow</h4>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-black/40">
          Intelligent Banking Flow
        </p>

        <div className="flex flex-wrap items-stretch justify-between gap-3">
          {[
            { label: "User verified", emoji: "🪪" },
            { label: "Risk assessed", emoji: "🛡️" },
            { label: "Wallet connected", emoji: "₿" },
            { label: "Trade executed", emoji: "📈" },
            { label: "Portfolio monitored", emoji: "💼" },
            { label: "Advisor insights", emoji: "🤖" },
          ].map((step, index, arr) => (
            <React.Fragment key={step.label}>
              <div className="group relative min-h-[120px] flex-1 basis-[150px] rounded-2xl border border-[#eb5428]/30 bg-[#eb5428]/10 p-4 transition duration-300 hover:-translate-y-1 hover:bg-[#eb5428] hover:shadow-[0_18px_45px_rgba(235,84,40,0.25)]">
                <span className="absolute right-3 top-2 scale-75 text-lg opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                  {index === 5 ? "💎" : "✨"}
                </span>

                <p className="mb-1 text-xs font-bold text-[#eb5428] transition duration-300 group-hover:text-white">
                  0{index + 1}
                </p>

              <div className="absolute bottom-4 right-4">
              <span className="text-lg transition duration-300 group-hover:scale-110">
                 {step.emoji}
                </span>
              </div>

                <p className="text-sm font-semibold leading-snug text-black/75 transition duration-300 group-hover:text-white">
                  {step.label}
                </p>
              </div>
              {/* ARROW */}
              {index < arr.length - 1 && (
                <div className="hidden items-center md:flex">
                  <ArrowRight size={20} className="text-[#eb5428] opacity-70" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ARCHITECTURE PLAN */}
      <div className="rounded-3xl bg-white/70 p-6">
        <h4 className="mb-4 text-lg font-semibold">Architecture Plan</h4>

        <div className="space-y-3">
          {[
            {
              icon: "📱",
              title: "Interface Layer",
              desc: "Mobile banking UI, onboarding flow, trading screens, biometric login, and wealth dashboard.",
            },
            {
              icon: "🤖",
              title: "Agent Core",
              desc: "KYC assistant, risk engine, investor profiling, fraud detection, and recommendation logic.",
            },
            {
              icon: "🪪",
              title: "Compliance Layer",
              desc: "Identity verification, AML checks, sanctions screening, transaction monitoring, and audit trails.",
            },
            {
              icon: "₿",
              title: "Crypto Banking Layer",
              desc: "Bitcoin wallet, custody logic, buy/sell trading, transaction history, and market pricing.",
            },
            {
              icon: "☁️",
              title: "Cloud Intelligence",
              desc: "AI APIs, analytics, secure data storage, portfolio modelling, and real-time risk updates.",
            },
          ].map((item, index, arr) => (
            <React.Fragment key={item.title}>
              <div className="group flex flex-col h-full rounded-2xl bg-black/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/70 hover:backdrop-blur-md hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/70 text-lg transition duration-300 group-hover:bg-[#eb5428]">
                    <span className="transition duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-black/85">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-black/55 transition duration-300 group-hover:text-black/75">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              {index < arr.length - 1 && (
                <div className="flex justify-center">
                  <ArrowRight size={18} className="rotate-90 text-[#eb5428] opacity-60" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* 🎬 ADD HERE — CINEMATIC VISUAL STORY */}
<div className="space-y-6">

  {/* USE CASE IMAGES */}
  <div className="overflow-hidden rounded-[1.5rem]">
    <img
      src={project?.images?.[1]}
      alt="Arion Bank hero"
      className="h-[350px] w-full object-cover transition duration-700 hover:scale-105"
    />
  </div>

  {/* DASHBOARD + TRADING */}
  <div className="rounded-[2rem] bg-black p-6 text-white">
    <h4 className="mb-4 text-2xl font-semibold">
      Wealth Dashboard & Trading
    </h4>

    <div className="grid gap-4 md:grid-cols-2">
      <img src={project?.images?.[2]} className="h-52 w-full rounded-2xl object-cover" />
      <img src={project?.images?.[3]} className="h-52 w-full rounded-2xl object-cover" />
    </div>
  </div>

  {/* KYC FLOW */}
  <div className="rounded-[2rem] bg-white/70 p-6">
    <h4 className="mb-4 text-2xl font-semibold">
      KYC & Identity Intelligence
    </h4>

    <div className="grid gap-4 md:grid-cols-3">
      <img src={project?.images?.[3]} className="h-56 w-full rounded-2xl object-cover" />
      <img src={project?.images?.[4]} className="h-56 w-full rounded-2xl object-cover" />
      <img src={project?.images?.[5]} className="h-56 w-full rounded-2xl object-cover" />
    </div>
  </div>

  {/* ARCHITECTURE */}
  <div className="rounded-[2rem] bg-white/70 p-6">
    <h4 className="mb-4 text-2xl font-semibold">
      AI Risk & Compliance Architecture
    </h4>

    <img
      src={project?.images?.[6]}
      className="w-full rounded-2xl object-cover"
    />
  </div>

  {/* FINAL IMAGE */}
  <div className="overflow-hidden rounded-[1.5rem]">
    <img
      src={project?.images?.[7]}
      alt="Arion Bank final"
      className="h-[320px] w-full object-cover transition duration-700 hover:scale-105"
    />
  </div>

</div>
{/* 🎬 END IMAGE BLOCK */}



      {/* BUSINESS VALUE */}
      <div className="rounded-3xl bg-white/70 p-6">
        <h4 className="mb-5 text-lg font-semibold">Business Value</h4>

        <div className="space-y-5">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#eb5428]">
              Customer Trust
            </p>
            <p className="leading-relaxed text-black/70">
              Arion Bank improves customer confidence by making onboarding faster, clearer, and more secure.
              Biometric access, guided KYC, and transparent portfolio views reduce friction and help users feel
              in control of their financial identity and digital assets.
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#eb5428]">
              Solving Pain Points
            </p>
            <p className="leading-relaxed text-black/70">
              The app addresses fragmented banking, slow compliance checks, and disconnected crypto trading
              experiences. By combining KYC, wealth management, Bitcoin banking, and risk monitoring, it creates
              one intelligent financial command centre.
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#eb5428]">
              Premium Wealth Experience
            </p>
            <p className="leading-relaxed text-black/70">
              Arion Bank positions digital banking as a premium wealth service. AI-driven insights, elegant portfolio
              storytelling, and secure Bitcoin access create a high-value experience for modern investors and
              next-generation private banking customers.
            </p>
         </div>

        </div>
      </div>

    </div>
  );
}


/* =========================================================
   7) MAIN COMPONENT: Portfolio
   What this is:
   - This is the full webpage.
   - State lives here.
   - Functions and effects live here.
   - The return() contains the actual page layout.
========================================================= */

export default function Portfolio() {
  /* =========================================================
     7A) STATE VARIABLES
     State is data that can change while the app is running.
  ========================================================= */

  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [londonTime, setLondonTime] = useState("");

  /* =========================================================
     7B) REF VARIABLE
     videoRef lets the Sound On button control the video directly.
  ========================================================= */

  const videoRef = useRef(null);

  /* =========================================================
     7C) EFFECT: TRACK SCROLL POSITION
     Updates scrollY and scrolled when the user scrolls.
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================================================
     7D) EFFECT: LIVE LONDON CLOCK
     Updates londonTime every second.
  ========================================================= */

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const formattedTime = now.toLocaleString("en-GB", {
        timeZone: "Europe/London",
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setLondonTime(formattedTime);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  /* =========================================================
     7E) FUNCTION: TURN VIDEO SOUND ON
     This function is called when the Sound On button is clicked.
  ========================================================= */

const toggleSound = () => {
  const video = videoRef.current;
  if (!video) return;

  video.muted = !video.muted;
  setSoundOn(!video.muted);
};

  /* =========================================================
     7F) RETURN — the visible page layout
     Everything inside return() appears on screen.
  ========================================================= */

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#161616] selection:bg-black selection:text-white">
      {/* TOP NAVIGATION */}
      <Header scrolled={scrolled} setMenuOpen={setMenuOpen} />

      {/* FULLSCREEN MENU: only appears when menuOpen is true */}
      {menuOpen && <MobileMenu londonTime={londonTime} setMenuOpen={setMenuOpen} />}

      {/* MAIN PAGE CONTENT */}
      <main id="home" className="overflow-hidden pt-32">
        {/* HERO SPLASH SECTION */}
        <section className="relative min-h-screen overflow-hidden px-5 pt-32 md:px-8">
          {/* BACKGROUND VIDEO */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted={!soundOn}
              playsInline
              loop
            >
              <source src="/dolphin.mp4" type="video/mp4" />
            </video>

       <button
      onClick={toggleSound}
      className="absolute bottom-6 right-6 z-20 rounded-full bg-black/70 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white"
         >
  {soundOn ? "Sound Off" : "Sound On"}
       </button>

            <div className="absolute inset-0 bg-black/45" />
          </div>

          {/* HERO TEXT */}
          <div
            className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end pb-16 text-white"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            <div className="max-w-6xl text-[17vw] font-semibold uppercase leading-[0.78] tracking-[-0.08em] md:text-[10vw]">
              {[
                ["Design", 0],
                ["Meets", 0.18],
                ["Intelligence", 0.36],
              ].map(([word, delay]) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, y: 55 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay, ease: "easeOut" }}
                  className={
                    word === "Intelligence"
                      ? "text-[#eb5428] drop-shadow-[0_0_30px_rgba(235,84,40,0.35)]"
                      : ""
                  }
                >
                  {word}
                </motion.div>
              ))}
            </div>

            <p className="mt-6 max-w-md text-sm leading-relaxed tracking-wide text-white/70 md:text-base">
              Blending AI, 3D, and immersive design to create future-ready digital experiences.
            </p>

            {/* HERO CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="rounded-full bg-[#eb5428] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white"
              >
                View My Work
              </a>

              <a href="/cv/Sharon_Graham_AI_Product_Designer_CV.pdf" 
              target="_blank" 
              class="cv-button">
              View / Download CV
              </a>
            </motion.div>
          </div>
        </section>

        {/* MARQUEE SECTION */}
        <section className="border-y border-black/10 py-5">
          <div className="animate-[marquee_22s_linear_infinite] whitespace-nowrap text-5xl font-semibold uppercase tracking-[-0.06em] text-black/80 md:text-7xl">
            Master in Computer Science — AI Innovation Specialist — Figma — React — Python — C4D —
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-black/50">
                Selected work
              </p>
              <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
                Projects with cinematic impact.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer overflow-hidden rounded-[2rem] bg-white/60 p-3 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-black/55">{project.category}</p>
                  </div>
                  <ArrowUpRight />
                </div>
              </motion.article>
            ))}

            
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-black text-white lg:grid-cols-[.9fr_1.1fr]">
            <div className="p-8 md:p-12">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/50">
                Achievements
              </p>
              <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
                A portfolio built for future design.
              </h2>
            </div>

            <div className="grid grid-cols-2 border-white/10 lg:border-l">
              {stats.map(([num, label]) => (
                <div key={label} className="border-b border-white/10 p-8">
                  <p className="text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
                    {num}
                  </p>
                  <p className="mt-2 text-sm text-white/50">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

     
{/* SERVICES SECTION */}
<section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    variants={sectionVariants}
  >
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-black/50">
      What I do
    </p>

    <h2 className="mb-12 max-w-4xl text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
      Creative and technical skills for digital impact.
    </h2>
  </motion.div>

  <div className="space-y-10">
    {skillSections.map((section) => (
      <motion.div
        key={section.title}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionVariants}
        className="border-t border-black/10 pt-8 last:border-b last:pb-8"
      >
        <div className="grid gap-6 md:grid-cols-[0.15fr_0.55fr_1fr] md:items-start">
          <p className="pt-2 text-black/40">{`{${section.num}}`}</p>

          <div>
            <h3 className="text-3xl font-semibold tracking-[-0.05em]">
              {section.title} —
            </h3>
          </div>

          <div>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-black/60">
              {section.text}
            </p>

            <motion.div
              variants={toolsWrapVariants}
              className="grid grid-cols-3 gap-5 sm:grid-cols-4 lg:grid-cols-6"
            >
              {section.tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={toolVariants}
                  whileHover={{ y: -6, scale: 1.08 }}
                  className="group flex w-20 h-20 items-center justify-center rounded-[1.4rem] bg-black p-5 shadow-sm transition-all duration-300 hover:bg-white/70 hover:shadow-xl hover:backdrop-blur-xl"
                  title={tool.name}
                >
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
        {/* ABOUT SECTION */}
        <section id="about" className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white/60 p-8 md:p-12">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-black/50">About</p>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                My Design are about where imagination becomes reality.
             <p>I create immersive digital experiences at the intersection of 3D, AI, motion, and innovation.<p class="spaced"> <br></br>My work focuses on designing intelligent systems that are not only visually engaging but also purposeful, scalable, and human-centred.</p>
              </p>
              </h2>
            </div>

            <div className="rounded-[2rem] bg-[#dfd8c8] p-8 text-xl leading-relaxed text-black/70 md:p-12">
        <p class="spaced">
  This portfolio reflects my design direction, research interests, and a collection of forward-thinking experiments exploring how emerging technologies reshape digital interaction.
</p>

<p class="spaced">
  My approach combines customer-centric thinking with experience-led AI delivery. I design intuitive workflows and interaction models that translate complex systems into seamless user experiences, ensuring alignment between user needs, business goals, and regulatory requirements. By positioning UX as a strategic driver, I deliver solutions that improve usability, enhance stakeholder engagement, and support enterprise AI adoption through clear, structured design.
</p>

<p class="spaced">
  Alongside design, I work across ecosystem and delivery strategy, contributing to the development of scalable AI solutions. I collaborate with cross-functional teams to create prototypes, MVPs, and production-ready systems, enabling rapid experimentation and innovation. Through structured workflows, architecture design, and service thinking, I help organisations reduce operational risk, accelerate SaaS integration, and build future-ready AI capabilities that deliver measurable business value.
</p>

<p class="spaced">
  I specialise in strategic AI design and problem solving, applying advanced UX and service design principles to Agentic AI systems. I translate complex requirements into clear, intuitive applications and lead discovery and Client Zero workshops for AI solutions at scale. I align business, engineering, and partner teams on strategy and execution, influencing senior stakeholders by balancing user needs, technical feasibility, and business priorities. I communicate a long-term design vision across complex enterprise environments while embedding trust, compliance, and governance, strengthening risk mitigation across AI domains.
</p>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE TREE */}
<section id="experience" className="mx-auto max-w-6xl px-5 py-24 md:px-8">

  {/* TOP BADGE */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-10 flex justify-center"
  >
    <div className="rounded-full border border-[#eb5428]/30 bg-[#eb5428]/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#eb5428]">
      Currently Available for Work
    </div>
  </motion.div>

  {/* TITLE */}
  <div className="mb-20 text-center">
    <p className="mb-2 text-sm uppercase tracking-[0.3em] text-black/50">
      About
    </p>
    <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
      Work Experience
    </h2>
  </div>

  <div className="relative mx-auto max-w-5xl">

    {/* CENTER LINE */}
    <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-black/10 md:block" />

    {[
      {
        date: "Nov 2021 – July",
        company: "IBM",
        logo: "🛵",
        side: "left",
        text: "Provided leadership and organised UX/UI workflow for digital products, supporting research, accessibility, collaboration, and AI-focused design methodology.",
      },
      {
        date: "June 2020 – Sep 2021",
        company: "Vodafone",
        logo: "📡",
        side: "right",
        text: "Created scalable UX/UI designs for Vodafone, supporting digital transformation, product discovery, user flows, wireframes, and enterprise design delivery.",
      },
      {
        date: "Jan 2020 – June 2020",
        company: "Ocado",
        logo: "🛒",
        side: "left",
        text: "Designed Android and UX/UI solutions across e-commerce and automation workflows, supporting documentation, stakeholder collaboration, and scalable product design.",
      },
      {
        date: "July 2020",
        company: "Genesis Oil and Gas",
        logo: "🛢️",
        side: "right",
        text: "Updated UX/UI documentation, created prototypes, managed research assets, and supported product analysis for technical and engineering-focused digital platforms.",
      },
    ].map((item, index) => (
      <motion.div
        key={item.company}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className={`relative mb-24 grid gap-6 md:grid-cols-2 ${
          item.side === "left" ? "" : "md:[&>*:first-child]:col-start-2"
        }`}
      >

        {/* CONTENT CARD */}
        <div
          className={`group rounded-[2rem] bg-white/70 p-7 md:p-8 shadow-sm transition duration-500 
          hover:-translate-y-2 hover:bg-black hover:text-white 
          hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)] 
          ${item.side === "left" ? "md:text-right md:mr-20" : "md:text-left md:ml-20"}
          `}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#eb5428]">
            {item.date}
          </p>

          <h3 className="mb-3 text-2xl font-semibold tracking-[-0.04em]">
            {item.company}
          </h3>

          <p className="text-sm leading-relaxed text-black/60 transition duration-300 group-hover:text-white/70">
            {item.text}
          </p>
        </div>

        {/* CENTER NODE */}
        <div className="absolute left-1/2 top-10 hidden -translate-x-1/2 md:block">
          <div className="group flex h-24 w-24 items-center justify-center rounded-full border border-black/10 bg-[#f4f1ea] shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition duration-500 hover:scale-110 hover:border-[#eb5428] hover:bg-[#eb5428]">
            <span className="text-3xl transition duration-300 group-hover:scale-125">
              {item.logo}
            </span>
          </div>
        </div>

      </motion.div>
    ))}

    {/* END BADGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 flex h-24 w-24 items-center justify-center rounded-full bg-[#eb5428] text-center text-xs font-bold uppercase leading-tight text-white shadow-[0_18px_45px_rgba(235,84,40,0.35)]"
    >
      Be Part <br /> of My <br /> Story
    </motion.div>

    {/* 🌳 TREE OF LIFE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black/5 text-5xl shadow-inner transition duration-500 hover:scale-110 hover:bg-[#eb5428]/10">
        🌳
      </div>
    </motion.div>

  </div>
</section>
        {/* CONTACT SECTION */}
        <section id="contact" className="px-5 pb-8 md:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#161616] p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_.6fr] lg:items-end">
              <h2 className="text-6xl font-semibold uppercase leading-[0.86] tracking-[-0.07em] md:text-8xl lg:text-9xl">
                Ready to create?
              </h2>

              <div>
                <p className="mb-6 text-white/60">
                  Let’s build a cinematic, intelligent AI experience that feels alive.
                </p>

                <div className="flex flex-wrap gap-3">
            <a
  href="mailto:amazingshaz@gmail.com?subject=Portfolio%20Enquiry&body=Hi%20Sharon,%20I%20saw%20your%20portfolio."
  className="relative z-50 inline-flex pointer-events-auto items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-black transition hover:bg-black hover:text-white"
>
  <Mail size={15} /> Email me
</a>
                  <a
                    href="https://linkedin.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm"
                  >
                    IG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* PROJECT MODAL */}
      <ProjectModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

      {/* FOOTER */}
      <footer className="px-8 pb-8 text-sm text-black/50">
        <div className="mx-auto flex max-w-7xl justify-between border-t border-black/10 pt-5">
          <p>© 2026 Sharon.G Portfolio</p>
          <p>Self-hosted React portfolio</p>
        </div>
      </footer>

      {/* CUSTOM CSS ANIMATION */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}


