export const site = {
  name: 'Pourya Shahverdi',
  title: 'Pourya Shahverdi — Applied Scientist (HRI & Affective AI) · Robotics Engineer',
  description:
    'Applied Scientist in social HRI and affective AI, and robotics engineer. Ph.D. Candidate in ECE at Oakland University building conversational humanoid and social robots evaluated with real participants.',
  cv: '/uploads/PouryaShahverdiCV.pdf',
  resume: '/uploads/PouryaShahverdiResume.pdf',
  email: 'pourya.shahverdi@gmail.com',
};

export const bio = [
  'My research focuses on context awareness and emotional intelligence for human–agent interaction to elevate the user experience to higher levels. I build scalable pipelines that integrate social science with multimodal generative AI and affective computing to perceive and learn from sensory and behavioral data, generating verbal and nonverbal behaviors aligned with user emotions, goals, and norms.',
  'I have over 15 years of experience in robotics, identifying myself as a generalist by accomplishing projects in humanoid whole-body imitation, manipulation, mobile robot navigation, and autonomous vehicles, besides what I’m currently doing in social robotics and HRI.',
  'Outside of work, I enjoy playing basketball, hiking, helping my wife with her bakery, and playing the Piano/Keyboard as well as Tar/Setar (traditional Persian instruments).',
];

export type SocialLink = { label: string; href: string; icon: string };

export const socials: SocialLink[] = [
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=lhc1WDQAAAAJ', icon: 'scholar' },
  { label: 'GitHub', href: 'https://github.com/pourya-shahverdi', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pourya-shahverdi/', icon: 'linkedin' },
  { label: 'YouTube', href: 'https://www.youtube.com/PouryaShahverdi', icon: 'youtube' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-6634-2463', icon: 'orcid' },
  { label: 'X', href: 'https://x.com/PouryaShahverdi', icon: 'x' },
];

export const moreWork = [
  {
    title: 'Multimodal PAD Recognition',
    note: 'Mentor · pleasure–arousal–dominance estimation; initial single-split experiment reached 0.56 CCC',
  },
  {
    title: 'Autism, Preschool & STEM HRI Studies',
    note: 'Robot-mediated instruction studies with children with autism, preschoolers, and Grade 3–5 students learning STEM vocabulary',
  },
  {
    title: 'Tripteron 3-DOF Parallel Robot Control',
    note: 'Dynamic identification & control under variable friction and feedback delay (RAS 2018)',
  },
  {
    title: 'LiDAR / Radar / Vision EKF Fusion',
    note: 'Extended Kalman filter sensor fusion of LiDAR, radar, and vision measurements',
  },
];

export const honors = [
  { title: 'Outstanding Early Career Scientist Paper Award', meta: 'IEEE RO-MAN 2022' },
  { title: '1st Place & Public Vote — MakiMate', meta: '2026 Graduate Students Showcase' },
  { title: 'Highest ECE Teaching Score', meta: 'EGR-2800 · Oakland University' },
  { title: 'NSF-Funded Ph.D. Research', meta: 'Oakland University' },
  { title: 'NIW Permanent Residency', meta: 'U.S. National Interest Waiver' },
  { title: 'RoboCup Humanoid League', meta: 'Mechatronics Research Laboratory (MRL)' },
  { title: 'AI Advisory Board Member', meta: 'OU School of Business' },
  { title: 'Education Chair', meta: 'FIRA' },
  { title: 'Peer Reviewer', meta: 'HRI · ICRA · IROS · RO-MAN · RA-L · IJSR' },
];

export const education = [
  { degree: 'Ph.D. Electrical & Computer Engineering', school: 'Oakland University', date: 'Dec 2026 (defense scheduled)' },
  { degree: 'M.Sc. Mechatronics Engineering', school: 'University of Tehran / Azad University of Qazvin', date: '2016' },
  { degree: 'B.Sc. Robotics Engineering', school: 'Hamedan University of Technology', date: '2013' },
];

export const skills = [
  { group: 'Programming / Systems', items: ['Python', 'C++', 'MATLAB', 'R', 'Docker / Compose', 'FastAPI', 'SQLAlchemy', 'SQLite', 'WebRTC', 'Linux'] },
  { group: 'AI / ML', items: ['PyTorch', 'scikit-learn', 'TensorFlow', 'LSTM', 'LLMs / VLMs', 'Llama 3.3 70B (on-prem)', 'Ollama', 'LangChain'] },
  { group: 'Interaction / Perception', items: ['Whisper', 'NVIDIA Riva', 'Vosk', 'Piper TTS', 'HSEmotion', 'EmotiEffLib', 'MediaPipe', 'OpenCV'] },
  { group: 'Robotics / Sim', items: ['ROS / ROS 2', 'Furhat', 'NAO', 'Pepper', 'Maki', 'CoppeliaSim', 'Gazebo', 'Isaac Sim'] },
  { group: 'Embedded / Hardware', items: ['Arduino', 'AVR', 'ARM', 'FreeRTOS', 'Raspberry Pi', 'Kinect', 'SolidWorks'] },
  { group: 'Research Methods', items: ['User-study design', 'Mixed-effects models', 'Ordinal models', 'SPSS', 'Quarto', 'LaTeX'] },
];
