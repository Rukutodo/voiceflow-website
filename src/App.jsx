import React from 'react';
import GhostFibers from './components/GhostFibers';
import './index.css';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-gray-950 text-white overflow-hidden selection:bg-indigo-500">
      
      {/* Ghost Fibers WebGL Background */}
      <div className="fixed inset-0 z-0">
        <GhostFibers
          lineColor="#140E35"
          glowColor="#3437A0"
          speed={0.2}
          scale={2}
          rotation={0}
          rotationSpeed={0.25}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.6}
          brightness={2}
          blueBoost={1.25}
          vignette={0.8}
          grain={0.05}
          lightMode={false}
          dpr={1}
          fps={60}
          paused={false}
        />
      </div>

      <div className="absolute inset-0 bg-gray-950/60 z-0 pointer-events-none mix-blend-overlay"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-6 text-center">
        
        <div className="mb-6 p-4 rounded-full bg-indigo-900/30 border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.3)] backdrop-blur-md">
            <svg className="w-16 h-16 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
            </svg>
        </div>

        <h1 className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mb-6 tracking-tighter drop-shadow-2xl">
          VoiceFlow
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 max-w-2xl mb-12 font-light drop-shadow-md leading-relaxed">
          The stunning, Rust-powered AI desktop assistant.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://github.com/Rukutodo/voiceflow/releases/latest" className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-2xl font-bold text-xl shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all transform hover:-translate-y-1">
              Download for Windows
            </a>
            <a href="https://github.com/Rukutodo/voiceflow" target="_blank" className="px-10 py-5 bg-gray-900/60 hover:bg-gray-800 border border-gray-700 rounded-2xl font-bold text-xl backdrop-blur-md transition-all">
              View Source
            </a>
        </div>
      </div>
    </div>
  );
}
