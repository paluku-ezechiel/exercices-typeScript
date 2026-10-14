"use strict";
// const a: string = "Hello world";
// const n: number = 4;
// const b: boolean = true;
// const d: null = null;
// const array: string[] = ["abc", "Joseph"];
// const user: { firstname: string; [key: string]: string } = {
//   firstname: "Ezechiel",
//   lastname: "Paluku",
// };
const listUsers = [
    { id: 1, name: "Cedric", role: "admin" },
    { id: 2, name: "Tacite", role: "user" },
];
const getWelcomeMessage = (userId) => {
    const user = listUsers.find((u) => u.id === userId);
    if (user) {
        if (user.role === "admin") {
            return `Bienvenue Administrateur ${user.name} !`;
        }
        else {
            return `Bonjour ${user.name}`;
        }
    }
    return "Welcom";
};
console.log(getWelcomeMessage(1));
