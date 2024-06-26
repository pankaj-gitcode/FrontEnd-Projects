import { atom } from "recoil";

export const APIDataAtom = atom({
    key: 'APIDataAtom',
    default: ''
})

export const imagesAtom = atom({
    key: 'imagesAtom',
    default: [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg',
         },
         {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
         },
         {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg'
         }
    ]

})