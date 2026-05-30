export interface AlphaGroup {
  id: string;
  name: string;
  targetAudience: string;
  ageRange: string;
  description: string;
  schedule: string;
  cta: string;
  color: string;
}

export const alphaGroups: AlphaGroup[] = [
  {
    id: 'adolescenti',
    name: 'Alpha Adolescenți',
    targetAudience: 'Liceeni și tineri 14–18 ani',
    ageRange: '14–18 ani',
    description:
      'Un spațiu sigur unde adolescenții pot vorbi deschis despre identitate, relații, sens și credință — fără răspunsuri impuse. Fiecare sesiune combină un clip scurt cu discuții în grup mic.',
    schedule: 'Vineri seara, o dată la două săptămâni',
    cta: 'Înscrie un adolescent',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'tineri',
    name: 'Alpha Tineri',
    targetAudience: 'Studenți și tineri 19–30 ani',
    ageRange: '19–30 ani',
    description:
      'Pentru studenți și tineri adulți care se întreabă despre sens, relații și credință. Atmosferă relaxată, conversații autentice, fără obligații.',
    schedule: 'Sâmbătă seara, o dată la două săptămâni',
    cta: 'Înscrie-te',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 'casatoriti',
    name: 'Alpha Căsătoriți',
    targetAudience: 'Cupluri căsătorite',
    ageRange: 'Fără restricție de vârstă',
    description:
      'Conceput pentru cupluri care vor să exploreze împreună temele mari ale vieții. Sesiunile includ timp de discuție în cuplu și în grup, cu subiecte despre relație, scop și credință.',
    schedule: 'Joi seara, o dată la două săptămâni',
    cta: 'Înscrie cuplul vostru',
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 'parenting',
    name: 'Alpha Parenting',
    targetAudience: 'Părinți cu copii 0–10 ani',
    ageRange: 'Părinți',
    description:
      'Un curs practic și reflexiv despre ce înseamnă să fii părinte astăzi — cum creăm un mediu sănătos, cum vorbim cu copiii despre valori, sens și identitate.',
    schedule: 'Sâmbătă dimineața, la fiecare două săptămâni',
    cta: 'Înscrie-te ca părinte',
    color: 'from-amber-500 to-orange-500',
  },
];
