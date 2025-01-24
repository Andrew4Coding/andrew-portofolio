interface Experience {
    title: string;
    description?: string;
    date: string;
    image: string;
    company: string;
}

export const experiences: Experience[] = [
    {
        image: 'econ.jpg',
        company: 'Economic Space 2024',
        title: 'Website Associate',
        description: 'Managing and developing the website for Economic Space 2024 using Laravel.',
        date: 'August 2024 - Present',
    },
    {
        image: 'gdg.png',
        company: 'Gooogle Developer Group Universitas Indonesia',
        title: 'Software Engineering Core Team',
        description: 'Managing study jams and workshops for Google Developer Group Universitas Indonesia.',
        date: 'December 2024 - Present',
    },
    {
        image: 'betis.png',
        company: 'BETIS Fasilkom UI 2024',
        title: 'Manager of IT Development',
        date: 'December 2024 - Present',
    },
    {
        image: 'ycf.jpg',
        company: 'Youth Catalyst Foundation',
        title: 'Technical Staff',
        date: 'April 2024 - Present',
    },
    {
        image: 'oh-logo.png',
        company: 'Open House Fasilkom UI 2024',
        title: 'Project Manager',
        description: 'Managed UI/UX and IT Dev Division for Open House Fasilkom UI 2024.',
        date: 'June 2024 - November 2024',
    },
    {
        image: 'ddp0.png',
        company: 'Dasar-Dasar Pemrograman 0',
        title: 'Project Officer',
        date: 'April 2024 - Present',
    },
];