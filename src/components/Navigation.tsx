import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TabType } from '../types';
import {
  Target, Database, Users, BookOpen, BarChart3,
  Menu, X, ChevronRight
} from 'lucide-react';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
  { id: 'architecture', label: 'Архитектура', icon: <Database size={18} /> },
  { id: 'protocols', label: 'Протоколы', icon: <BookOpen size={18} /> },
  { id: 'coaches', label: 'Тренеры', icon: <Users size={18} /> },
  { id: 'models', label: 'Модели', icon: <Target size={18} /> },
  { id: 'analytics', label: 'Аналитика', icon: <BarChart3 size={18} /> },
];

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="glass-card sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full border-2 border-gold-500 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full border-2 border-red-500 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg leading-tight">АрчиАналитика</h1>
              <p className="text-archery-300 text-xs">Big Data в стрельбе из лука</p>
            </div>
          </div>

          {/* Desktop tabs */}
          <div className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-archery-600/50 text-white shadow-lg shadow-archery-600/20'
                    : 'text-archery-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Source badge */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://results.archery.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium hover:bg-green-500/20 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              results.archery.ru
              <ChevronRight size={12} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <div className="px-4 py-3 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setMobileOpen(false); }}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-archery-600/50 text-white'
                      : 'text-archery-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
