import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
//   {
//     _id: userIds[0],
//     firstName: "test",
//     lastName: "me",
//     email: "aaaaaaa@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p11.jpeg",
//     friends: [],
//     location: "San Fran, CA",
//     occupation: "Software Engineer",
//     viewedProfile: 14561,
//     impressions: 888822,
//     createdAt: 1115211422,
//     updatedAt: 1115211422,
//     __v: 0,
//   },
//   {
//     _id: userIds[1],
//     firstName: "Steve",
//     lastName: "Ralph",
//     email: "thataaa@gmail.com",
//     password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p3.jpeg",
//     friends: [],
//     location: "New York, CA",
//     occupation: "Degenerate",
//     viewedProfile: 12351,
//     impressions: 55555,
//     createdAt: 1595589072,
//     updatedAt: 1595589072,
//     __v: 0,
//   },
//   {
//     _id: userIds[2],
//     firstName: "Some",
//     lastName: "Guy",
//     email: "someguy@gmail.com",
//     password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
//     picturePath: "p4.jpeg",
//     friends: [],
//     location: "Canada, CA",
//     occupation: "Data Scientist Hacker",
//     viewedProfile: 45468,
//     impressions: 19986,
//     createdAt: 1288090662,
//     updatedAt: 1288090662,
//     __v: 0,
//   },
//   {
//     _id: userIds[3],
//     firstName: "Whatcha",
//     lastName: "Doing",
//     email: "whatchadoing@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p6.jpeg",
//     friends: [],
//     location: "Korea, CA",
//     occupation: "Educator",
//     viewedProfile: 41024,
//     impressions: 55316,
//     createdAt: 1219214568,
//     updatedAt: 1219214568,
//     __v: 0,
//   },
//   {
//     _id: userIds[4],
//     firstName: "Jane",
//     lastName: "Doe",
//     email: "janedoe@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p5.jpeg",
//     friends: [],
//     location: "Utah, CA",
//     occupation: "Hacker",
//     viewedProfile: 40212,
//     impressions: 7758,
//     createdAt: 1493463661,
//     updatedAt: 1493463661,
//     __v: 0,
//   },
//   {
//     _id: userIds[5],
//     firstName: "Harvey",
//     lastName: "Dunn",
//     email: "harveydunn@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p7.jpeg",
//     friends: [],
//     location: "Los Angeles, CA",
//     occupation: "Journalist",
//     viewedProfile: 976,
//     impressions: 4658,
//     createdAt: 1381326073,
//     updatedAt: 1381326073,
//     __v: 0,
//   },
//   {
//     _id: userIds[6],
//     firstName: "Carly",
//     lastName: "Vowel",
//     email: "carlyvowel@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p8.jpeg",
//     friends: [],
//     location: "Chicago, IL",
//     occupation: "Nurse",
//     viewedProfile: 1510,
//     impressions: 77579,
//     createdAt: 1714704324,
//     updatedAt: 1642716557,
//     __v: 0,
//   },
//   {
//     _id: userIds[7],
//     firstName: "Jessica",
//     lastName: "Dunn",
//     email: "jessicadunn@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p9.jpeg",
//     friends: [],
//     location: "Washington, DC",
//     occupation: "A Student",
//     viewedProfile: 19420,
//     impressions: 82970,
//     createdAt: 1369908044,
//     updatedAt: 1359322268,
//     __v: 0,
//   },
];
// export const users = [
//   {
//     _id: userIds[8],
//     firstName: "dummy",
//     lastName: "dumdum",
//     email: "dummy@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p11.jpeg",
//     friends: [],
//     location: "Guna, Seoul",
//     occupation: "Software Engineer",
//     viewedProfile: 14561,
//     impressions: 888822,
//     createdAt: 1115211422,
//     updatedAt: 1115211422,
//     __v: 0,
//   },
//   {
//     _id: userIds[9],
//     firstName: "Messi",
//     lastName: "Mishra",
//     email: "messi@gmail.com",
//     password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p3.jpeg",
//     friends: [],
//     location: "Los Venta, Qatar",
//     occupation: "Painter",
//     viewedProfile: 12351,
//     impressions: 55555,
//     createdAt: 1595589072,
//     updatedAt: 1595589072,
//     __v: 0,
//   },
//   {
//     _id: userIds[10],
//     firstName: "Khushi",
//     lastName: "Jain",
//     email: "kjain@gmail.com",
//     password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
//     picturePath: "p4.jpeg",
//     friends: [],
//     location: "Canada, Delhi",
//     occupation: "Front End Developer",
//     viewedProfile: 45468,
//     impressions: 19986,
//     createdAt: 1288090662,
//     updatedAt: 1288090662,
//     __v: 0,
//   },
//   {
//     _id: userIds[11],
//     firstName: "Hello",
//     lastName: "Bye",
//     email: "byehello@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p6.jpeg",
//     friends: [],
//     location: "London, Punjab",
//     occupation: "Doctor",
//     viewedProfile: 41024,
//     impressions: 55316,
//     createdAt: 1219214568,
//     updatedAt: 1219214568,
//     __v: 0,
//   },
//   {
//     _id: userIds[12],
//     firstName: "Jaane",
//     lastName: "Do",
//     email: "jaanedo@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p5.jpeg",
//     friends: [],
//     location: "Qatar, Bihar",
//     occupation: "Social Activist",
//     viewedProfile: 40212,
//     impressions: 7758,
//     createdAt: 1493463661,
//     updatedAt: 1493463661,
//     __v: 0,
//   },
//   {
//     _id: userIds[13],
//     firstName: "Amitesh",
//     lastName: "Singh",
//     email: "asingh@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
//     picturePath: "p7.jpeg",
//     friends: [],
//     location: "Los Angeles, Switzerland",
//     occupation: "Competitive Coder",
//     viewedProfile: 976,
//     impressions: 4658,
//     createdAt: 1381326073,
//     updatedAt: 1381326073,
//     __v: 0,
//   },
//   {
//     _id: userIds[14],
//     firstName: "Day",
//     lastName: "Night",
//     email: "dinraat@gmail.com",
//     password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK47skYUy",
//     picturePath: "p6.jpeg",
//     friends: [],
//     location: "Melbourne, Gujarat",
//     occupation: "Contractor",
//     viewedProfile: 414141,
//     impressions: 55322,
//     createdAt: 1219214570,
//     updatedAt: 1219214570,
//     __v: 0,
//   },
// ];

