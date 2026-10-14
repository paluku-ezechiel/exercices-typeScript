// const a: string = "Hello world";
// const n: number = 4;
// const b: boolean = true;
// const d: null = null;
// const array: string[] = ["abc", "Joseph"];
// const user: { firstname: string; [key: string]: string } = {
//   firstname: "Ezechiel",
//   lastname: "Paluku",
// };

// const date: Date = new Date();

// const compteur = <HTMLButtonElement>document.querySelector("#compteur");
// const span = compteur?.querySelector("span") as HTMLSpanElement | null;
// let i = 0;
// const increment = (e: Event) => {
//   e.preventDefault();
//   i++;
//   if (span) {
//     span.innerText = i.toString();
//   }
// };
// compteur?.addEventListener("click", increment);

// function printedId(id: number | string) {
//   if (typeof id === "number") {
//     console.log((id * 3).toString());
//   } else {
//     console.log(id.toUpperCase());
//   }
// }
// printedId(10);

// type Users = {
//   firstname: string;
//   lastname: string;
// };

// const user: Users = { firstname: "Ezechiel", lastname: "Paluku" };
// console.log(user);

// function identity<ArgType>(arg: ArgType): ArgType {
//   return arg;
// }
// const aa = identity<number>(3);
// console.log(aa);

// function identity<ArgType>(arg: ArgType): ArgType {
//   return arg;
// }
// const a = identity<string>("Ezechiel");
// console.log(a.toUpperCase());

// function consoleSize<Type extends {length:number}>(arg: Type): Type {
//   console.log(arg.length);
//   return arg;
// }

// const abb = consoleSize([4]);

// function reverse<T>(arr: readonly T[]): T[] {
//   return [...arr].reverse();
// }
// console.log(reverse<number | string>(["Joel", "joram", "Josue", 40]));

// type UserRole = "admin" | "user";

// type Users = {
//   id: number;
//   name: string;
//   role: UserRole;
// };

// const listUsers: Users[] = [
//   { id: 1, name: "Cedric", role: "admin" },
//   { id: 2, name: "Tacite", role: "user" },
// ];

// const getWelcomeMessage = (userId: number): string => {
//   const user = listUsers.find((u) => u.id === userId);
//   if (user) {
//     if (user.role === "admin") {
//       return `Bienvenue Administrateur ${user.name} !`;
//     } else {
//       return `Bonjour ${user.name}`;
//     }
//   }

//   return "Welcom";
// };

// console.log(getWelcomeMessage(1));

// type Status = "en_cours" | "livre";

// type Orders = {
//   id: string;
//   amount: number;
//   status: Status;
// };

// const listOrders: Orders[] = [
//   { id: "CMD_101", amount: 45.5, status: "en_cours" },
//   { id: "CMD_102", amount: 120.0, status: "livre" },
// ];

// const getOrderStatusMessage = (orderId: string): string => {
//   const order = listOrders.find((orde) => orde.id === orderId);
//   if (!order) {
//     return `Cannot read properties of undefined`;
//   }

//   if (order.status === "livre") {
//     return `La commande ${order.id} a été livrée avec succès !`;
//   }

//   return `La commande ${order.id} est toujours en cours de préparation.`;
// };

// console.log(getOrderStatusMessage("CMD_105"));

type EmailNotification = {
  type: "email";
  email: string;
  sujet: string;
  message: string;
};

type SMSNotification = {
  type: "sms";
  telephone: string;
  message: string;
};

type AppNotification = EmailNotification | SMSNotification;

const sendNotification = (notification: AppNotification): void => {
  if (notification.type === "email") {
    console.log(
      `Email envoyé à ${notification.email} (Sujet: ${notification.sujet}): ${notification.sujet}`,
    );
  } else if (notification.type === "sms") {
    console.log(
      `SMS envoyé au ${notification.telephone}: ${notification.message}`,
    );
  }
};

sendNotification({
  type: "email",
  email: "test@test.com",
  sujet: "Hello",
  message: "Hi",
});
