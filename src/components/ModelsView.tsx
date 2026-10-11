import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trainingModels } from '../data';
import { Target, Clock, Zap, ChevronRight, CheckCircle } from 'lucide-react';

export default function ModelsView() {
  const [selectedModel, setSelectedModel] = useState(trainingModels[0].id);
  const model = trainingModels.find(m => m.id === selectedModel)!;

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Модели подготовки</h2>
        <p className="text-archery-300">
          Периодизация тренировочного процесса на основе анализа данных
        </p>
      </motion.div>

      {/* Model selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {trainingModels.map((m, index) => (
          <motion.button
            key={m.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            onClick={() => setSelectedModel(m.id)}
            className={`glass-card rounded-xl p-5 text-left transition-all ${
              selectedModel === m.id
                ? 'border-archery-400/50 glow-border scale-105'
                : 'hover:border-archery-400/20 hover:scale-102'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Target size={20} className={selectedModel === m.id ? 'text-archery-300' : 'text-archery-500'} />
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedModel === m.id ? 'bg-archery-500/30 text-archery-200' : 'bg-white/5 text-archery-400'
              }`}>
                {m.targetCategory}
              </span>
            </div>
            <h4 className="text-white font-semibold mb-1">{m.name}</h4>
            <p className="text-xs text-archery-400 line-clamp-2">{m.description}</p>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-archery-400 to-gold-500"
                  style={{ width: `${m.effectiveness}%` }}
                />
              </div>
              <span className="text-xs text-archery-300">{m.effectiveness}%</span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Model details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedModel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{model.name}</h3>
              <p className="text-sm text-archery-300">{model.description}</p>
            </div>
            <div className="mt-3 md:mt-0 flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold-400">{model.effectiveness}%</div>
                <div className="text-xs text-archery-400">Эффективность</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{model.phases.length}</div>
                <div className="text-xs text-archery-400">Фаз</div>
              </div>
            </div>
          </div>

          {/* Phases timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-archery-400 via-archery-500 to-archery-600 hidden md:block" />
            
            <div className="space-y-4">
              {model.phases.map((phase, index) => (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {/* Phase indicator */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
                      phase.intensity >= 80
                        ? 'bg-gradient-to-br from-red-500 to-orange-500 text-white'
                        : phase.intensity >= 50
                        ? 'bg-gradient-to-br from-archery-500 to-archery-600 text-white'
                        : 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white'
                    }`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Phase content */}
                  <div className="flex-1 glass-card rounded-xl p-4 hover:border-archery-400/20 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h5 className="text-white font-semibold">{phase.name}</h5>
                      <div className="flex items-center gap-3 text-xs text-archery-400">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {phase.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Zap size={12} className={
                            phase.intensity >= 80 ? 'text-red-400' :
                            phase.intensity >= 50 ? 'text-yellow-400' : 'text-blue-400'
                          } />
                          Интенсивность: {phase.intensity}%
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-archery-300 mb-3">{phase.focus}</p>
                    <div className="w-full h-2 rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${phase.intensity}%` }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                        className={`h-full rounded-full ${
                          phase.intensity >= 80
                            ? 'bg-gradient-to-r from-red-500 to-orange-500'
                            : phase.intensity >= 50
                            ? 'bg-gradient-to-r from-archery-400 to-archery-500'
                            : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key metrics */}
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Общая длительность', value: model.phases.reduce((sum, p) => sum + parseInt(p.duration), 0) + ' нед.' },
              { label: 'Пик нагрузки', value: `${Math.max(...model.phases.map(p => p.intensity))}%` },
              { label: 'Целевая категория', value: model.targetCategory },
              { label: 'Применимость', value: 'Высокая' },
            ].map((metric) => (
              <div key={metric.label} className="text-center p-3 rounded-lg bg-white/5">
                <div className="text-sm font-semibold text-white">{metric.value}</div>
                <div className="text-xs text-archery-400 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Integration note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card rounded-xl p-5"
      >
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <CheckCircle size={18} className="text-green-400" />
          Интеграция с данными соревнований
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-archery-300">
          <div className="flex items-start gap-2">
            <ChevronRight size={16} className="text-archery-400 flex-shrink-0 mt-0.5" />
            <span>Автоматическая корректировка модели на основе результатов с results.archery.ru</span>
          </div>
          <div className="flex items-start gap-2">
            <ChevronRight size={16} className="text-archery-400 flex-shrink-0 mt-0.5" />
            <span>Сравнение фактической и плановой динамики спортсмена</span>
          </div>
          <div className="flex items-start gap-2">
            <ChevronRight size={16} className="text-archery-400 flex-shrink-0 mt-0.5" />
            <span>Рекомендации по корректировке тренировочного процесса</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
