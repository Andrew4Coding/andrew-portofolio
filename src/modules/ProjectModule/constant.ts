export const projectsData: projectDataProps[] = [
    {
        title: "Portfolio Website",
        description: "This website serves as a platform to share insights into my personal journey and document the progress I've made throughout my exploration of the dynamic world of software engineering.",
        image: "portfolio.png",
    },
    {
        title: "Mindora AI",
        description: "Learning Management System (LMS) using Laravel and Livewire, integrating advanced features such as an AI-powered essay-checking system utilizing the GPT API and a flashcard creation tool that enables users to generate flashcards from uploaded documents using AI technology.",
        image: "mindora.png",
    },
    {
        title: "Pemilos SMAN 1 Sumbawa 2024 Website",
        description: "A website that serves as a platform for the 2024 Student Council Election at SMAN 1 Sumbawa. This website is designed to facilitate the election process and provide information about the candidates.",
        image: "pemilos-smanika.png",
        projectLink: 'https://www.pemilos-smanika-24.site/'
    },
    {
        title: "Sijarta ngeQuery",
        description: "This website was created as a final 2024/2025 Database course project. It serves as a cleaning service platform, enabling users to book services and workers to fulfill those requests. The database system is designed using pure SQL queries.",
        image: "sijarta.png",
    },
    {
        title: "Eventyog",
        description: "EventYog is a platform that enables users to discover events, purchase exclusive merchandise, leave reviews, and customize their profiles. Developed as part of the Mid-Term and Final Semester projects for the Platform-Based Programming course, the application is built with Django as the backend API and Flutter as the mobile development framework, showcasing an integrated approach to delivering a seamless user experience.",
        image: "eventyog.png",
    },
    {
        title: "Teperunner DSA",
        description: "Developed a website for testing programming tasks in a Data Structures and Algorithms course, allowing students to upload test cases and automatically run them through solution script. The platform also features a debug mode and showcases the execution time of the test case",
        image: "teperunner.png",
    },
    {
        title: "Horus Mobile App",
        description: "I developed this application during the HACKFEST GSC 2023 event, where I took on the role of a Hipster, responsible for designing UI/UX and working on the front-end of the application.",
        image: "horus.png",
    },
    {
        title: "MXGO Tourism Mobile App",
        description: "This application was created as a submission for a competition celebrating the MXGP 2022 event in Samota, Sumbawa, West Nusa Tenggara. I successfully secured 1st place in the general category.",
        image: "mxgo.png",
    },
]

export interface projectDataProps {
    title: string,
    description: string,
    image: string,
    projectLink?: string
}
