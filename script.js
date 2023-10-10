// AJAX


let xhttp = new XMLHttpRequest();
console.log(xhttp );

xhttp.onload = function() {
  console.log(this.responseText);
}

xhttp.open("GET", "ajax_info.txt");
xhttp.send();


function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;

    console.log(this.responseText);
  }
  xhttp.open("GET", "ajax_info.txt",true);
  xhttp.send();
}







document.getElementById("get_data").addEventListener("click", loadJokes)

function loadJokes() {
  const xhttp = new XMLHttpRequest();

  xhttp.onprogress = function() {
    document.getElementById('output').innerHTML = "<h3> Loading.......</h3>"
  }

  xhttp.onload= function() {
    if (this.status == 200) {
      let data = JSON.parse(this.responseText);
      let jokes= data.value
      console.log(data);
      // console.log(jokes);

       let output = "<ol>";
      data.forEach(function(item) {
        console.log(item);
        output += `<li>${item}</li>`
      });
       output += "</ol>";

       document.getElementById('output').innerHTML = output;
    }
  };
  // xhttp.open("GET", "https://api.icndb.com/jokes",true);
  // xhttp.open("GET", "https://api.chucknorris.io/jokes/random/",true);
  xhttp.open("GET", "https://api.chucknorris.io/jokes/categories",true);
  xhttp.send();
}