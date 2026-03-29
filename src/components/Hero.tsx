import React from 'react';
import { cvData } from '../data/mockData';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50 dark:bg-navy-950" id="hero">
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gold-400/10 dark:bg-gold-500/8 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-300/10 dark:bg-navy-600/30 rounded-full blur-[120px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-stone-200/60 dark:bg-navy-800/60 rounded-full blur-[80px]"></div>
                {/* Subtle grid */}
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.025]" style={{
                    backgroundImage: 'linear-gradient(rgba(176,138,48,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(176,138,48,0.5) 1px, transparent 1px)',
                    backgroundSize: '72px 72px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-5xl w-full mx-auto px-8 py-28 text-center md:text-left">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-xs font-semibold tracking-widest uppercase mb-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
                    Open to Work
                </div>

                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-navy-900 dark:text-white tracking-tighter leading-[1.03] mb-5">
                    {cvData.personal.name}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-400 dark:from-gold-300 dark:to-gold-500">
                        {cvData.personal.lastName}
                    </span>
                </h1>

                {/* Divider */}
                <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                    <div className="h-px w-10 bg-gold-500/60"></div>
                    <p className="text-slate-500 dark:text-navy-300 text-sm font-semibold tracking-[0.15em] uppercase">
                        {cvData.personal.title}
                    </p>
                    <div className="h-px flex-1 max-w-xs bg-stone-300 dark:bg-navy-800"></div>
                </div>

                {/* Contact chips */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-navy-800/60 border border-stone-300 dark:border-navy-700 text-slate-600 dark:text-navy-300 text-sm hover:border-gold-400/50 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-base text-gold-500">mail</span>
                        {cvData.personal.email}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-navy-800/60 border border-stone-300 dark:border-navy-700 text-slate-600 dark:text-navy-300 text-sm hover:border-gold-400/50 transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-base text-gold-500">location_on</span>
                        {cvData.personal.location}
                    </div>
                </div>

                {/* Cover Letter card */}
                <div className="relative p-8 md:p-10 rounded-2xl border border-stone-200 dark:border-navy-700 bg-white dark:bg-navy-900/70 backdrop-blur-sm max-w-3xl mx-auto md:mx-0 hover:border-gold-400/30 transition-colors duration-500 shadow-sm dark:shadow-none">
                    <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
                    <div className="flex gap-3 items-center mb-5">
                        <div className="w-px h-5 bg-gold-500"></div>
                        <span className="text-xs font-bold tracking-[0.2em] text-gold-600 dark:text-gold-500/70 uppercase">Cover Letter</span>
                    </div>
                    <p className="text-slate-500 dark:text-navy-300 text-base md:text-lg leading-relaxed italic">
                        "{cvData.personal.coverLetter}"
                    </p>
                </div>
            </div>
        </section>
    );
};
