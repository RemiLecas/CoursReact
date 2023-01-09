console.log('Lancement du Js');

let myNumberTab = [1, 44, 12, 38, 444, 99, 150];

let myStringChain = 'chaîne de caractères';

let tab1 = [1, 2];
let tab2 = [12, 89];

let myObject = {
    a: 12,
    b: 444,
    c: 5,
    d: 157
};

let mySet = [12, 27, 89, 78, 120, 66, 12, 2, 27, 89, 66, 44];

let myVariable1 = 45;
let myVariable2 = 12;

let Object1 = {
    a: 89,
    b: 72
};

let Object2 = {
    f: 44,
    g: 480
};

let mySumArray = [1, 15, 9, 44];

let lastObject = {b:2, a: 1, d:8, c:3}


//Exo 1
findLargestNumber(myNumberTab);

// Exo 2
sortWords();

// Exo 3
countOccurrences(myStringChain);

//Exo 4
flattenArray(tab1, tab2);

// Exo 5
removeDupes(mySet);

//Exo 6
swapVariables(myVariable1, myVariable2);

//Exo 7
parseObject(myObject);

//Exo 8
mergeObjects(Object1, Object2);

//Exo 9
sumArray(mySumArray);

//Exo 10
sortObject(lastObject);

function findLargestNumber(myTab) {
    console.log('Je veux le plus grand nombre de ce tableau: [1, 44, 12, 38, 444, 99, 150]');
    console.log('Le plus grand nombre de mon tableau est: ', Math.max(...myTab));
}

function sortWords() {
    console.log('Je veux triés alphabétiquement ce tableau: [Bonjour, Au revoir, Note, Cours]');
    const sortFinalWords = (tabWords) => tabWords.sort();
    console.log('Après le trie: ', sortFinalWords(['Bonjour', 'Au revoir', 'Note', 'Cours']));
}

function countOccurrences(myChain) {
    let i = 0;
    console.log('je veux renvoyer le nombre de fois que le caractère apparaît dans la chaîne: chaîne de caractère');

    for (const myString of myChain) {
        if (myString.includes('a')) {
            i++;
        }
    }
    console.log('Il y a ', i, ' de a dans la chaine de caractère')
}

function flattenArray(myTab1, myTab2) {

    let myTab3 = [myTab1, myTab2];

    console.log('Renvoie notre tableau plat: ', myTab3.flat())
}

function removeDupes(thisSet) {
    console.log('Tableau de base', thisSet);

    let myFinalSet = [];

    myFinalSet = new Set(thisSet);

    console.log('Tableau avec uniquement les nombres uniques', ...myFinalSet);
}

function swapVariables(Var1, Var2) {

    [Var1, Var2] = [Var2, Var1]

    console.log(Var1, Var2)
}

function parseObject(myParseObject) {
    console.log(...Object.values(myParseObject));
}

function mergeObjects(myMerge1, myMerge2) {
    console.log(Object.assign(myMerge1, myMerge2));
}

function sumArray(myArray) {
    const initalValue = 0;

    const sumArray = myArray.reduce(
        (add, currentValue) => add + currentValue,
        initalValue
    );

    console.log(sumArray);
}

function sortObject(myLastObject) {    
    const sortFinalObject = (tabObject) => tabObject.sort();
    console.log('Après le trie: ', sortFinalObject([...Object.entries(myLastObject)]));
}