export interface AuthorPhoto {
  url: string
  alt: string
}

export interface AuthorProfile {
  title: string
  name: string
  subtitle: string
  photo: AuthorPhoto
  paragraphs: string[]
}

export const mockAuthorProfile: AuthorProfile = {
  title: 'Qui suis-je',
  name: 'Vinciane Hodiamont',
  subtitle: 'Autrice, maman de six enfants et créatrice TribuSix',
  photo: {
    url: '',
    alt: 'Vinciane Hodiamont',
  },
  paragraphs: [
    'Je m\'appelle Vinciane. Maman de six enfants, j\'ai appris au fil des années à naviguer entre les tempêtes du quotidien, les émotions intenses et la fatigue parfois écrasante.',
    'C\'est en accompagnant mes propres enfants « tornades » — ceux qui vivent avec le TDAH et les troubles des apprentissages — que j\'ai compris combien les familles ont besoin de ressources bienveillantes, concrètes et sans jugement.',
    'À travers ma collection TribuSix, j\'écris des livres pensés pour les enfants extraordinaires et pour les parents qui les aiment de tout leur être. Mon souhait : offrir des outils qui apaisent, qui comprennent et qui rappellent que faire de son mieux, c\'est déjà énorme.',
  ],
}
