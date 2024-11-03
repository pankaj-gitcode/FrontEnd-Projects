import { atom } from "recoil";
import { videos } from "../assets/videoAssets";


export const videosAtom = atom({
    key: 'videosAtom',
    default: videos.map(e=>e)
})


export const progressUpdateAtom = atom({
    key: 'progressUpdateAtom',
    default:0 
})