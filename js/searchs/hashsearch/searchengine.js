function funkcja() {
  let query = document.getElementById("q").value;
  let url = `http://[::1]:3000?q=${query}`;
  url = `https://hash-searching.herokuapp.com/?q=${query}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.error) document.getElementById("error").innerHTML = res.error;
      else document.getElementById("error").innerHTML = "";
      document.getElementById("query").innerHTML = res.query;
      document.getElementById("result").innerHTML = "";
      for (const el of res.result) {
        document.getElementById("result").innerHTML += `${el}`;
      }
    });
  preventdefault();
}