export const posts = [
  // {
  //   _id: new mongoose.Types.ObjectId(),
  //   userId: userIds[1],
  //   firstName: "Steve",
  //   lastName: "Ralph",
  //   location: "New York, CA",
  //   description: "Some really long random description",
  //   picturePath: "post1.jpeg",
  //   userPicturePath: "p3.jpeg",
  //   likes: new Map([
  //     [userIds[0], true],
  //     [userIds[2], true],
  //     [userIds[3], true],
  //     [userIds[4], true],
  //   ]),
  //   comments: [
  //     "random comment",
  //     "another random comment",
  //     "yet another random comment",
  //   ],
  // },
  // {
  //   _id: new mongoose.Types.ObjectId(),
  //   userId: userIds[3],
  //   firstName: "Whatcha",
  //   lastName: "Doing",
  //   location: "Korea, CA",
  //   description:
  //     "Another really long random description. This one is longer than the previous one.",
  //   picturePath: "post2.jpeg",
  //   userPicturePath: "p6.jpeg",
  //   likes: new Map([
  //     [userIds[7], true],
  //     [userIds[4], true],
  //     [userIds[1], true],
  //     [userIds[2], true],
  //   ]),
  //   comments: [
  //     "one more random comment",
  //     "and another random comment",
  //     "no more random comments",
  //     "I lied, one more random comment",
  //   ],
  // },
  // {
  //   _id: new mongoose.Types.ObjectId(),
  //   userId: userIds[4],
  //   firstName: "Jane",
  //   lastName: "Doe",
  //   location: "Utah, CA",
  //   description:
  //     "This is the last really long random description. This one is longer than the previous one.",
  //   picturePath: "post3.jpeg",
  //   userPicturePath: "p5.jpeg",
  //   likes: new Map([
  //     [userIds[1], true],
  //     [userIds[6], true],
  //     [userIds[3], true],
  //     [userIds[5], true],
  //   ]),
  //   comments: [
  //     "one more random comment",
  //     "I lied, one more random comment",
  //     "I lied again, one more random comment",
  //     "Why am I doing this?",
  //     "I'm bored",
  //   ],
  // },
  // {
  //   _id: new mongoose.Types.ObjectId(),
  //   userId: userIds[5],
  //   firstName: "Harvey",
  //   lastName: "Dunn",
  //   location: "Los Angeles, CA",
  //   description:
  //     "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
  //   picturePath: "post4.jpeg",
  //   userPicturePath: "p7.jpeg",
  //   likes: new Map([
  //     [userIds[1], true],
  //     [userIds[6], true],
  //     [userIds[3], true],
  //   ]),
  //   comments: [
  //     "I lied again, one more random comment",
  //     "Why am I doing this?",
  //     "I'm bored",
  //     "I'm still bored",
  //     "All I want to do is play video games",
  //     "I'm going to play video games",
  //   ],
  // },
  // {
  //   _id: new mongoose.Types.ObjectId(),
  //   userId: userIds[6],
  //   firstName: "Carly",
  //   lastName: "Vowel",
  //   location: "Chicago, IL",
  //   description:
  //     "Just a short description. I'm tired of typing. I'm going to play video games now.",
  //   picturePath: "post5.jpeg",
  //   userPicturePath: "p8.jpeg",
  //   likes: new Map([
  //     [userIds[1], true],
  //     [userIds[3], true],
  //     [userIds[5], true],
  //     [userIds[7], true],
  //   ]),
  //   comments: [
  //     "I lied again, one more random comment",
  //     "Why am I doing this?",
  //     "Man I'm bored",
  //     "What should I do?",
  //     "I'm going to play video games",
  //   ],
  // },
  // {
  //   _id: new mongoose.Types.ObjectId(),
  //   userId: userIds[7],
  //   firstName: "Jessica",
  //   lastName: "Dunn",
  //   location: "Washington, DC",
  //   description:
  //     "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
  //   picturePath: "post6.jpeg",
  //   userPicturePath: "p9.jpeg",
  //   likes: new Map([
  //     [userIds[1], true],
  //     [userIds[2], true],
  //   ]),

  //   comments: [
  //     "Can I play video games now?",
  //     "No let's actually study",
  //     "Never mind, I'm going to play video games",
  //     "Stop it.",
  //     "Michael, stop it.",
  //   ],
  // },
];
// export const posts = [
//   {
//   _id: new mongoose.Types.ObjectId(),
//     userId: userIds[8],
//     firstName: "Dummy",
//     lastName: "dumdum",
//     location: "Guna, Seoul",
//     description:
//       "What a lovely day it is !",
//     picturePath: "post2.jpeg",
//     userPicturePath: "p6.jpeg",
//     likes: new Map([
//       [userIds[7], true],
//       [userIds[4], true],
//       [userIds[1], true],
//       [userIds[2], true],
//     ]),
//     comments: [
//       "Taj Mahal, Wah Taj!",
//       "You can't lick your elbow.",
//       "AC stands for AC and not for AC",
//       "Batman hero of DC",
//       "MCU over DC",
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[9],
//     firstName: "Messi",
//     lastName: "Mishra",
//     location: "Los Venta, Qatar",
//     description: "main nhi bolunga?",
//     picturePath: "post1.jpeg",
//     userPicturePath: "p3.jpeg",
//     likes: new Map([
//       [userIds[0], true],
//       [userIds[2], true],
//       [userIds[3], true],
//       [userIds[4], true],
//     ]),
//     comments: [
//       "Oni giri",
//       "Roronoa Zoro",
//       "Monkey D. Luffy",
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[10],
//     firstName: "Khushi",
//     lastName: "Jain",
//     location: "Canada, Delhi",
//     description:
//       "What a beautiful car it is. A true class in itself !",
//     picturePath: "post3.jpeg",
//     userPicturePath: "p5.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[6], true],
//       [userIds[3], true],
//       [userIds[5], true],
//     ]),
//     comments: [
//       "Lots of stuff on their way",
//       "Nasa and SpaceX are in competition",
//       "ISRO is the best",
//       "Boring life",
//       "Watch a movie!",
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[12],
//     firstName: "Jaane",
//     lastName: "Do",
//     location: "Qatar, Bihar",
//     description:
//       "Mujhe kya main to aloo hoon!",
//     picturePath: "post5.jpeg",
//     userPicturePath: "p8.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[3], true],
//       [userIds[5], true],
//       [userIds[7], true],
//     ]),
//     comments: [
//       "Dil nu dildar dila de",
//       "Saare Jahan se acha",
//       "More songs incoming",
//       "I lied, wont be uploading much",
//     ],
//   },
//   {
//     _id: new mongoose.Types.ObjectId(),
//     userId: userIds[13],
//     firstName: "Amitesh",
//     lastName: "Singh",
//     location: "Los Angeles, Switzerland",
//     description:
//       "The great, the legend himself !",
//     picturePath: "post4.jpeg",
//     userPicturePath: "p7.jpeg",
//     likes: new Map([
//       [userIds[1], true],
//       [userIds[6], true],
//       [userIds[3], true],
//     ]),
//     comments: [
//       "Sun rises in the west?",
//       "Just kidding !",
//       "Switzerland is very beautiful",
//       "Names of states are ",
//       "I'm going to play video games",
//       "Last comment of the day.",
//     ],
//   },
// ];