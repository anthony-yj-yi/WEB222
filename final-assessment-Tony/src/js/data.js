/**
 * data.js
 *
 * Contains data of reviews
 */

var defaultPicURL = "../../media/default_profile_pic.png";
var profilePicURL1 = "../../media/profile_pic_1.jpg";
var profilePicURL2 = "../../media/profile_pic_2.jpg";
var profilePicURL3 = "../../media/profile_pic_3.jpg";

window.reviewData = [
    {   
        name: "Baker Theo",
        date: new Date('Jan 03, 2022 11:33:49'),
        rating: 4,
        comment: "Great game, but the cards aren't of great quality and can bend easily.",
        imageURL: defaultPicURL
    },
    {   
        name: "Justino Veda",
        date: new Date('March 12, 2018 17:01:34'),
        rating: 5,
        comment: "I love this game. We have our own house rules that make it more fun!",
        imageURL: profilePicURL2
    },
    {   
        name: "Harleigh Inge",
        date: new Date('July 27, 2021 22:49:22'),
        rating: 2,
        comment: "Okay game. I prefer Crazy Eights...",
        imageURL: defaultPicURL
    },
    {   
        name: "Lilli Jonatan",
        date: new Date('November 12, 2022 18:09:41'),
        rating: 5,
        comment: "I got this for my son and he and his friends love it!",
        imageURL: profilePicURL1
    },
    {   
        name: "John Doe",
        date: new Date('December 06, 2017 13:24:04'),
        rating: 5,
        comment: "It's a classic. Fantastic game!",
        imageURL: defaultPicURL
    }
];