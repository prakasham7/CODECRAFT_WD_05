// Skill categories and data
export const SKILLS = {
  technical: ['HTML', 'CSS', 'C++', 'Arduino', 'Microsoft Office', 'MS Excel'],
  softSkills: ['Problem Solving', 'Team Leadership', 'Communication', 'Event Management'],
} as const;

// Project data
export const PROJECTS = [
  {
    title: 'Automatic Active Phase Selector',
    description: 'A microcontroller-based project that automatically selects an active phase during power failures, utilizing C++, relays, and sensors.',
    technologies: ['C++', 'Arduino', 'Hardware Integration'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
] as const;

// Navigation links
export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;