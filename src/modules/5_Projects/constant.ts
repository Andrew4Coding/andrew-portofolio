export const projectsData: projectDataProps[] = [
    {
        title: "Portfolio Website",
        description: "This website serves as a platform to share insights into my personal journey and document the progress I've made throughout my exploration of the dynamic world of software engineering.",
        image: "portfolio.png",
        skills: ['nextjs', 'tailwind', 'typescript', 'vercel']
    },
    {
        title: "Pemilos SMAN 1 Sumbawa 2024 Website",
        description: "A website that serves as a platform for the 2024 Student Council Election at SMAN 1 Sumbawa. This website is designed to facilitate the election process and provide information about the candidates.",
        image: "pemilos-smanika.png",
        projectLink: 'https://www.pemilos-smanika-24.site/'
    },
    {
        title: "Depefood Ordering Desktop App",
        description: "A desktop application that allows users to order food from Depefood. I worked on this project as a requirement to complete the Programming 4 Basics of Programming 2 assignment. Through this project, I achieved first place for best UI/UX.",
        image: "depefood.png",
    },
    {
        title: "Maniy Financial Website",
        description: "I created this website to participate in the open recruitment for RISTEK 2024. In developing this website, I gained a lot of experience, such as using Prisma ORM and JWT Token.",
        image: "maniy.png",
    },
    {
        title: "Horus Mobile App",
        description: "I developed this application during the HACKFEST GSC 2023 event, where I took on the role of a Hipster, responsible for designing UI/UX and working on the front-end of the application.",
        image: "horus.png",
    },
    {
        title: "BETIS Fasilkom UI 2023 Oprec Website",
        description: "I developed this application during the HACKFEST GSC 2023 event, where I took on the role of a Hipster, responsible for designing UI/UX and working on the front-end of the application.",
        image: "betis-oprec.png",
    }
]

export interface projectDataProps {
    title: string,
    description: string,
    image: string,
    projectLink?: string
    skills?: string[]
}
