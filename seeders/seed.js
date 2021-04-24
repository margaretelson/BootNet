// let mongoose = require("mongoose");
// let db = require("../models");

// mongoose.connect("mongodb://localhost/Bootnet", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// let bootnetSeed = [
//   {
//     bootnetUser: [
//       {
//         avatar: "https://avatars.githubusercontent.com/u/73293374?v=4",
//         name: "Margaret Elson",
//         bio: "I have a keen eye for understanding client requests and implementing them into an interface!",
//         company: null,
//         hireable: true,
//         portfolio: "https://margaretelson.github.io/Portfolio/",
//         github: "https://api.github.com/users/margaretelson",
//       }
//     ]
//   },
//   {
//     bootnetUser: [
//       {
//         avatar: "https://avatars.githubusercontent.com/u/71039308?v=4",
//         name: "Lindsey Bowen",
//         bio: "Student at Columbia University Coding Boot Camp",
//         company: null,
//         hireable: true,
//         portfolio: "https://lindseybowen.github.io/responsive-portfolio/",
//         github: "https://api.github.com/users/lindseybowen",
//       }
//     ]
//   }
// ];

// db.Bootnet.deleteMany({})
//   .then(() => db.Bootnet.collection.insertMany(bootnetSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
