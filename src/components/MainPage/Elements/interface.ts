import { Dispatch, SetStateAction } from "react"

export interface socialMediaButtonInterface {
    socialMedia: {
        'name': string,
        'link': string
    }
} 

export interface sendMessageStructure {
    Name: string,
    Email: string,
    Subject: string,
    Message: string,
}

export interface inputFieldInterface {
    title: 'Name' | 'Email' | 'Subject' | 'Message',
    placeholder: string,
    data: sendMessageStructure,
    setData: Dispatch<SetStateAction<any>>,
    name: string,
}

export interface experienceCardInterface {
    item: {
        title: string,
        companyLogo: string,
        description: string,
        date: string,
        details: string[],
    }
}

export interface carouselCardInterface {
    text: string,
    image: string
}

export interface sectionTitleInterface {
    children?: React.ReactNode,
}

