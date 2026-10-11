import { useState } from 'react';
import { competitions, athletes } from '../data';
import {
  Search, Filter, Trophy, MapPin, Calendar, Users,
  TrendingUp, TrendingDown, Minus, ExternalLink, ChevronDown
} from 'lucide-react';

export default function ProtocolsView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAthletes, setShowAthletes] = useState(false);

  const filteredAthletes = athletes.filter(a => {
    const matchesSearch = a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || a.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const statusColors = {
    completed: 'bg-green-500/20 text-green-400 border-green-500/30',
    ongoing: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    upcoming: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };

  const statusLabels = {
    completed: 'Завершено',
    ongoing: 'Идёт сейчас',
    upcoming: 'Предстоящее',
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-1">Протоколы соревнований</h2>
          <p className="text-archery-300 text-sm">
            Данные из{' '}
            <a href="https://results.archery.ru" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">
              results.archery.ru
            </a>
          </p>
        </div>
        <a
          href="https://results.archery.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-archery-600/50 text-white text-sm font-medium hover:bg-archery-600/70 transition-colors"
        >
          <ExternalLink size={14} />
          Открыть источник
        </a>
      </div>

      {/* Competitions */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Trophy size={18} className="text-gold-500" />
          Соревнования
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitions.map((comp) => (
            <div
              key={comp.id}
              className="glass-card rounded-xl p-5 hover:border-archery-400/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusColors[comp.status]}`}>
                  {statusLabels[comp.status]}
                </span>
                <span className="text-xs text-archery-400">{comp.type}</span>
              </div>
              <h4 className="text-white font-semibold mb-3 group-hover:text-archery-200 transition-colors">
                {comp.name}
              </h4>
              <div className="space-y-2 text-sm text-archery-300">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-archery-400" />
                  <span>{new Date(comp.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-archery-400" />
                  <span>{comp.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-archery-400" />
                  <span>{comp.participants} участников</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Athletes table */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Users size={18} className="text-archery-400" />
            Спортсмены
          </h3>
          <button
            onClick={() => setShowAthletes(!showAthletes)}
            className="flex items-center gap-2 text-sm text-archery-300 hover:text-white transition-colors"
          >
            {showAthletes ? 'Свернуть' : 'Развернуть'}
            <ChevronDown size={16} className={`transition-transform duration-300 ${showAthletes ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-archery-400" />
            <input
              type="text"
              placeholder="Поиск по имени или региону..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-archery-400 focus:outline-none focus:border-archery-400/50"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-archery-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-archery-400/50"
            >
              <option value="all">Все категории</option>
              <option value="Блок">Блочный лук</option>
              <option value="Олимп.">Олимпийский лук</option>
            </select>
          </div>
        </div>

        {showAthletes && (
          <div className="glass-card rounded-xl overflow-hidden transition-all duration-300">
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-4 py-3 text-archery-300 font-medium">Спортсмен</th>
                    <th className="text-left px-4 py-3 text-archery-300 font-medium">Регион</th>
                    <th className="text-left px-4 py-3 text-archery-300 font-medium">Категория</th>
                    <th className="text-left px-4 py-3 text-archery-300 font-medium">Разряд</th>
                    <th className="text-center px-4 py-3 text-archery-300 font-medium">Ср. балл</th>
                    <th className="text-center px-4 py-3 text-archery-300 font-medium">Лучший</th>
                    <th className="text-center px-4 py-3 text-archery-300 font-medium">Тренд</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAthletes.map((athlete) => (
                    <tr
                      key={athlete.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-4 py-3 text-white font-medium">{athlete.name}</td>
                      <td className="px-4 py-3 text-archery-300">{athlete.region}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full text-xs bg-archery-600/30 text-archery-200">
                          {athlete.category === 'Блок' ? 'Блочный' : 'Олимпийский'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gold-400 font-medium">{athlete.rank}</td>
                      <td className="px-4 py-3 text-center text-white">{athlete.avgScore}</td>
                      <td className="px-4 py-3 text-center text-gold-400">{athlete.bestScore}</td>
                      <td className="px-4 py-3 text-center">
                        {athlete.trend === 'up' && <TrendingUp size={16} className="text-green-400 mx-auto" />}
                        {athlete.trend === 'down' && <TrendingDown size={16} className="text-red-400 mx-auto" />}
                        {athlete.trend === 'stable' && <Minus size={16} className="text-yellow-400 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
