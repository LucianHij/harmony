export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  audience: string;
  howToHelp: string[];
  ctaText: string;
  ctaHref: string;
  icon: string;
  color: string;
}

export const projects: Project[] = [
  {
    slug: 'oameni-ai-strazii',
    title: 'Oameni ai Străzii',
    tagline: 'Căldură și demnitate pentru cei mai vulnerabili',
    description:
      'Oferim mese calde, haine și prezență umană persoanelor fără adăpost din București. Credem că fiecare om merită să fie văzut și tratat cu demnitate.',
    audience: 'Persoane fără adăpost și în situație de vulnerabilitate extremă',
    howToHelp: [
      'Vino voluntar la distribuiri (sâmbăta dimineața)',
      'Donează haine de iarnă sau bunuri nealimentare',
      'Contribuie financiar pentru mese calde',
    ],
    ctaText: 'Vreau să ajut',
    ctaHref: '/contact',
    icon: '🏠',
    color: 'bg-amber-50',
  },
  {
    slug: 'micii-exploratori',
    title: 'Micii Exploratori',
    tagline: 'Un loc sigur pentru copii și tineri',
    description:
      'Program săptămânal pentru copii (4–12 ani) și tineri (13–18 ani): activități creative, educație emoțională și valori pentru viață. Un spațiu în care fiecare copil este binevenit.',
    audience: 'Copii și adolescenți, familiile acestora',
    howToHelp: [
      'Înscrie un copil în program',
      'Devino voluntar educator',
      'Donează materiale didactice sau rechizite',
    ],
    ctaText: 'Află mai multe',
    ctaHref: '/contact',
    icon: '🎨',
    color: 'bg-indigo-50',
  },
  {
    slug: 'penitenciar',
    title: 'Penitenciar',
    tagline: 'Speranță dincolo de ziduri',
    description:
      'Vizităm periodic deținuți, organizăm grupuri de discuții și susținem reintegrarea socială după eliberare. Credem în posibilitatea unui nou început pentru oricine.',
    audience: 'Persoane private de libertate și familiile lor',
    howToHelp: [
      'Alătură-te echipei de vizite',
      'Donează cărți sau materiale educative',
      'Sprijină programul de reintegrare',
    ],
    ctaText: 'Implică-te',
    ctaHref: '/contact',
    icon: '🤝',
    color: 'bg-stone-50',
  },
  {
    slug: 'alpha',
    title: 'Alpha',
    tagline: 'Întrebări mari, conversații reale',
    description:
      'Alpha este un curs de explorare a vieții și credinței — un spațiu relaxat unde oricine poate pune întrebări, asculta perspective diferite și discuta fără presiuni. Nu trebuie să crezi nimic în prealabil.',
    audience: 'Oricine are curiozitate despre sens, viață și spiritualitate',
    howToHelp: [
      'Participă la un curs Alpha',
      'Invită un prieten',
      'Devino voluntar facilitator',
    ],
    ctaText: 'Înscrie-te la Alpha',
    ctaHref: '/alpha',
    icon: '💬',
    color: 'bg-violet-50',
  },
];
