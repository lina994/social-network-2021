import logoImage from './resources/logo/m7_logo.svg';      // Header
import coverImage from './resources/cover_image.jpg'       // Cover
import profileImage from './resources/profile_image.jpg';  // Avatar, ProfileInformation, Post
import profileImage2 from './resources/profile_image2.jpg';  // Dialogs
import profileImage3 from './resources/profile_image3.jpg';  // Dialogs
import profileImage4 from './resources/profile_image4.jpg';  // Dialogs

// Header
let header = {
  logo: logoImage
};

// Avatar
let avatar = {
  imgSrc: profileImage,
  name: "Oscar",
  birthday: "2016-02-29",  // "YYYY-MM-DD"
  location: "Tel-Aviv, Israel"
};

// Profile
let posts = [
  {
    author: {
      userId: 1,
      name: "Oscar",
      imgSrc: profileImage
    },
    date: "7/2/21, 13:00",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.`,
    likes: 5,
    comments: [
      {
        author: {
          userId: 1,
          name: "Oscar",
          imgSrc: profileImage
        },
        date: "8/2/21, 10:00",
        text: `Lorem ipsum dolor sit`
      }
    ]
  },
  {
    author: {
      userId: 1,
      name: "Oscar",
      imgSrc: profileImage
    },
    date: "12/2/21, 10:00",
    text: `Lorem ipsum voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.`,
    likes: 15,
    comments: [
      {
        author: {
          userId: 1,
          name: "Oscar",
          imgSrc: profileImage
        },
        date: "7/2/21, 13:00",
        text: `Lorem ipsum dolor sit`
      }
    ]
  }
];

let profilePage = {
  cover: {
    imgSrc: coverImage
  },
  profileInfo: {
    userId: 1,
    imgSrc: profileImage,
    name: "Oscar",
    birthday: "2016-02-29",  // "YYYY-MM-DD"
    location: "Tel-Aviv, Israel",
    education: "",
    website: ""
  },
  posts: posts
};

// Dialogs
let dialogsPage = {
  contacts: [
    {
      userId: 2,
      name: "Leo",
      imgSrc: profileImage2
    },
    {
      userId: 3,
      name: "Grey",
      imgSrc: profileImage3
    },
    {
      userId: 4,
      name: "Flora",
      imgSrc: profileImage4
    }
  ],
  dialogs: [
    {
      userId: 2,
      name: "Leo",
      imgSrc: profileImage2,
      messages: [
        {
          from: "Leo",
          data: "15/2/21, 13:00",
          text: "Hi!",
          recieved: true
        }
      ]
    },
    {
      userId: 3,
      name: "Grey",
      imgSrc: profileImage3,
      messages: [
        {
          from: "Grey",
          data: "14/2/21, 14:00",
          text: "Good morning!",
          recieved: true
        }
      ]
    },
    {
      userId: 4,
      name: "Flora",
      imgSrc: profileImage4,
      messages: [
        {
          from: "Flora",
          data: "14/2/21, 14:00",
          text: "Good morning!",
          recieved: true
        }
      ]
    }
  ]
}

// state
let state = {
  header: header,
  avatar: avatar,
  sidebar: {},
  profilePage: profilePage,
  dialogsPage: dialogsPage
};

// store
let store = {
  state: state
}

export default store;