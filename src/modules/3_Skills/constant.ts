const SKILLS_ARRAY = [
    'react', 'tailwind', 'typescript', 'javascript', 'git'
]

const SKILLS: SkillProps[] = [
    {
        name: 'Dart',
        image: '/dart.svg',
        link: 'https://dart.dev/'
    },
    {
        name: 'Docker',
        image: '/docker.png',
        link: 'https://www.docker.com/'
    },
    {
        name: 'Express.js',
        image: '/express.svg',
        link: 'https://expressjs.com/'
    },
    {
        name: 'Firebase',
        image: '/firebase.svg',
        link: 'https://firebase.google.com/'
    },
    {
        name: 'Framer Motion',
        image: '/framer.svg',
        link: 'https://www.framer.com/motion/'
    },
    {
        name: 'Git',
        image: '/git.svg',
        link: 'https://git-scm.com/'
    },
    {
        name: 'Java',
        image: '/java.svg',
        link: 'https://www.java.com/'
    },
    {
        name: 'JavaScript',
        image: '/javascript.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        name: 'MongoDB',
        image: '/mongodb.svg',
        link: 'https://www.mongodb.com/'
    },
    {
        name: 'Nest JS',
        image: '/nest.svg',
        link: 'https://nestjs.com/'
    },
    {
        name: 'Next.js',
        image: '/nextjs.svg',
        link: 'https://nextjs.org/'
    },
    {
        name: 'PosgreSQL',
        image: '/postgresql.svg',
        link: 'https://www.postgresql.org/'
    },
    {
        name: 'Prisma',
        image: '/prisma.svg',
        link: 'https://www.prisma.io/'
    },
    {
        name: 'Python',
        image: '/python.svg',
        link: 'https://www.python.org/'
    },
    {
        name: 'React',
        image: '/react.svg',
        link: 'https://reactjs.org/'
    },
    {
        name: 'Tailwind CSS',
        image: '/tailwind.svg',
        link: 'https://tailwindcss.com/'
    },
    {
        name: 'TypeScript',
        image: '/typescript.svg',
        link: 'https://www.typescriptlang.org/'
    },
    {
        name: 'Vercel',
        image: '/vercel.svg',
        link: 'https://vercel.com/'
    }
];

export interface SkillProps { 
    name: string
    image: string
    link?: string
}

export {SKILLS_ARRAY, SKILLS}