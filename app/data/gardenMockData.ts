export interface AudioStory {
  id: string
  title: string
  description: string
  coverImage?: string
  audioUrl: string
  duration: string
  order: number
}

export interface PdfResource {
  id: string
  title: string
  description: string
  fileUrl: string
  order: number
}

export interface GuidedMeditation {
  id: string
  title: string
  description: string
  coverImage?: string
  audioUrl: string
  duration: string
  order: number
}

export const mockAudioStories: AudioStory[] = [
  {
    id: 'audio-1',
    title: 'Le bruit de la pluie',
    description: 'Une douce histoire pour apaiser l\'esprit après une journée intense.',
    coverImage: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=400&auto=format&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Dummy URL
    duration: '10:00',
    order: 1
  },
  {
    id: 'audio-2',
    title: 'Voyage au creux des vagues',
    description: 'Laissez-vous bercer par le rythme régulier de l\'océan.',
    coverImage: 'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=400&auto=format&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Dummy URL
    duration: '12:30',
    order: 2
  }
]

export const mockPdfResources: PdfResource[] = [
  {
    id: 'pdf-1',
    title: 'Mes mantras réconfortants',
    description: 'Une série d\'affirmations positives à imprimer et à afficher partout où vous en avez besoin.',
    fileUrl: '#', // Dummy URL
    order: 1
  },
  {
    id: 'pdf-2',
    title: 'Journal de gratitude',
    description: 'Quelques pages pour noter les petites victoires du quotidien.',
    fileUrl: '#', // Dummy URL
    order: 2
  }
]

export const mockGuidedMeditations: GuidedMeditation[] = [
  {
    id: 'meditation-1',
    title: 'Ancrage rapide',
    description: '5 minutes pour revenir à l\'instant présent quand tout s\'accélère.',
    coverImage: 'https://images.unsplash.com/photo-1499591934245-40b55745b905?q=80&w=400&auto=format&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // Dummy URL
    duration: '05:00',
    order: 1
  },
  {
    id: 'meditation-2',
    title: 'Bulle de douceur',
    description: 'Une relaxation profonde pour lâcher prise avant de dormir.',
    coverImage: 'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=400&auto=format&fit=crop',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', // Dummy URL
    duration: '15:00',
    order: 2
  }
]
