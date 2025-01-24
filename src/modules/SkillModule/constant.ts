const SKILLS_ARRAY = [
    'react', 'tailwind', 'typescript', 'javascript', 'git'
]

const SKILLS: SkillProps[] = [
    {
        name: 'Next.js',
        image: '/nextjs.svg',
        link: 'https://nextjs.org/'
    },
    {
        name: 'Remix Run',
        image: '/remix.svg',
        link: 'https://remix.run/'
    },
    {
        name: 'Nest JS',
        image: '/nest.svg',
        link: 'https://nestjs.com/'
    },
    {
        name: 'Django',
        image: '/django.svg',
        link: 'https://www.djangoproject.com/'
    },
    {
        name: "Laravel",
        image: '/laravel.png',
        link: "https://laravel.com/"
    },
    {
        name: "Flutter",
        image: '/flutter.svg',
        link: "https://flutter.dev/"
    },
    {
        name: "Golang",
        image: '/golang.png',
        link: "https://golang.org/"
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
        name: 'Amazon Web Services',
        image: '/aws.png',
        link: 'https://aws.amazon.com/'
    },
    {
        name: "Google Cloud Platform",
        image: '/gcp.png',
        link: 'https://cloud.google.com/'
    },
    {
        name: 'MongoDB',
        image: '/mongodb.svg',
        link: 'https://www.mongodb.com/'
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
];

export interface SkillProps { 
    name: string
    image: string
    link?: string
}

export {SKILLS_ARRAY, SKILLS}