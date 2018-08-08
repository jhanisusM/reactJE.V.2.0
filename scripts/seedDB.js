const mongoose = require("mongoose");
const db = require("../model");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/caballus"
);


const horseSeed = [
    {
        name: "Yankee Pride",
        sire: "Proud Citizen",
        mare: "Yankee Doodle Girl",
        gender: "F",
        age:4,
        date: new Date(Date.now())
    },
    {
        name: "Cause to Wonder",
        sire: "Eskendraya",
        mare: "Female Drama",
        gender: "F",
        age:4,
        date: new Date(Date.now())
    },
    {
        name: "Best of the Blues",
        sire: "Eastwood Decat",
        mare: "Blues Apparition",
        gender: "G",
        age: 5,
        date: new Date(Date.now())
    },  
    {
        name: "Strong Current",
        sire: "Orb",
        mare: "Summer Cruise",
        gender: "C",
        age:3,
        date: new Date(Date.now())
    },
    {
        name: "Zero Gravity",
        sire: "Orb",
        mare: "Freedom Rings",
        gender: "G",
        age:3,
        date: new Date(Date.now())
    },
    {
        name: "Go For Moonshine",
        sire: "Old Fashioned",
        mare: "Go For The Moon",
        gender: "G",
        age:3,
        date: new Date(Date.now())
    },
    {
        name: "Nobutzaboutit",
        sire: "Proud Citizen",
        mare: "Yankee Dooodle Girl",
        gender: "G",
        age:3,
        date: new Date(Date.now())
    },
    {
        name: "Lovanksol",
        sire: "Lovango",
        mare: "Pleasant Guest",
        gender: "G",
        age:3,
        date: new Date(Date.now())
    },
    {
        name: "Link",
        sire: "Matts Broken Vow",
        mare: "Tez Savitra",
        gender: "G",
        age:3,
        date: new Date(Date.now())
    },
    {
        name: "Maho Bay",
        sire: "Spring at Last",
        mare: "Sarah's Song",
        gender: "F",
        age:3,
        date: new Date(Date.now())
    },
    {
        name: "Sirenusa",
        sire: "Tiznow",
        mare: "Spun Silver",
        gender: "F",
        age:3,
        date: new Date(Date.now())
    },
    {
        name: "She's all SkeeT",
        sire: "Trappe Shot",
        mare: "She's all Scat",
        gender: "F",
        age:3,
        date: new Date(Date.now())
    },
    {
        name: "Firstmate",
        sire: "Midshipman",
        mare: "Lion Cub",
        gender: "F",
        age:3,
        date: new Date(Date.now())
    },
    {
        name: "Speed Fafctor",
        sire: "The Factor",
        mare: "",
        gender: "C",
        age:2,
        date: new Date(Date.now())
    },
    {
        name: "Sharp Proposal",
        sire: "Into Mischief",
        mare: "Boom Town Girl",
        gender: "C",
        age:2,
        date: new Date(Date.now())
    },
    {
        name: "Gopher Gold",
        sire: "Horses Greeley",
        mare: "Lion Cub",
        gender: "C",
        age:2,
        date: new Date(Date.now())
    },
];



db.Horse
    .remove({})
    .then(() => db.Horse.collection.insertMany(horseSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
});
    
// 2, G, Jockers Wild, Lovango, Pleasant Guest
// 2, C, Stroll Daddy, Stroll, She's all Scat
// 2, C, Cool Sailer, Ice Box, Miss Kekoa
// 2, F, Delfina, Verrazano, R Victorious Girl
// 2, F, She's so Savvy,Bodemeister,
// 2, F, Que Sera Sera, Blame, Sarah's Song
// 2, F, Steal the Thunder,,
// 2, F, Minn Freya, Matts Broken Vow, Tez Savitra
// 2, F, Laser Ladee, Data Link, Go For The Moon
// 2, F, Strong Patriot, Strong Mandate, Yankee Dooodle Girl


    // {
    //     name: "",
    //     sire: "",
    //     mare: "",
    //     gender: "",
    //     age:,
    //     date: new Date(Date.now())
    // },
