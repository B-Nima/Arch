import { Athlete, Competition, CoachMetrics, TrainingModel, DataPipeline, MetricPoint } from './types';

export const athletes: Athlete[] = [
  { id: '1', name: 'Галсанов Галсан', region: 'Бурятия', category: 'Блок', rank: 'МСМК', avgScore: 698, bestScore: 712, totalCompetitions: 45, trend: 'up', coach: 'Цыренов Б.Д.' },
  { id: '2', name: 'Степанова Вика', region: 'Бурятия', category: 'Олимп.', rank: 'МС', avgScore: 672, bestScore: 695, totalCompetitions: 38, trend: 'up', coach: 'Будаев А.В.' },
  { id: '3', name: 'Цыбиков Бато', region: 'Бурятия', category: 'Блок', rank: 'МС', avgScore: 685, bestScore: 701, totalCompetitions: 32, trend: 'stable', coach: 'Цыренов Б.Д.' },
  { id: '4', name: 'Дамбаев Ардан', region: 'Бурятия', category: 'Олимп.', rank: 'МС', avgScore: 665, bestScore: 688, totalCompetitions: 28, trend: 'up', coach: 'Будаев А.В.' },
  { id: '5', name: 'Иванова Мария', region: 'Москва', category: 'Блок', rank: 'КМС', avgScore: 651, bestScore: 678, totalCompetitions: 22, trend: 'down', coach: 'Петров С.А.' },
  { id: '6', name: 'Ким Алексей', region: 'Приморье', category: 'Олимп.', rank: 'МС', avgScore: 670, bestScore: 691, totalCompetitions: 35, trend: 'stable', coach: 'Ли В.Н.' },
  { id: '7', name: 'Базарова Аюна', region: 'Бурятия', category: 'Олимп.', rank: 'КМС', avgScore: 643, bestScore: 665, totalCompetitions: 18, trend: 'up', coach: 'Будаев А.В.' },
  { id: '8', name: 'Смирнов Дмитрий', region: 'Татарстан', category: 'Блок', rank: 'МС', avgScore: 680, bestScore: 698, totalCompetitions: 30, trend: 'stable', coach: 'Хасанов Р.М.' },
];

export const competitions: Competition[] = [
  { id: '1', name: 'Чемпионат России 2025', date: '2025-06-15', location: 'Улан-Удэ', type: 'Чемпионат', participants: 245, status: 'completed' },
  { id: '2', name: 'Кубок Мира — этап', date: '2025-08-20', location: 'Шанхай', type: 'Кубок мира', participants: 180, status: 'completed' },
  { id: '3', name: 'Первенство России U21', date: '2025-09-10', location: 'Казань', type: 'Первенство', participants: 156, status: 'completed' },
  { id: '4', name: 'Всероссийские соревнования', date: '2025-11-05', location: 'Краснодар', type: 'Всероссийские', participants: 320, status: 'ongoing' },
  { id: '5', name: 'Чемпионат России в помещении', date: '2026-02-18', location: 'Москва', type: 'Чемпионат', participants: 280, status: 'upcoming' },
];

export const coachMetrics: CoachMetrics[] = [
  { id: '1', name: 'Цыренов Бато-Доржо', athletes: 12, avgProgress: 8.5, winRate: 72, specialties: ['Блок', 'Олимпийский'], rating: 4.9 },
  { id: '2', name: 'Будаев Александр', athletes: 8, avgProgress: 6.2, winRate: 58, specialties: ['Олимпийский'], rating: 4.6 },
  { id: '3', name: 'Петров Сергей', athletes: 6, avgProgress: 4.8, winRate: 45, specialties: ['Блок', 'Традиционный'], rating: 4.2 },
  { id: '4', name: 'Ли Владимир', athletes: 10, avgProgress: 7.1, winRate: 63, specialties: ['Олимпийский', 'Блок'], rating: 4.7 },
  { id: '5', name: 'Хасанов Рустам', athletes: 7, avgProgress: 5.5, winRate: 52, specialties: ['Блок'], rating: 4.4 },
];

