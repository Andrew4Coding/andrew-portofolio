import { projectsDataInterface } from "./interface";

export const socialData = [
    {
        'name': 'Linkedin',
        'link': 'https://www.linkedin.com/in/andrewaryo'
    },
    {
        'name': 'Github',
        'link': 'https://github.com/Andrew4Coding'
    },
    {
        'name': 'Instagram',
        'link': 'https://www.instagram.com/and_ryo02'
    },
    {
        'name': 'Twitter',
        'link': 'https://twitter.com/CoorD3pressoy'
    }
];

export const sectionData = [
    {
        'name': 'Welcome',
        'logo': 'home.svg',
        'id': 'welcome'
    },
    {
        'name': 'About Me',
        'logo': 'about.svg',
        'id': 'about'
    },
    {
        
        'name': 'Experience',
        'logo': 'star.svg',
        'id': 'experience'
    },
    {
        'name': 'Projects',
        'logo': 'projects.svg',
        'id': 'projects'
    },
    {
        'name': 'Skills',
        'logo': 'skills.svg',
        'id': 'skills'
    },
];

export const ProjectsData: projectsDataInterface[] = [
    {
        name: 'Portfolio Website',
        description: "This website serves as a platform to share insights into my personal journey and document the progress I've made throughout my exploration of the dynamic world of software engineering.",
        skills: ['nextjs.svg', 'typescript.svg', 'chakra.svg', 'framer.svg', 'tailwind.svg'],
        link: 'https://github.com/Andrew4Coding/andrew-portofolio',
        image: 'portfolio.png'
    },
    {
        name: 'BETIS Fasilkom UI 2024 Website',
        description: 'I contributed to the creation of this website during BETIS FASILKOM UI 2024 committee, focusing on the course list section. It was a learning experience in Git and Rest API.',
        skills: ['nextjs.svg', 'typescript.svg',  'tailwind.svg', 'git.svg'],
        link: 'https://betis.cs.ui.ac.id/',
        image: 'betis.png'
    },
    {
        name: 'HORUS Mobile App',
        description: "I developed this application during the HACKFEST GSC 2023 event, where I took on the role of a Hipster, responsible for designing UI/UX and working on the front-end of the application.",
        skills: ['dart.svg', 'flutter.svg', 'firebase.svg', 'Figma.svg'],
        link: 'https://github.com/Andrew4Coding/horus-frontend',
        image: 'horus.png'
    },
    {
        name: 'BETIS Fasilkom UI 2024 Open Recruitment Website',
        description: "This website was created as part of the selection process for the BETIS FASILKOM UI 2024 committee, specifically in the Website Development Team. During this project, I gained valuable insights into fetch logic in React JS.",
        skills: ['react.svg', 'tailwind.svg', 'framer.svg', 'vite.svg'],
        link: 'https://github.com/Andrew4Coding/betis-app',
        image: 'betis-oprec.png'
    },
    {
        name: 'Simple TODO List Website',
        description: "This website was created as part of my application for the Software Engineer position in COMPFEST 16 FASILKOM UI committee selection. Throughout this project, I gained extensive knowledge in Express JS and database management.",
        skills: ['react.svg', 'nextjs.svg', 'tailwind.svg', 'express.svg', 'firebase.svg'],
        link: 'https://github.com/Andrew4Coding/CFCLOSEREC-FE',
        image: 'todo.png'
    },
    {
        name: 'GAUNG Search',
        description: "This website was created to facilitate CS UI 23 students in finding classmates for specific courses. I learned a lot about the fundamentals of React JS during this project.",
        skills: ['react.svg'],
        link: 'https://github.com/Andrew4Coding/horus-frontend',
        image: 'gaung.png'
    },
];

