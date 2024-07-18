interface Experience {
    title: string;
    description?: string;
    date: string;
    image: string;
    company: string;
}

export const experiences: Experience[] = [
    {
        image: 'oh-logo.png',
        company: 'Open House Fasilkom UI 2024',
        title: 'Project Manager',
        description: 'Managed UI/UX and IT Dev Division for Open House Fasilkom UI 2024.',
        date: 'June 2024 - Present',
    },
    {
        image: 'ddp0.png',
        company: 'Dasar-Dasar Pemrograman 0',
        title: 'Project Officer',
        date: 'April 2024 - Present',
    },
    {
        image: 'ycf.jpg',
        company: 'Youth Catalyst Foundation',
        title: 'Technical Staff',
        date: 'April 2024 - Present',
    },
    {
        image: 'betis.svg',
        company: 'BETIS Fasilkom UI 2023',
        title: 'Front-End Developer',
        date: 'January - April 2024',
    },
    {
        image: 'pmb.svg',
        company: 'PMB Fasilkom UI 2023',
        title: 'Student Coordinator',
        date: 'August - November 2023',
    }
];