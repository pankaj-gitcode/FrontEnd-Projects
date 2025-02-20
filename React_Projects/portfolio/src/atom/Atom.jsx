import { atom } from "recoil";
import { profileImg } from "../assets/asset";
import axios from "axios";


// ----- SPLINE -----
export const splineAtom = atom({
    key: 'splineAtom',
    default: {URL: 'https://prod.spline.design/6ergQDvH14-iwc63/scene.splinecode'}
})

export const projectAtom = atom({
    key: 'projectTitleAtom',
    default: [
        {
            projectId: 1,
            projectTitle: 'Text To Image Generator',
            gitHubLink: 'https://github.com/pankaj-gitcode1',
            webLink: 'https://google.com1',
            image: profileImg.img1
        },
        {
            projectId: 2,
            projectTitle: 'Food Delivery WebApp',
            gitHubLink: 'https://github.com/pankaj-gitcode2',
            webLink: 'https://google.com2',
            image: profileImg.thumbnail2
        },
        {
            projectId: 3,
            projectTitle: 'Portfolio',
            gitHubLink: 'https://github.com/pankaj-gitcode3',
            webLink: 'https://google.com3',
            image: profileImg.img1
        },
        {
            projectId: 4,
            projectTitle: 'Password Generator',
            gitHubLink: 'https://github.com/pankaj-gitcode4',
            webLink: 'https://google.com4',
            image: profileImg.thumbnail2
        },
        {
            projectId: 5,
            projectTitle: 'AI Code Editor',
            gitHubLink: 'https://github.com/pankaj-gitcode5',
            webLink: 'https://google.com5',
            image: profileImg.img1
        }
    ]
})

//------ VIDEO -----
export const videoAtom = atom({
    key: 'videoAtom',
    default: profileImg.contact_robot
})

// ------ EXIT -----
export const exitAtom = atom({
    key: 'exitAtom',
    default: false
})