export const mySkills = [
    {
        tabName: 'Languanges',
        skills: [
            {
                name: 'Javascript',
                image: 'js',
            },
            {
                name: 'Typescript',
                image: 'typescript',
            },
            {
                name: 'Python',
                image: 'python',
            },
            {
                name: 'Java',
                image: 'java',
            },
            {
                name: 'Dart',
                image: 'dart',
            }
        ]
    },
    {
        tabName: 'Frameworks',
        skills: [
            {
                name: 'Next JS',
                image: 'nextjs',
            },
            {
                name: 'Express JS',
                image: 'express',
            },
            {
                name: 'Prisma',
                image: 'prisma',
            },
            {
                name: 'Tailwind CSS',
                image: 'tailwind',
            },
            {
                name: 'Flutter',
                image: 'flutter',
            },
        ]
    },
    {
        tabName: 'Libraries',
        skills: [
            {
                name: 'React JS',
                image: 'react',
            },
            {
                name: 'Chakra UI',
                image: 'chakra',
            },
            {
                name: 'Headless UI',
                image: 'headless',
            },
            {
                name: 'Framer Motion',
                image: 'framer',
            }
        ]
    },
    {
        tabName: 'Database',
        skills: [
            {
                name: 'Mongo DB',
                image: 'mongo',
            },
            {
                name: 'PostgreSQL',
                image: 'postgre',
            },
            {
                name: 'Firebase',
                image: 'firebase'
            }
        ]
    },
    {
        tabName: 'Other',
        skills: [
            {
              name: "Figma",
              image: 'Figma' 
            },
            {
                name: 'Vite JS',
                image: 'vite',
            },
            {
                name: 'Git',
                image: 'git',
            },
            {
                name: 'Vercel',
                image: 'vercel',
            },
        ]
    },
];

export const myExperiences = [
    {
        title: "Betis Fasilkom UI",
        description: "Website Development Staff",
        date: "September 2023 - Now",
        companyLogo: 'betis.svg',
        details: [
            'Participated in the development of the BETIS FASILKOM UI 2024 website',
            'Actively involved in weekly meetings and sync-ups',
            'Gained a deeper understanding of concepts in Next JS, Rest API, and Git System'
        ]
    },
    {
        title: "Pekan RISTEK Website Development Open Class",
        description: "Participant",
        date: "November 2023",
        companyLogo: 'ristek.png',
        details: [
            'Progressively learn Javascript frameworks and apply them in personal website development projects',
            'Actively Participating in each meeting',
        ]
    },
    {
        title: "GDSC UI",
        description: "Member",
        date: "September 2023 - Now",
        companyLogo: 'gdsc.jpg',
        details: [
            'Participated in weekly Study Jam sessions',
            'Contributed to Hackfest 2023, progressing through the submission of the third phase',
        ]
    },
    {
        title: "BEM Fasilkom UI",
        description: "Intern Staff at PKKM Division",
        date: "September 2023 - December 2023",
        companyLogo: 'pkkm.png',
        details: [
            'Created a market research survey form to analyze the interests and preference of Fasilkom Students',
            'Actively participating in managing the division team to work on the agenda set by BEM Fasilkom UI',
            'Actively attending all division meetings and discussions',
        ]
    },
    {
        title: "PMB Fasilkom UI",
        description: "Student Coordinator",
        date: "September 2023 - October 2023",
        companyLogo: 'pmb.svg',
        details: [
            "Serving as a reliable source of PMB Fasilkom UI Informations for all batch 2023 students.",
            'Organizing batch’s website, social media, and gathering.',
        ]
    },
];

export const AboutMeImage = [
    {
        text: 'This is me opening the CS UI 23 Gathering as PMB Coordinator of CS UI 23',
        image: 'welcome.jpg'
    },
    {
        text: 'This is me presenting about the University of Indonesia at the Sasambo UI Goes to NTB event',
        image: 'sasambo.jpeg'
    },
    {
        text: 'This is me successfully organizing a CS UI 23 high school themed cosplay',
        image: 'sma.jpg'
    }
]