export const trainingModels: TrainingModel[] = [
  {
    id: '1',
    name: 'Модель «Пик формы»',
    description: 'Циклическая модель подготовки с выходом на пик к ключевым стартам сезона',
    phases: [
      { name: 'ОФП', duration: '6 недель', focus: 'Базовая физическая подготовка', intensity: 40 },
      { name: 'Спец. выносливость', duration: '4 недели', focus: 'Стрелковая выносливость', intensity: 65 },
      { name: 'Техника', duration: '3 недели', focus: 'Детализация техники', intensity: 55 },
      { name: 'Предсоревновательная', duration: '2 недели', focus: 'Стабилизация', intensity: 80 },
      { name: 'Пик', duration: '1 неделя', focus: 'Максимальная реализация', intensity: 95 },
    ],
    effectiveness: 87,
    targetCategory: 'МС, МСМК',
  },
  {
    id: '2',
    name: 'Модель «Прогрессия»',
    description: 'Линейная модель для молодых спортсменов с постепенным повышением нагрузок',
    phases: [
      { name: 'Базовая техника', duration: '8 недель', focus: 'Формирование техники', intensity: 35 },
      { name: 'Объём стрельбы', duration: '6 недель', focus: 'Наработка объёма', intensity: 55 },
      { name: 'Скоростная', duration: '4 недели', focus: 'Скорость выполнения', intensity: 70 },
      { name: 'Соревновательная', duration: '4 недели', focus: 'Психология старта', intensity: 85 },
    ],
    effectiveness: 79,
    targetCategory: 'КМС, I разряд',
  },
  {
    id: '3',
    name: 'Модель «Восстановление»',
    description: 'Модель для спортсменов после травм с постепенным возвратом к нагрузкам',
    phases: [
      { name: 'Реабилитация', duration: '4 недели', focus: 'Восстановление', intensity: 20 },
      { name: 'Лёгкая стрельба', duration: '3 недели', focus: 'Возврат формы', intensity: 40 },
      { name: 'Наращивание', duration: '5 недель', focus: 'Постепенное увеличение', intensity: 60 },
      { name: 'Полная нагрузка', duration: '4 недели', focus: 'Выход на рабочий уровень', intensity: 80 },
    ],
    effectiveness: 73,
    targetCategory: 'Все разряды',
  },
];

export const dataPipelines: DataPipeline[] = [
  { id: '1', source: 'results.archery.ru', processor: 'Парсинг протоколов', output: 'База результатов', status: 'active', lastSync: '2 мин назад', recordsProcessed: 15420 },
  { id: '2', source: 'Результаты PDF', processor: 'OCR + NLP', output: 'Структурированные данные', status: 'active', lastSync: '15 мин назад', recordsProcessed: 3280 },
  { id: '3', source: 'Тренировочные журналы', processor: 'Анализ паттернов', output: 'Метрики подготовки', status: 'active', lastSync: '1 час назад', recordsProcessed: 8940 },
  { id: '4', source: 'Видеоаналитика', processor: 'Computer Vision', output: 'Технические метрики', status: 'idle', lastSync: '3 часа назад', recordsProcessed: 2150 },
  { id: '5', source: 'Фитнес-трекеры', processor: 'Агрегация данных', output: 'Физические показатели', status: 'active', lastSync: '30 мин назад', recordsProcessed: 12600 },
];

export const scoreDistribution: MetricPoint[] = [
  { date: 'Янв', value: 645, label: 'Средний балл' },
  { date: 'Фев', value: 652, label: 'Средний балл' },
  { date: 'Мар', value: 648, label: 'Средний балл' },
  { date: 'Апр', value: 661, label: 'Средний балл' },
  { date: 'Май', value: 668, label: 'Средний балл' },
  { date: 'Июн', value: 675, label: 'Средний балл' },
  { date: 'Июл', value: 672, label: 'Средний балл' },
  { date: 'Авг', value: 680, label: 'Средний балл' },
  { date: 'Сен', value: 685, label: 'Средний балл' },
  { date: 'Окт', value: 688, label: 'Средний балл' },
  { date: 'Ноя', value: 692, label: 'Средний балл' },
  { date: 'Дек', value: 695, label: 'Средний балл' },
];

export const categoryData = [
  { name: 'Олимпийский лук', athletes: 45, avgScore: 665, gold: 12 },
  { name: 'Блочный лук', athletes: 38, avgScore: 688, gold: 15 },
  { name: 'Традиционный', athletes: 22, avgScore: 580, gold: 6 },
  { name: 'Длинный лук', athletes: 15, avgScore: 520, gold: 3 },
];

export const regionStats = [
  { region: 'Бурятия', gold: 28, silver: 19, bronze: 15, total: 62 },
  { region: 'Москва', gold: 18, silver: 22, bronze: 20, total: 60 },
  { region: 'Татарстан', gold: 12, silver: 14, bronze: 11, total: 37 },
  { region: 'Приморье', gold: 10, silver: 8, bronze: 12, total: 30 },
  { region: 'Краснодар', gold: 8, silver: 11, bronze: 9, total: 28 },
  { region: 'Свердловская', gold: 7, silver: 9, bronze: 10, total: 26 },
];
