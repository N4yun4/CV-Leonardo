import React from 'react';
import { cvData } from '../data/mockData';

export const Skills: React.FC = () => {
    return (
        <section className="relative bg-white dark:bg-navy-950 min-h-screen flex items-center px-8 py-20 overflow-hidden" id="skills">
            {/* Ambient */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-400/5 dark:bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-200/80 dark:bg-navy-700/40 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{
                backgroundImage: 'linear-gradient(rgba(176,138,48,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(176,138,48,0.4) 1px, transparent 1px)',
                backgroundSize: '72px 72px'
            }}></div>

            <div className="max-w-5xl mx-auto w-full relative z-10">
                {/* Header */}
                <div className="mb-16 space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-px bg-gold-500"></div>
                        <span className="text-xs font-bold tracking-[0.2em] text-gold-600 dark:text-gold-500 uppercase">
                            Core Competencies
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white tracking-tight">
                        Skills &amp; Expertise
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Hard Skills */}
                    <div className="relative p-8 rounded-2xl bg-stone-50 dark:bg-navy-900/80 border border-stone-200 dark:border-navy-800 hover:border-gold-400/40 dark:hover:border-gold-500/25 transition-colors duration-300 overflow-hidden shadow-sm">
                        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-gold-600 dark:text-gold-400 text-xl">laptop_mac</span>
                            </div>
                            <h3 className="text-lg font-bold text-navy-900 dark:text-white">Hard Skills</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cvData.skills.hard.map((skill, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gold-500/8 hover:bg-gold-500/15 text-gold-700 dark:text-gold-300 text-sm font-medium rounded-lg border border-gold-500/20 hover:border-gold-500/40 transition-all duration-200 cursor-default"
                                >
                                    <span className="material-symbols-outlined text-xs text-gold-500">check</span>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="relative p-8 rounded-2xl bg-stone-50 dark:bg-navy-900/80 border border-stone-200 dark:border-navy-800 hover:border-navy-400/30 dark:hover:border-navy-600/50 transition-colors duration-300 overflow-hidden shadow-sm">
                        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-stone-300 dark:via-navy-600/50 to-transparent"></div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-stone-200 dark:bg-navy-700 border border-stone-300 dark:border-navy-600 flex items-center justify-center">
                                <span className="material-symbols-outlined text-slate-500 dark:text-navy-300 text-xl">groups</span>
                            </div>
                            <h3 className="text-lg font-bold text-navy-900 dark:text-white">Soft Skills</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cvData.skills.soft.map((skill, index) => (
                                <span
                                    key={index}
                                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-stone-100 dark:bg-navy-800/80 hover:bg-stone-200 dark:hover:bg-navy-700 text-slate-600 dark:text-navy-300 text-sm font-medium rounded-lg border border-stone-300 dark:border-navy-700 hover:border-stone-400 dark:hover:border-navy-500 transition-all duration-200 cursor-default"
                                >
                                    <span className="material-symbols-outlined text-xs text-slate-400 dark:text-navy-400">check</span>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
