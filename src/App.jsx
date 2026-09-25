import React from 'react';
import { motion } from 'framer-motion';
import './index.css';

export default function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-[#ededed] font-sans selection:bg-[#222] selection:text-white overflow-x-hidden antialiased">
      
      {/* Top Nav (Minimal) */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/80 backdrop-blur-md z-50">
        <div className="font-bold tracking-tight text-xl">Voxa</div>
        <a href="https://github.com/Rukutodo/Voxa" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">GitHub</a>
      </nav>

      {/* Scrolling Content Container */}
      <div className="relative z-20 flex flex-col items-center w-full pt-20">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center w-full min-h-[85vh] p-6 text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="mb-8 p-3 rounded-md bg-white/5 border border-white/10"
          >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6"
          >
            Voxa
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-normal leading-relaxed"
          >
            The ultimate Rust-powered AI desktop assistant. <br/>
            <span className="text-white">Speak naturally. Process locally.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
              <a href="https://github.com/Rukutodo/Voxa/releases/latest" className="group px-6 py-3 bg-white hover:bg-gray-200 text-black rounded font-medium text-sm transition-all flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download for Windows
              </a>
              <a href="#about" className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/20 text-white rounded font-medium text-sm transition-all flex items-center justify-center">
                Learn More
              </a>
          </motion.div>
        </section>

        {/* How it Works Section */}
        <section className="py-24 px-6 w-full max-w-5xl mx-auto border-t border-white/10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-16">
                <h2 className="text-3xl font-semibold mb-4 text-white tracking-tight">How Voxa Works</h2>
                <p className="text-lg text-gray-400 max-w-2xl">A seamless loop from your microphone to local AI processing, right back to your speakers.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div variants={fadeInUp} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg relative">
                    <div className="text-xs font-mono text-gray-500 mb-4">01</div>
                    <h3 className="text-lg font-medium mb-3 text-white">Trigger</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">Press your custom global hotkey from anywhere in Windows to instantly summon the Voxa overlay.</p>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg relative">
                    <div className="text-xs font-mono text-gray-500 mb-4">02</div>
                    <h3 className="text-lg font-medium mb-3 text-white">Speak</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">Speak your request. Your audio is transcribed entirely on-device using OpenAI's whisper model.</p>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg relative">
                    <div className="text-xs font-mono text-gray-500 mb-4">03</div>
                    <h3 className="text-lg font-medium mb-3 text-white">Respond</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">The local AI processes your intent, and the Qwen TTS engine generates an ultra-realistic voice response instantly.</p>
                </motion.div>
            </motion.div>
        </section>

        {/* About / Under the Hood Section */}
        <section id="about" className="py-24 px-6 w-full max-w-5xl mx-auto border-t border-white/10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
                <h2 className="text-3xl font-semibold mb-4 text-white tracking-tight">Under the Hood</h2>
                <p className="text-lg text-gray-400 max-w-2xl">Voxa isn't just another API wrapper. It is a completely native, bare-metal application.</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg">
                    <h3 className="text-xl font-medium mb-3 text-white">Powered by Qwen TTS</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        Integrating state-of-the-art audio models, Voxa understands context, nuance, and natural speech patterns better than traditional assistants. 
                        Model inference happens locally via a Python sidecar—no cloud latency, no privacy risks.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2"><span className="text-white">—</span> Ultra-low latency voice synthesis</li>
                        <li className="flex items-center gap-2"><span className="text-white">—</span> Highly accurate real-time transcription</li>
                        <li className="flex items-center gap-2"><span className="text-white">—</span> Zero data sent to external servers</li>
                    </ul>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg">
                    <h3 className="text-xl font-medium mb-3 text-white">Built with Tauri & Rust</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        Electron is heavy. Voxa uses Tauri, leveraging your system's native webview wrapped in an incredibly fast Rust backend. This means it uses a fraction of the RAM while maintaining a fluid web UI.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2"><span className="text-white">—</span> Minimal memory footprint</li>
                        <li className="flex items-center gap-2"><span className="text-white">—</span> Lightning-fast startup times</li>
                        <li className="flex items-center gap-2"><span className="text-white">—</span> Deep OS integration & hotkeys</li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 px-6 w-full max-w-5xl mx-auto border-t border-white/10">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-semibold mb-12 text-white tracking-tight">Why Voxa?</motion.h2>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div variants={fadeInUp} className="p-6 border border-white/10 rounded-lg">
                    <h4 className="text-base font-medium mb-2 text-white">Instant Response</h4>
                    <p className="text-sm text-gray-400">By running inference locally via our optimized Rust pipeline, the time from speaking to action is nearly instantaneous.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="p-6 border border-white/10 rounded-lg">
                    <h4 className="text-base font-medium mb-2 text-white">Sleek Overlay UI</h4>
                    <p className="text-sm text-gray-400">A beautiful, non-intrusive UI that hovers over your desktop. Press a global hotkey, speak your mind, and get back to work.</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="p-6 border border-white/10 rounded-lg">
                    <h4 className="text-base font-medium mb-2 text-white">Fully Open Source</h4>
                    <p className="text-sm text-gray-400">Don't like a feature? Change it. Voxa is 100% open-source and hackable. Check out the code and contribute.</p>
                </motion.div>
            </motion.div>
        </section>

        {/* Getting Started / Installation Guide */}
        <section className="py-24 px-6 w-full max-w-5xl mx-auto border-t border-white/10 mb-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
                <h2 className="text-3xl font-semibold mb-4 text-white tracking-tight">Getting Started</h2>
                <p className="text-lg text-gray-400">Everything you need to get Voxa running locally on your machine.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
                
                {/* Hardware & Software Requirements */}
                <motion.div variants={fadeInUp} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg">
                    <h3 className="text-xl font-medium mb-6 text-white">System Requirements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-medium text-gray-300 mb-3">Hardware</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><strong className="text-white font-medium">Minimum:</strong> 16GB RAM, Modern Multi-core CPU.</li>
                                <li><strong className="text-white font-medium">Recommended:</strong> NVIDIA GPU with 8GB+ VRAM (e.g., RTX 3060+) for near-instantaneous generation.</li>
                                <li><strong className="text-white font-medium">Storage:</strong> ~10GB of free space.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-300 mb-3">Software</h4>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li><strong className="text-white font-medium">Windows 10 or 11</strong></li>
                                <li><strong className="text-white font-medium">Python 3.10+</strong> (Must be added to system PATH).</li>
                                <li><strong className="text-white font-medium">FFmpeg</strong> (Required for Whisper audio decoding).</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Downloads */}
                <motion.div variants={fadeInUp} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg">
                    <h3 className="text-xl font-medium mb-6 text-white">Required Downloads</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 border border-white/5 rounded-md bg-white/5">
                            <h4 className="font-medium text-white mb-1">1. Voxa Executable</h4>
                            <p className="text-sm text-gray-400 mb-4">The main compiled binary and user interface.</p>
                            <a href="https://github.com/Rukutodo/Voxa/releases/latest" className="text-xs px-4 py-2 bg-white text-black hover:bg-gray-200 rounded font-medium inline-block transition-colors">Download v1.0.0</a>
                        </div>
                        <div className="p-5 border border-white/5 rounded-md bg-white/5">
                            <h4 className="font-medium text-white mb-1">2. Qwen TTS Models</h4>
                            <p className="text-sm text-gray-400 mb-3">Download the model weights directly using the CLI.</p>
                            <code className="block bg-black text-gray-300 px-3 py-2 rounded text-xs font-mono border border-white/10 mb-4 overflow-x-auto select-all whitespace-nowrap">huggingface-cli download Qwen/Qwen-Audio --local-dir ./models</code>
                            <a href="https://huggingface.co/Qwen" target="_blank" rel="noreferrer" className="text-xs px-4 py-2 border border-white/20 hover:bg-white/5 rounded font-medium text-white inline-block transition-colors">View on Hugging Face</a>
                        </div>
                    </div>
                </motion.div>

                {/* Setup Steps */}
                <motion.div variants={fadeInUp} className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg">
                    <h3 className="text-xl font-medium mb-6 text-white">Installation Steps</h3>
                    <div className="space-y-6 text-gray-300">
                        <div className="flex gap-4">
                            <div className="text-sm font-mono text-gray-500 mt-1">01</div>
                            <div>
                                <h4 className="font-medium text-white text-base mb-1">Verify Dependencies</h4>
                                <p className="text-sm text-gray-400">Open a terminal and run <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono text-white">python --version</code> and <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono text-white">ffmpeg -version</code>.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-sm font-mono text-gray-500 mt-1">02</div>
                            <div>
                                <h4 className="font-medium text-white text-base mb-1">First Launch</h4>
                                <p className="text-sm text-gray-400">Run <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono text-white">Voxa.exe</code>. It will unpack the Python sidecar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-sm font-mono text-gray-500 mt-1">03</div>
                            <div>
                                <h4 className="font-medium text-white text-base mb-1">Configure Models</h4>
                                <p className="text-sm text-gray-400">Move your downloaded models into <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono text-white">%APPDATA%\Voxa\models</code>.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-sm font-mono text-gray-500 mt-1">04</div>
                            <div>
                                <h4 className="font-medium text-white text-base mb-1">Start Talking!</h4>
                                <p className="text-sm text-gray-400">Use the global hotkey (default: <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono text-white">Ctrl + Space</kbd>) to bring up Voxa.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
            </motion.div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-black py-8 text-center border-t border-white/10 z-20">
            <p className="text-gray-500 mb-2 text-sm">Crafted by Rukutodo</p>
            <a href="https://github.com/Rukutodo/Voxa" target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">
                View Repository
            </a>
        </footer>

      </div>
    </div>
  );
}
