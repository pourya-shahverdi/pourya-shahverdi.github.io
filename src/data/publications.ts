/**
 * Curated publication list — source of truth for the site.
 * Author order is the published order. `equalContrib` = number of leading
 * authors marked with * (co-first). Do NOT auto-sync from Scholar.
 */
export type PubType = 'journal' | 'conference' | 'preprint';

export type Publication = {
  key: string;
  type: PubType;
  status?: 'under-review';
  /** "Last, First" — published order */
  authors: string[];
  etAl?: boolean;
  equalContrib?: number;
  title: string;
  venue: string;
  venueShort: string;
  year: number;
  pages?: string;
  volume?: string;
  number?: string;
  publisher?: string;
  doi?: string;
  arxiv?: string;
  url?: string;
  demo?: string;
  code?: string;
  award?: string;
};

const ME = 'Shahverdi, Pourya';

export const publications: Publication[] = [
  {
    key: 'shahverdi2026taffc',
    type: 'preprint',
    status: 'under-review',
    authors: [ME],
    etAl: true,
    title: 'Human emotion during robot-mediated behavioral skills training (66-participant study)',
    venue: 'Manuscript under review at IEEE Transactions on Affective Computing (TAFFC)',
    venueShort: 'IEEE TAFFC · Under Review',
    year: 2026,
    demo: 'https://youtu.be/q1uA3j5aALE',
  },
  {
    key: 'rayati2026dataefficient',
    type: 'preprint',
    authors: ['Rayati, Keyhan', 'Beigy, Alireza', 'Saadati, A.', ME, 'Tale Masouleh, Mehdi', 'Kalhor, Ahmad', 'Louie, Wing-Yue Geoffrey'],
    title:
      'Data-efficient learning from demonstration for humanoid robots via feature-level perception and prompt-based object detection',
    venue: 'arXiv preprint arXiv:2610.26170',
    venueShort: 'arXiv 2026',
    year: 2026,
    arxiv: '2610.26170',
    code: 'https://github.com/pourya-shahverdi/ManipulationFewShotLfD',
  },
  {
    key: 'shahverdi2026codesign',
    type: 'conference',
    authors: [ME, 'Walker, Samuel', 'Kenville, Karoline', 'Tyshka, Alex', 'Korneder, Jessica', 'Louie, Wing-Yue Geoffrey'],
    title:
      'Co-Design of a Robot-Mediated Training Program for Informal Caregivers to Learn to Deliver Interventions to Children with Autism',
    venue: '2026 IEEE 35th International Conference on Robot and Human Interactive Communication (RO-MAN)',
    venueShort: 'IEEE RO-MAN 2026',
    year: 2026,
    pages: '1--8',
  },
  {
    key: 'bakhoda2026readaloud',
    type: 'journal',
    authors: ['Bakhoda, Iman', ME, 'Rousso, Katelyn', 'Dallas, Evan', 'Louie, Wing-Yue Geoffrey'],
    title: 'Robot-mediated Read-aloud Context of Reading Comprehension and Vocabulary Development',
    venue: 'Computers & Education',
    venueShort: 'Computers & Education 2026',
    year: 2026,
    publisher: 'Elsevier',
  },
  {
    key: 'louie2024tasklevel',
    type: 'conference',
    authors: [
      'Louie, Wing-Yue Geoffrey', 'Christ, Tanya', ME, 'Rousso, Katelyn', 'Dallas, Evan',
      'Tyshka, Alexander', 'Wowra, Amanda', 'Barnett, Kendra', 'Bakhoda, Iman',
    ],
    title: 'Exploring Task-Level Contingent Mediations for Vocabulary Instruction across Robot, Virtual, and Human Teachers',
    venue: '2024 33rd IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)',
    venueShort: 'IEEE RO-MAN 2024',
    year: 2024,
    pages: '1048--1055',
    doi: '10.1109/RO-MAN60168.2024.10731230',
    demo: 'https://youtu.be/QGJQFk0llzI',
  },
  {
    key: 'louie2024stem',
    type: 'conference',
    authors: ['Louie, Wing-Yue Geoffrey', 'Christ, Tanya', 'Wowra, Amanda', 'Alexander, Danielle', 'Bakhoda, Iman', ME],
    title:
      '“If a Robot was Teaching, Then Everybody Would Definitely Like School Better”: An Analysis of Grade 3-5 Children’s Perceptions of Learning STEM Vocabulary with an Educational Social Robot',
    venue: '2024 33rd IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)',
    venueShort: 'IEEE RO-MAN 2024',
    year: 2024,
    pages: '1675--1680',
    doi: '10.1109/RO-MAN60168.2024.10731322',
  },
  {
    key: 'bakhoda2024latency',
    type: 'conference',
    authors: ['Bakhoda, Iman', ME, 'Rousso, Katelyn', 'Klotz, Justin', 'Louie, Wing-Yue Geoffrey'],
    equalContrib: 2,
    title: 'Exploring the Impact of Narrator Type on Response Latency and Utterance Length During Interactive Storytelling',
    venue: '2024 IEEE International Conference on Robotics and Automation (ICRA)',
    venueShort: 'IEEE ICRA 2024',
    year: 2024,
    pages: '5499--5504',
    doi: '10.1109/ICRA57147.2024.10610817',
    demo: 'https://www.youtube.com/watch?v=M8Xl5e82oYw',
  },
  {
    key: 'wilson2023effect',
    type: 'journal',
    authors: [
      'Wilson, Christopher M.', 'Boright, Lori', 'Louie, Wing-Yue Geoffrey', ME, 'Arena, Sara K.',
      'Benbow, Ronald', 'Wilson, Jason R.', 'Chen, Qinghua', 'Rousso, Katie', 'Huang, Nathan',
    ],
    title:
      'Effect of robotic delivery of physical activity and fall prevention exercise in older adults: a pilot cohort study',
    venue: 'Cureus',
    venueShort: 'Cureus 2023',
    year: 2023,
    volume: '15',
    number: '8',
    publisher: 'Cureus Inc.',
    doi: '10.7759/cureus.44264',
    demo: 'https://youtu.be/MuxEg3ArODg',
  },
  {
    key: 'rayati2023icrom',
    type: 'conference',
    authors: [
      'Rayati, Keyhan', 'Feizi, Amirhossein', 'Beigy, Alireza', ME, 'Tale Masouleh, Mehdi', 'Kalhor, Ahmad',
      'Louie, Wing-Yue Geoffrey',
    ],
    title: 'Real-Time Imitation of Human Head Motions, Blinks and Emotions by Nao Robot: A Closed-Loop Approach',
    venue: '2023 11th RSI International Conference on Robotics and Mechatronics (ICRoM)',
    venueShort: 'ICRoM 2023',
    year: 2023,
    pages: '794--800',
    doi: '10.1109/ICRoM60803.2023.10412471',
  },
  {
    key: 'shahverdi2023backchanneling',
    type: 'conference',
    authors: [ME, 'Rousso, Katelyn', 'Klotz, Justin', 'Bakhoda, Iman', 'Zribi, Malek', 'Louie, Wing-Yue Geoffrey'],
    title: 'Emotionally Specific Backchanneling in Social Human-Robot Interaction and Human-Human Interaction',
    venue: '2023 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    venueShort: 'IEEE/RSJ IROS 2023',
    year: 2023,
    pages: '4059--4064',
    doi: '10.1109/IROS55552.2023.10341823',
    demo: 'https://www.youtube.com/watch?v=M8Xl5e82oYw',
  },
  {
    key: 'shahverdi2023jobinterview',
    type: 'conference',
    authors: [ME, 'Rousso, Katelyn', 'Bakhoda, Iman', 'Huang, Nathan', 'Rohrbeck, Kristin', 'Louie, Wing-Yue Geoffrey'],
    title: 'Robot-mediated Job Interview Training for Individuals with ASD: A Pilot Study',
    venue: '2023 32nd IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)',
    venueShort: 'IEEE RO-MAN 2023',
    year: 2023,
    pages: '564--570',
    doi: '10.1109/RO-MAN57019.2023.10309611',
    demo: 'https://youtu.be/3fq4s9N5VQs',
  },
  {
    key: 'shahverdi2022turntaking',
    type: 'conference',
    authors: [ME, 'Tyshka, Alexander', 'Trombly, Madeline', 'Louie, Wing-Yue Geoffrey'],
    title: 'Learning Turn-Taking Behavior from Human Demonstrations for Social Human-Robot Interactions',
    venue: '2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    venueShort: 'IEEE/RSJ IROS 2022',
    year: 2022,
    pages: '7643--7649',
    doi: '10.1109/IROS47612.2022.9981243',
  },
  {
    key: 'trombly2022group',
    type: 'conference',
    authors: [
      'Trombly, Madeline', ME, 'Huang, Nathan', 'Chen, Qinghua', 'Korneder, Jessica', 'Louie, Wing-Yue Geoffrey',
    ],
    equalContrib: 2,
    title: 'Robot-mediated Group Instruction for Children with ASD: A Pilot Study',
    venue: '2022 31st IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)',
    venueShort: 'IEEE RO-MAN 2022',
    year: 2022,
    pages: '1506--1513',
    doi: '10.1109/RO-MAN53752.2022.9900584',
    demo: 'https://youtu.be/c37KEdAKoII',
    award: 'IEEE RO-MAN 2022 Outstanding Early Career Scientist Paper Award',
  },
  {
    key: 'chen2022sample',
    type: 'conference',
    authors: [
      'Chen, Qinghua', 'Dallas, Evan', ME, 'Korneder, Jessica', 'Rawashdeh, Osamah A.', 'Louie, Wing-Yue Geoffrey',
    ],
    title: 'A Sample Efficiency Improved Method via Hierarchical Reinforcement Learning Networks',
    venue: '2022 31st IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)',
    venueShort: 'IEEE RO-MAN 2022',
    year: 2022,
    pages: '1498--1505',
    doi: '10.1109/RO-MAN53752.2022.9900738',
  },
  {
    key: 'sharifzadeh2018experimental',
    type: 'journal',
    authors: ['Sharifzadeh, Mohammad', 'Tale Masouleh, Mehdi', 'Kalhor, Ahmad', ME],
    title:
      'An experimental dynamic identification & control of an overconstrained 3-DOF parallel mechanism in presence of variable friction and feedback delay',
    venue: 'Robotics and Autonomous Systems',
    venueShort: 'RAS 2018',
    year: 2018,
    volume: '102',
    pages: '27--43',
    publisher: 'Elsevier',
    doi: '10.1016/j.robot.2018.01.003',
  },
  {
    key: 'shahverdi2017balance',
    type: 'conference',
    authors: [ME, 'Ansari, Mohammad Javad', 'Tale Masouleh, Mehdi'],
    title: 'Balance Strategy for Human Imitation by a NAO Humanoid Robot',
    venue: '2017 5th RSI International Conference on Robotics and Mechatronics (ICRoM)',
    venueShort: 'ICRoM 2017',
    year: 2017,
    pages: '138--143',
    doi: '10.1109/ICRoM.2017.8466225',
    demo: 'https://youtu.be/0c-mpC6NMfY',
    code: 'https://github.com/pourya-shahverdi/Imitation_NAO',
  },
  {
    key: 'shahverdi2017imitation',
    type: 'journal',
    authors: [ME, 'Tale Masouleh, Mehdi'],
    title:
      'Imitation of Human Motion by a NAO Humanoid Robot Using an Analytical Method and Considering Balance of the Robot',
    venue: 'Modares Mechanical Engineering',
    venueShort: 'Modares Mech. Eng. 2017',
    year: 2017,
    volume: '17',
    number: '7',
    pages: '386--396',
    url: 'https://mme.modares.ac.ir/browse.php?a_id=4583&sid=15&slc_lang=en',
    demo: 'https://youtu.be/0c-mpC6NMfY',
    code: 'https://github.com/pourya-shahverdi/Imitation_NAO',
  },
  {
    key: 'shahverdi2016geometric',
    type: 'conference',
    authors: [ME, 'Tale Masouleh, Mehdi'],
    title: 'A simple and fast geometric kinematic solution for imitation of human arms by a NAO humanoid robot',
    venue: '2016 4th International Conference on Robotics and Mechatronics (ICRoM)',
    venueShort: 'ICRoM 2016',
    year: 2016,
    pages: '572--577',
    doi: '10.1109/ICRoM.2016.7886806',
    demo: 'https://youtu.be/0c-mpC6NMfY',
    code: 'https://github.com/pourya-shahverdi/Imitation_NAO',
  },
];

