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
const listOrders = [
    { id: "CMD_101", amount: 45.5, status: "en_cours" },
    { id: "CMD_102", amount: 120.0, status: "livre" },
];
const getOrderStatusMessage = (orderId) => {
    const order = listOrders.find((orde) => orde.id === orderId);
    if (!order) {
        return `Cannot read properties of undefined`;
    }
    if (order.status === "livre") {
        return `La commande ${order.id} a été livrée avec succès !`;
    }
    return `La commande ${order.id} est toujours en cours de préparation.`;
};
console.log(getOrderStatusMessage("CMD_105"));
