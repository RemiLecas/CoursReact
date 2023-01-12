
Chaque année Js tends à être un vrai langage de programmation.

**Jamais de JS vanilla** 

React utilise des fonctions jsx (version améliorer de JS) --> il va mélangé JS, HTML, CSS

Mono Repo ==> plus simple de faire du versionning car tout les dossiers sont à un endroit

Utiliser des bool dans les templates permet de les tester

index.js = point d'entrée de l'application

spreed Operator = ... -> permet d'ajouter des variables à un objet sans écraser les anciennes

```js
  // Syntaxe de fonction

  const test = test =>test*3;

  const toto = () => {};

  function maFonction(){

  }
```


**Hook** ==> fonction qui gère le cycle de vie et le rendu d'un composant (son état) pour mettre à jour en conséquence. Fonctionne que dans les composants fonctionnels.
Les hook remplacent la quasi totalité des fonctionnalitées


#### useState()

**useState**  : Renvoie une valeur d’état local et une fonction pour la mettre à jour.

Principalement utilisé pour des objets simples

Pendant le rendu initial, l’état local (`state`) a la même valeur que celle passée en premier argument (`initialState`).

```javascript
const [state, setState] = useState(initialState);
```

#### setState()

La fonction `setState` permet de mettre à jour l’état local. Elle accepte une nouvelle valeur d’état local et planifie un nouveau rendu du composant.

```javascript
setState(newState);
```


#### useReducer()

Gère l'état d'un composant

Principalement utilisé pour les objets complexes

useReducer prends en fonction 2 paramètres initiaux => une fonction de type Reducer (en dessous MyReducer) et l'état initial il retourne une variable et l'état 

Un Reducer renvoie une copie d'un objet déjà existant sans écraser l'ancienne valeur.

```javascript
const [state, dispatch] = useReducer(myReducer, {test: 'myString'})
```

useReducer() est plus performant et efficace qu'useState()

#### Dispatch()

Sert aussi à mettre à jour l'état

```JavaScript
const myHandler = {} => {
	dispatch({type: 'MODIFY_TEST_STRING', payload: 'nouvelle valeur'})
}
```

#### Reste

props servent à passer des infos du composant parent vers le composant l'enfant

un composant parent => gere la logique
un composant enfant => gere l'affichage

.then: accessible que de la portée d'ou elle est

function JSON retourne une promesse

composant parent gère la logique 
composant enfant gère l'affichage

Eviter les effets de bords (requette http, js dans react) => pour les éviter il faut utiliser les **uses effect**

la modification d'une dépendance dans un useEffect permet de relancer le useEffect avec un nouveau composant


myAppContext sert à créée un provider => Provider = balise qui founit une fonctionnalité à tout ses enfants

Schéma fonctionnement React: 
![[20230112_160903.jpg]]

#### Réponse question de cours

programmation fonctionnel: mise en avant des fonctions 

useCallback() : renvoit une version mémoïsée (conserve) de la fonction de rappel qui changera uniquement si une des entrées a changé.


#### Projet fin de semaine

Projet Fin de semaine: remplacer des données statics par des données http

#### Pour aller plus loin

1) Maitriser React
2) Maitriser React avec du TypeScript
3) Maitriser 2) avec du NextJs