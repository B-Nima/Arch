import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TabType } from './types';
import Navigation from './components/Navigation';
import ArchitectureView from './components/ArchitectureView';
import ProtocolsView from './components/ProtocolsView';
import CoachesView from './components/CoachesView';
import ModelsView from './components/ModelsView';
import AnalyticsView from './components/AnalyticsView';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('architecture');

  const renderContent = () => {
    switch (activeTab) {
      case 'architecture':
        return <ArchitectureView />;
      case 'protocols':
        return <ProtocolsView />;
      case 'coaches':
        return <CoachesView />;
      case 'models':
        return <ModelsView />;
      case 'analytics':
        return <AnalyticsView />;
      default:
        return <ArchitectureView />;
    }
  };

  return (
    <div className="min-h-screen bg-archery-900">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-gold-500 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold-500" />
                </div>
              </div>
              <span className="text-archery-400 text-sm">АрчиАналитика © 2025</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-archery-400">
              <a href="https://results.archery.ru" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Источник данных
              </a>
              <span>•</span>
              <span>Big Data в стрельбе из лука</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
