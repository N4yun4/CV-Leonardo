import React from 'react';
import { cvData } from '../data/mockData';

export const Education: React.FC = () => {
    return (
        <section className="bg-stone-50 dark:bg-navy-900 min-h-screen flex items-center px-8 py-20" id="education">
            <div className="max-w-5xl mx-auto w-full">
                <div className="grid md:grid-cols-3 gap-12">

                    {/* Left label */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-px bg-gold-500"></div>
                            <span className="text-xs font-bold tracking-[0.2em] text-gold-600 dark:text-gold-500 uppercase">
                                Background
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white tracking-tight leading-tight">
                            Academic<br />Foundation
                        </h2>
                        <p className="text-slate-500 dark:text-navy-300 leading-relaxed text-sm">
                            A solid education focused on economic systems, management, and rigorous analytical thinking.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="md:col-span-2 space-y-4">
                        {cvData.education.map((edu, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-navy-850 border border-stone-200 dark:border-navy-700 hover:border-gold-400/30 dark:hover:border-gold-500/20 hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 flex-shrink-0 bg-gold-500/10 dark:bg-gold-500/8 rounded-xl flex items-center justify-center border border-gold-500/20">
                                    <span className="material-symbols-outlined text-2xl text-gold-600 dark:text-gold-400">{edu.icon}</span>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-slate-400 dark:text-navy-400 uppercase tracking-widest">{edu.period}</span>
                                    <h4 className="text-base font-bold text-navy-900 dark:text-white mt-0.5 group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors">{edu.institution}</h4>
                                    <p className="text-slate-500 dark:text-navy-300 text-sm">{edu.degree}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