/* ---------- helpers ---------- */

/** "Louie, Wing-Yue Geoffrey" -> "W.-Y. G. Louie" */
export function shortName(author: string): string {
  const [last, first = ''] = author.split(',').map((s) => s.trim());
  const initials = first
    .split(/\s+/)
    .filter(Boolean)
    .map((part) =>
      part
        .split('-')
        .map((p) => (p.endsWith('.') && p.length <= 2 ? p : `${p[0]}.`))
        .join('-'),
    )
    .join(' ');
  return initials ? `${initials} ${last}` : last;
}

export const isMe = (author: string) => author === ME;

/** First author, or within the co-first (equal contribution) group. */
export function isSelected(p: Publication): boolean {
  const idx = p.authors.indexOf(ME);
  return idx === 0 || (p.equalContrib !== undefined && idx >= 0 && idx < p.equalContrib);
}

export function displayAuthors(p: Publication) {
  return p.authors.map((a, i) => ({
    name: shortName(a),
    me: isMe(a),
    equal: p.equalContrib !== undefined && i < p.equalContrib,
  }));
}

export function primaryLink(p: Publication): { label: string; href: string } | undefined {
  if (p.doi) {
    const ieee = p.doi.startsWith('10.1109/');
    return { label: ieee ? 'IEEE' : 'DOI', href: `https://doi.org/${p.doi}` };
  }
  if (p.url) return { label: 'Paper', href: p.url };
  return undefined;
}

