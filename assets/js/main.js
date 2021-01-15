let app = new Vue({

  el: "#app",
  data: {
    keyWord:"",
    movies: [],
    tvSeries:[]
  },
  methods:{
    search(word) {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=d9ce04e79902ad058413bc81c0963304&language=it-IT&query=' + word + '&page=1&include_adult=false')
      .then(response => {
        this.movies = (response.data.results);
        console.log(this.movies);
        console.log(response);
      });

      axios.get('https://api.themoviedb.org/3/search/tv?api_key=d9ce04e79902ad058413bc81c0963304&language=it_IT&query=' + word)
      .then(response => {
        this.tvSeries = (response.data.results);
        console.log(this.tvSeries);
        console.log(response);
      });
      this.keyWord="";
    },
    // Funzione che returna la sigla del linguaggio originale del film/serietv e , in alcuni casi particolari elencati nello switch case, cambia la sigla nel codice corrispondente al codice della bandiera dell'API per fare si che queste appaiano. Questa funzione verrà inserita nel link contenuto nell':src dell'img che deve stampare la bandierina.
    flagsCode(originalLanguage){

      // Casi particolari che gestisco con switch case.
      switch (originalLanguage) {
        case "en":
          return flagCode = "gb";
          break;
        case "ko":
          return flagCode = "kr";
          break;
        case "ja":
          return flagCode = "jp";
          break;
        case "zh":
          return flagCode = "cn";
          break;
        case "da":
          return flagCode = "dk";
          break;
        case "cs":
          return flagCode = "se";
          break;
        case "he":
          return flagCode = "ca";
          break;
        case "fa":
          return flagCode = "ir";
          break;
        case "hi":
          return flagCode = "in";
          break;
        case "ur":
          return flagCode = "pk";
          break;
        default:
          return flagCode = originalLanguage; //Caso senza eccezioni, quello default, appunto.
          break;
      };
    },
    // Funzione che returna il valore numerico corrispondente alla metà del voto medio (arrotondato per eccesso) tramite "votoStelle". Questo valore viene utilizzato nel v-for (dopo l'in) che serve a stampare le icone stella e anche, attraverso la differenza di 5-votoStelle, per stampare le restanti icone stella vuote.
    stars(votoMedio){
      let votoStelle = Math.ceil(votoMedio/2);
      return votoStelle;
    //In questa funzione, e anche in quella sopra, avrei potuto semplicemente scrivere il valore del return(sopra pari a originalLanguage e qui pari all'operazione matematica). Ho usato delle variabili nuove (flagCode e votoStelle) solo perché a livello di ragionamento, al momento, mi trovo meglio.
    }
  },
  mounted(){
    this.search("tommy");
  }

});
