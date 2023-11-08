const populate = async (value, currency) => {
  let myStr = "";
  url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_N5jud99NsxutIz0c9nVDN3fxiXCJb2xfzEeWKzSG&base_currency=" +
    currency;
  const tableBody = document.querySelector("tbody");
  let response = await fetch(url);
  let rJson = await response.json();
  document.querySelector(".output").style.display = "block";

  for (let key of Object.keys(rJson["data"])) {
    myStr += `<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
              </tr>
                 `;
  }
  tableBody.innerHTML = myStr;
};
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  const value = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const currency = document.querySelector("select[name='currency']").value;
  populate(value, currency);
});
