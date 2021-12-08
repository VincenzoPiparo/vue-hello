Vue.config.devtools = true;


// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
const app = new Vue(
    {
        el: '#root',
        data:{
            userMessage: 'hi, its me and Im from VueJS',
            imageDescription: 'https://cdn.studenti.stbm.it/images/2021/08/20/trentino-alto-adige-orig.jpeg'
        }
    }
);