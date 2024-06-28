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

export const twoPhonesAtom = atom({
    key: 'twoPhonesAtom',
    default: {url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' }
})