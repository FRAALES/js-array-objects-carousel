//Crea un array composto da 10 automobili
//Ogni oggetto/automobile avrà le seguenti Proprietà--> marca, modello, alimentazione (benzina, diesel, gpl, metano, elettrico)

const automobili = [
    {Marca: 'Opel', Modello: 'Agila', alimentazione: 'benzina'},
    {Marca: 'Opel', Modello: 'Mokka', alimentazione: 'gpl'},
    {Marca: 'Fiat', Modello: 'Panda', alimentazione: 'metano'},
    {Marca: 'Tesla', Modello: 'Turbo', alimentazione: 'elettrico'},
    {Marca: 'Mercedes', Modello: 'Classe A', alimentazione: 'diesel'},
    {Marca: 'Fiat', Modello: 'Multipla', alimentazione: 'benzina'},
    {Marca: 'Mercedes', Modello: 'GLA', alimentazione: 'benzina'},
    {Marca: 'Alfa Romeo', Modello: 'GT', alimentazione: 'diesel'},
    {Marca: 'Nissan', Modello: 'Qasqai', alimentazione: 'diesel'},
    {Marca: 'Citroen', Modello: 'C3', alimentazione: 'benzina'},
];


//Dividi le auto in 3 array separati:
//Nel primo array solo le auto a benzina

const benzina = automobili.filter(automobili => automobili.alimentazione==="benzina");

console.log(benzina);



//Nel secondo solo le auto diesel

const diesel = automobili.filter(automobili => automobili.alimentazione === "diesel");

console.log(diesel);


//Nel terzo tutte le altre auto
const altre = automobili.filter(automobili => (automobili.alimentazione !== "diesel") && (automobili.alimentazione !== "benzina"));

console.log(altre);

//Stampa in console i 3 array




//