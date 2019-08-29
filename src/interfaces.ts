/**
 * This is the interface that represents an entry of our To Do list.
 * It can be used in the type annotations.
 * Prefixing it with `I` is a Typescript convention.
 */
// @TODO esporta l'interfaccia
 interface IToDoEntry {
    completed: boolean;
    // JS Date
    creationDate;  // @TODO annota come JS Date
    description: string;
    dueDate: Date;  // @TODO dichiara dueDate come opzionale
    // The ES6 Symbol is capitalized, but its TypeScript primitive data type is lowercase.
    id: symbol;
    // tags is an array of strings.
    tags;  // @TODO Dichiara tags come array di stringhe.
}
