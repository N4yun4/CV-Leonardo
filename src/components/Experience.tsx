import React from 'react';
import { cvData } from '../data/mockData';

export const Experience: React.FC = () => {
    return (
        <section className="bg-white dark:bg-navy-950 min-h-screen flex items-center px-8 py-20" id="experience">
            <div className="max-w-3xl mx-auto w-full">
                {/* Header */}
                <div className="mb-16 space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-px bg-gold-500"></div>
                        <span className="text-xs font-bold tracking-[0.2em] text-gold-600 dark:text-gold-500 uppercase">
                            Professional Journey
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white tracking-tight">
                        Work Experience
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative space-y-10">
                    <div className="absolute left-0 top-2 bottom-2 w-px bg-stone-200 dark:bg-navy-800 ml-[7px]"></div>

                    {cvData.experience.map((exp, index) => (
                        <div key={index} className="relative pl-10">
                            {/* Dot */}
                            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gold-500 border-4 border-white dark:border-navy-950 shadow-sm"></div>

                            <div className="group bg-stone-50 dark:bg-navy-900 rounded-2xl border border-stone-200 dark:border-navy-800 p-6 md:p-8 hover:border-gold-400/30 dark:hover:border-gold-500/20 hover:shadow-md transition-all duration-300">
                                {/* Period */}
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-500/10 text-gold-700 dark:text-gold-400 text-xs font-bold rounded-full mb-4 border border-gold-500/20">
                                    <span className="material-symbols-outlined text-xs">calendar_today</span>
                                    {exp.period}
                                </span>
                                <h3 className="text-xl font-bold text-navy-900 dark:text-white">{exp.company}</h3>
                                <p className="text-gold-600 dark:text-gold-500 font-semibold text-sm mb-5">{exp.role}</p>
                                <ul className="space-y-3">
                                    {exp.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex} className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-gold-500 text-base mt-0.5 flex-shrink-0">check_circle</span>
                                            <p className="text-slate-500 dark:text-navy-300 text-sm leading-relaxed">{task}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
