function funkcja() {
  let query = document.querySelector("#search").value;
  let url = `http://[::1]:3000?q=${query}`;
  url = `https://studentprojectpbs.netlify.app/page/hashsearch/?q=${query}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.error) document.getElementById("error").innerHTML = res.error;
      else document.getElementById("error").innerHTML = "";
      document.getElementById("time").innerHTML = res.time;
      document.getElementById("hashTime").innerHTML = res.hashTime;
      document.getElementById("query").innerHTML = res.query;
      document.getElementById("result").innerHTML = "";
      for (const el of res.result) {
        document.getElementById(
          "result"
        ).innerHTML += `<div class="result">${el}</div`;
      }
    });
}
