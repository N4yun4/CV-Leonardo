import React from 'react';
import { cvData } from '../data/mockData';

export const About: React.FC = () => {
    return (
        <section className="bg-stone-50 dark:bg-navy-900 min-h-screen flex items-center px-8 py-20" id="about">
            <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <div className="relative group order-2 md:order-1">
                    <div className="absolute -inset-3 bg-gold-400/10 dark:bg-gold-400/5 rounded-3xl blur-2xl group-hover:bg-gold-400/15 transition-all duration-700"></div>
                    <img
                        alt="Professional Portrait"
                        className="relative rounded-2xl w-full max-w-sm mx-auto aspect-[3/4] object-cover shadow-2xl"
                        src={`${import.meta.env.BASE_URL}${cvData.about.image}`}
                    />
                </div>

                {/* Text */}
                <div className="space-y-6 order-1 md:order-2">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-px bg-gold-500"></div>
                        <span className="text-xs font-bold tracking-[0.2em] text-gold-600 dark:text-gold-500 uppercase">
                            Profile Summary
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white tracking-tight leading-tight">
                        {cvData.about.summary}
                    </h2>
                    <div className="space-y-4 text-slate-500 dark:text-navy-300 text-base leading-relaxed">
                        {cvData.about.paragraphs.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-4 pt-4">
                        {cvData.about.stats.map((stat, index) => (
                            <div key={index} className="flex-1 px-5 py-4 bg-white dark:bg-navy-800 rounded-xl border border-stone-200 dark:border-navy-700">
                                <span className="block text-2xl font-extrabold text-gold-600 dark:text-gold-400">{stat.value}</span>
                                <span className="text-xs uppercase tracking-widest text-slate-400 dark:text-navy-400 mt-1 block">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
