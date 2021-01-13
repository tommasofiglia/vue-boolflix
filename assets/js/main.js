/*******************  MILESTONE 1 *********************/

//Creare un layout base con una searchbar (una input e un button) in cui possiamo
// scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// 1. Titolo
// 2. Titolo Originale
// 3. Lingua
// 4. Voto

/******************* MILESTONE 1 **********************/

let app = new Vue({

  el: "#app",
  data: {
    keyWord:"",
    hover: true,
    movies: []
  },
  methods:{
    searchMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=d9ce04e79902ad058413bc81c0963304&language=it-IT&query=' + this.keyWord + '&page=1&include_adult=false')
      .then(response => {
        this.movies = (response.data.results);
        console.log(this.movies);
        console.log(response);
      });
    }
  }
});
