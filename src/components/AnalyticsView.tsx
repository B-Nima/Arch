import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, AreaChart, Area, Legend
} from 'recharts';
import { scoreDistribution, categoryData, regionStats } from '../data';
import { BarChart3, TrendingUp, MapPin, Award } from 'lucide-react';

const radarData = [
  { metric: 'Точность', value: 85, fullMark: 100 },
  { metric: 'Стабильность', value: 72, fullMark: 100 },
  { metric: 'Выносливость', value: 78, fullMark: 100 },
  { metric: 'Психология', value: 68, fullMark: 100 },
  { metric: 'Техника', value: 90, fullMark: 100 },
  { metric: 'Скорость', value: 65, fullMark: 100 },
];

type ChartType = 'line' | 'bar' | 'radar' | 'area';

export default function AnalyticsView() {
  const [activeChart, setActiveChart] = useState<ChartType>('line');

  const chartButtons: { id: ChartType; label: string; icon: React.ReactNode }[] = [
    { id: 'line', label: 'Динамика', icon: <TrendingUp size={16} /> },
    { id: 'bar', label: 'Категории', icon: <BarChart3 size={16} /> },
    { id: 'radar', label: 'Профиль', icon: <Award size={16} /> },
    { id: 'area', label: 'Регионы', icon: <MapPin size={16} /> },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Аналитика</h2>
        <p className="text-archery-300">
          Визуализация ключевых метрик на основе данных соревнований
        </p>
      </motion.div>

      {/* Chart selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-2"
      >
        {chartButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveChart(btn.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeChart === btn.id
                ? 'bg-archery-600/50 text-white shadow-lg'
                : 'text-archery-300 hover:text-white hover:bg-white/5'
            }`}
          >
            {btn.icon}
            {btn.label}
          </button>
        ))}
      </motion.div>

      {/* Main chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-2xl p-6"
      >
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            {activeChart === 'line' ? (
              <LineChart data={scoreDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="#9d7edf" fontSize={12} />
                <YAxis stroke="#9d7edf" fontSize={12} domain={[630, 710]} />
                <Tooltip
                  contentStyle={{ background: 'rgba(26, 10, 46, 0.9)', border: '1px solid rgba(124, 92, 191, 0.3)', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                  itemStyle={{ color: '#f5a623' }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#f5a623"
                  strokeWidth={3}
                  dot={{ fill: '#f5a623', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, fill: '#ffc857' }}
                />
              </LineChart>
            ) : activeChart === 'bar' ? (
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#9d7edf" fontSize={11} />
                <YAxis stroke="#9d7edf" fontSize={12} />
                <Tooltip
                  contentStyle={{ background: 'rgba(26, 10, 46, 0.9)', border: '1px solid rgba(124, 92, 191, 0.3)', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ color: '#bea0ff' }} />
                <Bar dataKey="athletes" fill="#7c5cbf" name="Спортсменов" radius={[4, 4, 0, 0]} />
                <Bar dataKey="gold" fill="#f5a623" name="Золото" radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : activeChart === 'radar' ? (
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="metric" stroke="#9d7edf" fontSize={12} />
                <PolarRadiusAxis stroke="rgba(255,255,255,0.2)" fontSize={10} />
                <Radar
                  name="Профиль"
                  dataKey="value"
                  stroke="#f5a623"
                  fill="#f5a623"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{ background: 'rgba(26, 10, 46, 0.9)', border: '1px solid rgba(124, 92, 191, 0.3)', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
              </RadarChart>
            ) : (
              <AreaChart data={regionStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="region" stroke="#9d7edf" fontSize={11} />
                <YAxis stroke="#9d7edf" fontSize={12} />
                <Tooltip
                  contentStyle={{ background: 'rgba(26, 10, 46, 0.9)', border: '1px solid rgba(124, 92, 191, 0.3)', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ color: '#bea0ff' }} />
                <Area type="monotone" dataKey="gold" stackId="1" stroke="#f5a623" fill="#f5a623" fillOpacity={0.6} name="Золото" />
                <Area type="monotone" dataKey="silver" stackId="1" stroke="#9d7edf" fill="#9d7edf" fillOpacity={0.6} name="Серебро" />
                <Area type="monotone" dataKey="bronze" stackId="1" stroke="#e67e22" fill="#e67e22" fillOpacity={0.6} name="Бронза" />
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Top performers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-xl p-5"
        >
          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Award size={18} className="text-gold-500" />
            Топ-5 по среднему баллу
          </h4>
          <div className="space-y-3">
            {[
              { name: 'Галсанов Г.', score: 698, delta: '+12' },
              { name: 'Цыбиков Б.', score: 685, delta: '+5' },
              { name: 'Смирнов Д.', score: 680, delta: '+3' },
              { name: 'Степанова В.', score: 672, delta: '+8' },
              { name: 'Ким А.', score: 670, delta: '+1' },
            ].map((item, index) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    index === 0 ? 'bg-gold-500/30 text-gold-400' :
                    index === 1 ? 'bg-gray-400/30 text-gray-300' :
                    index === 2 ? 'bg-orange-600/30 text-orange-400' :
                    'bg-white/10 text-archery-400'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="text-sm text-white">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-white">{item.score}</span>
                  <span className="text-xs text-green-400">{item.delta}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Regional distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-xl p-5"
        >
          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-blue-400" />
            Регионы
          </h4>
          <div className="space-y-3">
            {regionStats.slice(0, 5).map((region) => (
              <div key={region.region}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-archery-200">{region.region}</span>
                  <span className="text-white font-medium">{region.total}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-archery-400 to-archery-500"
                    style={{ width: `${(region.total / 62) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Data insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-xl p-5"
        >
          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
            <TrendingUp size={18} className="text-green-400" />
            Инсайты
          </h4>
          <div className="space-y-3 text-sm text-archery-300">
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <span className="text-green-400 font-medium">↑ Рост:</span> Средний балл вырос на 50 пунктов за год
            </div>
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <span className="text-blue-400 font-medium">📊 Тренд:</span> Блочный лук показывает лучшую динамику
            </div>
            <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <span className="text-purple-400 font-medium">🎯 Прогноз:</span> 3 спортсмена готовы к нормативу МСМК
            </div>
            <div className="p-3 rounded-lg bg-gold-500/10 border border-gold-500/20">
              <span className="text-gold-400 font-medium">⚡ Рекомендация:</span> Увеличить объём скоростной работы
            </div>
          </div>
        </motion.div>
      </div>

      {/* Data volume stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card rounded-xl p-5"
      >
        <h4 className="text-white font-semibold mb-4">Объём обработанных данных</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: 'Протоколов', value: '15,420', icon: '📄' },
            { label: 'Спортсменов', value: '3,280', icon: '🏹' },
            { label: 'Соревнований', value: '842', icon: '🏆' },
            { label: 'Тренеров', value: '156', icon: '👨‍🏫' },
            { label: 'Записей в БД', value: '42,390', icon: '💾' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-3 rounded-lg bg-white/5">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-lg font-bold text-white">{stat.value}</div>
              <div className="text-xs text-archery-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
