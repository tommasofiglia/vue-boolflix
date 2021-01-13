/*******************  MILESTONE 2 *********************
Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera della
nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della
nazione ritornata dall’API (le flag non ci sono in FontAwesome).
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando
attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di
risposta diversi, simili ma non sempre identici)
Qui un esempio di chiamata per le serie tv:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=s
crubs

******************* MILESTONE 2 **********************/

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

        this.movies.forEach(item => {
          let stars = Math.floor(item.vote_average/2);
        return item.starsVote = stars;
        });


      });
    }
  }
});
