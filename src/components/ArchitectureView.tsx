import { dataPipelines } from '../data';
import {
  Database, ArrowRight, Globe, Cpu, HardDrive,
  RefreshCw, Activity, Zap, Shield, Cloud
} from 'lucide-react';

const architectureLayers = [
  {
    title: 'Сбор данных',
    color: 'from-blue-500 to-cyan-500',
    icon: <Globe size={24} />,
    items: [
      'Парсинг results.archery.ru',
      'Импорт PDF протоколов',
      'API фитнес-трекеров',
      'Видео-аналитика стрельбы',
    ],
  },
  {
    title: 'Обработка',
    color: 'from-purple-500 to-pink-500',
    icon: <Cpu size={24} />,
    items: [
      'OCR распознавание',
      'NLP анализ комментариев',
      'Computer Vision',
      'Статистическая обработка',
    ],
  },
  {
    title: 'Хранение',
    color: 'from-green-500 to-emerald-500',
    icon: <HardDrive size={24} />,
    items: [
      'PostgreSQL (структурированные)',
      'MongoDB (документы)',
      'S3 (видео/изображения)',
      'Redis (кэш/очереди)',
    ],
  },
  {
    title: 'Аналитика',
    color: 'from-orange-500 to-yellow-500',
    icon: <Activity size={24} />,
    items: [
      'ML модели прогноза',
      'Анализ динамики',
      'Сравнение спортсменов',
      'Рекомендации тренеру',
    ],
  },
];

export default function ArchitectureView() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Архитектура системы</h2>
        <p className="text-archery-300 max-w-2xl mx-auto">
          Многоуровневая платформа сбора и анализа данных соревнований по стрельбе из лука.
          Источник первичных данных — results.archery.ru
        </p>
      </div>

      {/* Architecture diagram */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {architectureLayers.map((layer, index) => (
          <div
            key={layer.title}
            className="glass-card rounded-2xl p-5 glow-border relative overflow-hidden group hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center text-white mb-4`}>
                {layer.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{layer.title}</h3>
              <ul className="space-y-2">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-archery-200">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${layer.color}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {index < 3 && (
              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                <ArrowRight size={20} className="text-archery-400" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Data pipelines */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <RefreshCw size={20} className="text-archery-400" />
          Пайплайны данных
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataPipelines.map((pipeline) => (
            <div
              key={pipeline.id}
              className="glass-card rounded-xl p-4 hover:border-archery-400/30 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  pipeline.status === 'active' ? 'bg-green-500/20 text-green-400' :
                  pipeline.status === 'idle' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {pipeline.status === 'active' ? '● Активен' : pipeline.status === 'idle' ? '○ Ожидание' : '✕ Ошибка'}
                </span>
                <span className="text-xs text-archery-400">{pipeline.lastSync}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Database size={14} className="text-blue-400" />
                <span className="text-sm text-white font-medium truncate">{pipeline.source}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-archery-300">
                <Zap size={12} />
                <span>{pipeline.processor}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-archery-300 mt-1">
                <Cloud size={12} />
                <span>{pipeline.output}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-archery-400">Записей обработано</span>
                <span className="text-sm font-mono text-gold-400">{pipeline.recordsProcessed.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Shield size={20} className="text-archery-400" />
          Технологический стек
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Python', desc: 'Парсинг, ML', color: 'text-blue-400' },
            { name: 'PostgreSQL', desc: 'Основная БД', color: 'text-cyan-400' },
            { name: 'Apache Airflow', desc: 'Оркестрация', color: 'text-red-400' },
            { name: 'TensorFlow', desc: 'ML модели', color: 'text-orange-400' },
            { name: 'React', desc: 'Frontend', color: 'text-sky-400' },
            { name: 'FastAPI', desc: 'REST API', color: 'text-green-400' },
            { name: 'Docker', desc: 'Контейнеры', color: 'text-blue-300' },
            { name: 'Redis', desc: 'Кэширование', color: 'text-red-300' },
          ].map((tech) => (
            <div key={tech.name} className="flex flex-col items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <span className={`font-semibold text-sm ${tech.color}`}>{tech.name}</span>
              <span className="text-xs text-archery-400 mt-1">{tech.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
