import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-100 dark:bg-navy-950 border-t border-stone-200 dark:border-navy-800 py-10 px-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-slate-500 dark:text-navy-400">
                    © 2026 Leonardo Morris
                </p>
                <a
                    href="/CV-Leonardo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-slate-400 dark:text-navy-500 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                >
                    <span className="material-symbols-outlined text-base">download</span>
                    Portfolio
                </a>
            </div>
        </footer>
    );
};
