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
const sendNotification = (notification) => {
    if (notification.type === "email") {
        console.log(`Email envoyé à ${notification.email} (Sujet: ${notification.sujet}): ${notification.sujet}`);
    }
    else if (notification.type === "sms") {
        console.log(`SMS envoyé au ${notification.telephone}: ${notification.message}`);
    }
};
sendNotification({
    type: "email",
    email: "test@test.com",
    sujet: "Hello",
    message: "Hi",
});