export function toBibtex(p: Publication): string {
  const kind = p.type === 'journal' ? 'article' : p.type === 'conference' ? 'inproceedings' : 'misc';
  const authors = p.etAl ? [...p.authors, 'others'] : p.authors;
  const fields: [string, string | undefined][] = [
    ['author', authors.join(' and ')],
    ['title', `{${p.title}}`],
    [p.type === 'journal' ? 'journal' : p.type === 'conference' ? 'booktitle' : 'howpublished', p.venue],
    ['year', String(p.year)],
    ['volume', p.volume],
    ['number', p.number],
    ['pages', p.pages],
    ['publisher', p.publisher],
    ['doi', p.doi],
    ['eprint', p.arxiv],
    ['archivePrefix', p.arxiv ? 'arXiv' : undefined],
    ['url', p.url ?? (p.arxiv ? `https://arxiv.org/abs/${p.arxiv}` : undefined)],
    ['note', p.status === 'under-review' ? 'Under review' : p.equalContrib ? `First ${p.equalContrib} authors contributed equally` : undefined],
  ];
  const body = fields
    .filter(([, v]) => v)
    .map(([k, v]) => `  ${k} = {${(v as string).replace(/&/g, '\\&')}}`)
    .join(',\n');
  return `@${kind}{${p.key},\n${body}\n}`;
}

export const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

export const pubCounts = {
  selected: publications.filter(isSelected).length,
  all: publications.length,
  journal: publications.filter((p) => p.type === 'journal').length,
  conference: publications.filter((p) => p.type === 'conference').length,
  preprint: publications.filter((p) => p.type === 'preprint').length,
};
