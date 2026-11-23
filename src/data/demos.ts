export type Demo = {
  id: string;
  title: string;
  venue: string;
  youtubeId: string;
  url: string;
};

export const demos: Demo[] = [
  { id: 'caregiver-training', title: 'Social Robots for Training Caregivers of Children with Autism', venue: 'IEEE TAFFC · Under Review', youtubeId: 'q1uA3j5aALE', url: 'https://youtu.be/q1uA3j5aALE' },
  { id: 'backchanneling', title: 'Emotional Backchanneling & Storytelling', venue: "IROS '23 / ICRA '24", youtubeId: 'M8Xl5e82oYw', url: 'https://www.youtube.com/watch?v=M8Xl5e82oYw' },
  { id: 'job-interview', title: 'Robot-Mediated Job Interview Training', venue: "RO-MAN '23", youtubeId: '3fq4s9N5VQs', url: 'https://youtu.be/3fq4s9N5VQs' },
  { id: 'group-instruction', title: 'Group Instruction for Children with Autism', venue: "RO-MAN '22", youtubeId: 'c37KEdAKoII', url: 'https://youtu.be/c37KEdAKoII' },
  { id: 'nao-imitation', title: 'Whole-Body Human Motion Imitation on NAO', venue: "ICRoM '16/'17", youtubeId: '0c-mpC6NMfY', url: 'https://youtu.be/0c-mpC6NMfY' },
  { id: 'fall-prevention', title: 'Older-Adult Physical Activity & Fall Prevention', venue: "Cureus '23", youtubeId: 'MuxEg3ArODg', url: 'https://youtu.be/MuxEg3ArODg' },
  { id: 'stem-vocab', title: 'STEM Vocabulary Instruction', venue: "RO-MAN '24", youtubeId: 'QGJQFk0llzI', url: 'https://youtu.be/QGJQFk0llzI' },
];

export const demoUrl = (id: string) => demos.find((d) => d.id === id)?.url;
