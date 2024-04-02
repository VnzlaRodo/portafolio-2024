export interface Project{
    title: string,
    date: string,
    description: string,
    images: {
        avatar: string,
        desktop: string[],
        mobile: string[]
    },
    tags: {
            name: string,
            class: string,
            ico: string
        }[],
    
    github?: string,
    link?: string
}