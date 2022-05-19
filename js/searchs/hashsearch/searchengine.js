function funkcja() {
  let query = document.querySelector("#q").value;
  const btn = document.querySelector(".btn");
  let url = `http://[::1]:3000?q=${query}`;
  url = `https://hash-searching.herokuapp.com/?q=${query}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.error)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Brak wyników!",
        });
      else document.getElementById("query").innerHTML = res.query;
      document.getElementById("result").innerHTML = "";
      for (const el of res.result) {
        document.getElementById("result").innerHTML += `${el} `;
      }
    });
}

//document.getElementById("error").innerHTML = res.error;
//document.getElementById("error").innerHTML = "";
