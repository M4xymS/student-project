const btn = document.querySelector("#btn");
btn.addEventListener("click", funkcjaboyer);
function funkcjaboyer() {
  const query = document.querySelector("#q").value;

  let url = `http://[::1]:3000?q=${query}`;
  url = `https://https://boyer-moore.herokuapp.com/?q=${query}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.results == 0)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Brak wyników!",
        });
      else
        for (const el of res.results)
          Swal.fire({
            icon: `success`,
            title: `Sukces, wyniki zapytania ${query} to:`,
            text: `${res.results} `,
          });
    });
}
