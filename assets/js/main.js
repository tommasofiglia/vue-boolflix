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
    movies: [],
    tvSeries:[]
  },
  methods:{
    searchMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=d9ce04e79902ad058413bc81c0963304&language=it-IT&query=' + this.keyWord + '&page=1&include_adult=false')
      .then(response => {
        this.movies = (response.data.results);
        console.log(this.movies);
        console.log(response);

        // Ciclo for Each dentro all'array movies grazie al quale:
        // - Creo una nuova proprietà per gli oggetti che conteniene il numero di stelle da stampare a schermo corrispondenti alla votazione media.
        // - Creo una nuova proprietà per gli oggetti di movies contenente le sigle delle bandiere corrette per utilizzare l'API di countryflags.io

        this.movies.forEach(item => {
          // Copio ciò che c'è scritto in original_language in flagsNames , dopodiché vedo se ci sono casi in cui al nome delle bandiere nell'API delle bandiere non corrisponde il nome del linguaggio originale. Sostituisco quei casi particolari in modo tale che il richiamo al link che contiene l'API (Effettuato nell'src dell'immagine tramite :src) funzioni.

          let flags = item.original_language;
          item.flagsNames = flags;

          // Casi particolari, li gestisco con switch case.
          switch (item.original_language) {
            case "en":
              item.flagsNames = "gb";
              break;
            case "ko":
              item.flagsNames = "kr";
              break;
            case "ja":
              item.flagsNames = "jp";
              break;
            case "zh":
              item.flagsNames = "cn";
              break;
            case "da":
              item.flagsNames = "dk";
              break;
            case "cs":
              item.flagsNames = "se";
              break;
            case "he":
              item.flagsNames = "ca";
              break;
            case "fa":
              item.flagsNames = "ir";
              break;
            case "hi":
              item.flagsNames = "in";
              break;
            case "ur":
              item.flagsNames = "pk";
              break;

          }

          let stars = Math.floor(item.vote_average/2);
          return item.starsVote = stars;

        });

      });
    }
  },
  mounted(){
  }
});
