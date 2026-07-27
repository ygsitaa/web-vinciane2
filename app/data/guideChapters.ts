export interface GuideChapterMeta {
  number: number
  icon: string
  title: string
  summary: string
  componentName: string
}

export const guideChapters: GuideChapterMeta[] = [
  {
    number: 1,
    icon: '🧠',
    title: 'Je pense que mon enfant est différent',
    summary: 'Quels signes peuvent m\'interpeller\u00a0? À partir de quand s\'inquiéter\u00a0? Observer sans paniquer.',
    componentName: 'GuideChapter1',
  },
  {
    number: 2,
    icon: '🔍',
    title: 'Les premiers signes qui peuvent interpeller',
    summary: 'Chaque enfant est unique. Un ou plusieurs de ces signes ne signifient pas forcément qu\'il existe un trouble.',
    componentName: 'GuideChapter2',
  },
  {
    number: 3,
    icon: '🗺️',
    title: 'Par où commencer\u00a0?',
    summary: 'Lorsque l\'on commence à se poser des questions sur son enfant, on peut vite se sentir perdu. Je vous guide avec douceur.',
    componentName: 'GuideChapter3',
  },
  {
    number: 4,
    icon: '👥',
    title: 'À quoi sert chaque professionnel\u00a0?',
    summary: 'Enseignant, pédiatre, logopède, neuropsychologue\u00a0… qui fait quoi, et quand les consulter\u00a0?',
    componentName: 'GuideChapter4',
  },
  {
    number: 5,
    icon: '🏫',
    title: 'Comment l\'école peut-elle aider mon enfant\u00a0?',
    summary: 'L\'école joue un rôle essentiel. Les enseignants sont souvent les premiers à observer et à mettre en place des solutions.',
    componentName: 'GuideChapter5',
  },
  {
    number: 6,
    icon: '🤝',
    title: 'Les ressources pour vous accompagner en Belgique',
    summary: 'Entre hôpitaux, centres pluridisciplinaires, professionnels indépendants et associations, découvrez les ressources disponibles.',
    componentName: 'GuideChapter6',
  },
]
