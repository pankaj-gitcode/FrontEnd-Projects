import { atom } from "recoil";

export const projectAtom = atom({
    key: 'projectTitleAtom',
    default: [
        {
            projectId: 1,
            projectTitle: 'Text To Image Generator',
            gitHubLink: 'https://github.com/pankaj-gitcode1',
            webLink: 'https://google.com1'
        },
        {
            projectId: 2,
            projectTitle: 'Food Delivery WebApp',
            gitHubLink: 'https://github.com/pankaj-gitcode2',
            webLink: 'https://google.com2'
        },
        {
            projectId: 3,
            projectTitle: 'Portfolio',
            gitHubLink: 'https://github.com/pankaj-gitcode3',
            webLink: 'https://google.com3'
        },
        {
            projectId: 4,
            projectTitle: 'Password Generator',
            gitHubLink: 'https://github.com/pankaj-gitcode4',
            webLink: 'https://google.com4'
        },
        {
            projectId: 5,
            projectTitle: 'AI Code Editor',
            gitHubLink: 'https://github.com/pankaj-gitcode5',
            webLink: 'https://google.com5'
        }
    ]
})