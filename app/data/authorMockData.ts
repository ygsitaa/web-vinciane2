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
    url: '/images/selfievinc_edited.jpg',
    alt: 'Vinciane Hodiamont',
  },
  paragraphs: [
    `Qui suis-je ?

Je m'appelle Vinciane Hodiamont, je suis maman d'une famille hors du commun, épouse, ancienne puéricultrice et, depuis quelques années, auteure.

Pendant longtemps, j'ai cru qu'il fallait être une maman parfaite. Toujours trouver les bonnes réponses, ne jamais douter, garder le sourire malgré la fatigue... Puis la vie m'a appris que la parentalité est souvent bien plus complexe que ce que l'on imagine.

Dans notre famille, nous avons traversé des périodes de doute, de découragement, de rendez-vous médicaux, de bilans, de recherches interminables pour essayer de comprendre nos enfants. Nous avons connu les moments où l'on rentre à la maison avec plus de questions que de réponses. Les moments où l'on se demande si l'on fait les choses correctement. Les moments où l'on se sent un peu seul.

Petit à petit, j'ai rencontré des professionnels extraordinaires qui nous ont aidés à avancer. J'ai appris à voir mes enfants autrement, à mieux comprendre leurs besoins, mais aussi à changer mon regard sur moi-même en tant que maman.

C'est de là qu'est née l'envie d'écrire. D'abord pour déposer un morceau de notre histoire. Puis, très vite, pour tendre la main à d'autres familles. Parce que je sais à quel point il est rassurant de lire les mots que l'on aurait aimé entendre plus tôt.

Aujourd'hui, j'écris des livres pour les parents, pour les enfants, mais surtout pour rappeler une chose essentielle : derrière chaque difficulté se cache une histoire, des émotions et énormément d'amour.`,
    `Pourquoi TribuSix ?

TribuSix est né d'un souhait très simple : que plus aucun parent ne se sente perdu et que chaque enfant se sent compris.

J'aurais aimé trouver, au début de notre parcours, un endroit où quelqu'un m'explique les démarches, les différents professionnels, les prises en charge possibles, les petits outils du quotidien, mais aussi les mots qui réconfortent lorsque l'on doute. Alors j'ai décidé de créer cet espace.

Un endroit où l'on peut venir chercher des réponses, découvrir des ressources, trouver des livres, écouter des audios, télécharger quelques petits cadeaux... mais surtout souffler quelques instants. Ici, il n'y a pas de parent parfait. Il y a simplement des familles qui avancent à leur rythme.

Si, grâce à ce site, une maman se sent un peu moins seule, si un papa repart avec une idée qui l'aide à mieux comprendre son enfant, ou si un enfant referme l'un de mes livres en se disant « En fait... je ne suis pas bizarre. », alors tout ce travail aura eu un sens.

Bienvenue chez TribuSix. J'espère que vous vous y sentirez un peu comme à la maison.

Avec douceur.`,
  ],
}
