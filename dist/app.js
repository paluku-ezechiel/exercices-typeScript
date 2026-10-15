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
const listeArticle = [
    { nom: "Ordinateur", prix: 600, tauxTVA: 2 },
    { nom: "Imprimante", prix: 500, tauxTVA: 5 },
];
function calculerTotalArticle(article) {
    const prixTTC = article.prix * (1 + article.tauxTVA);
    return `L'article "${article.nom}" coûte ${prixTTC}€ TTC.`;
}
console.log(calculerTotalArticle(listeArticle[0]));
