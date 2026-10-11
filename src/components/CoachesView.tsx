import { motion } from 'framer-motion';
import { coachMetrics } from '../data';
import { Star, Users, TrendingUp, Award, Target } from 'lucide-react';

export default function CoachesView() {
  const maxProgress = Math.max(...coachMetrics.map(c => c.avgProgress));

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Метрики тренеров</h2>
        <p className="text-archery-300">
          Анализ эффективности тренерской работы на основе результатов спортсменов
        </p>
      </motion.div>

      {/* Summary cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Тренеров', value: coachMetrics.length, icon: <Users size={20} />, color: 'text-blue-400' },
          { label: 'Спортсменов', value: coachMetrics.reduce((s, c) => s + c.athletes, 0), icon: <Target size={20} />, color: 'text-green-400' },
          { label: 'Ср. прогресс', value: `${(coachMetrics.reduce((s, c) => s + c.avgProgress, 0) / coachMetrics.length).toFixed(1)}%`, icon: <TrendingUp size={20} />, color: 'text-yellow-400' },
          { label: 'Ср. % побед', value: `${(coachMetrics.reduce((s, c) => s + c.winRate, 0) / coachMetrics.length).toFixed(0)}%`, icon: <Award size={20} />, color: 'text-purple-400' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="glass-card rounded-xl p-4 text-center"
          >
            <div className={`${stat.color} mb-2 flex justify-center`}>{stat.icon}</div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-archery-400 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Coach cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coachMetrics.map((coach, index) => (
          <motion.div
            key={coach.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="glass-card rounded-2xl p-6 hover:border-archery-400/30 transition-all group"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-archery-500 to-archery-700 flex items-center justify-center text-white font-bold text-lg">
                  {coach.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-white font-semibold group-hover:text-archery-200 transition-colors">
                    {coach.name}
                  </h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < Math.floor(coach.rating) ? 'text-gold-500 fill-gold-500' : 'text-archery-600'}
                      />
                    ))}
                    <span className="text-xs text-archery-400 ml-1">{coach.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-archery-300">Спортсменов</span>
                  <span className="text-white font-medium">{coach.athletes}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(coach.athletes / 15) * 100}%` }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-archery-300">Прогресс учеников</span>
                  <span className="text-white font-medium">{coach.avgProgress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(coach.avgProgress / maxProgress) * 100}%` }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-archery-300">% побед</span>
                  <span className="text-white font-medium">{coach.winRate}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${coach.winRate}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
                  />
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-xs text-archery-400 mb-2 block">Специализация</span>
              <div className="flex flex-wrap gap-2">
                {coach.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="px-2 py-1 rounded-full text-xs bg-archery-600/30 text-archery-200 border border-archery-500/20"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Methodology note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card rounded-xl p-5 border-l-4 border-l-archery-400"
      >
        <h4 className="text-white font-semibold mb-2">Методология расчёта</h4>
        <p className="text-sm text-archery-300 leading-relaxed">
          Метрики рассчитываются на основе данных протоколов соревнований с results.archery.ru.
          <strong className="text-white"> Прогресс</strong> — среднее улучшение результатов учеников за сезон.
          <strong className="text-white"> % побед</strong> — доля призовых мест среди всех выступлений учеников.
          <strong className="text-white"> Рейтинг</strong> — комплексная оценка по 10 параметрам включая стабильность, рост и разнообразие.
        </p>
      </motion.div>
    </div>
  );
}
