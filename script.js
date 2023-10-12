// Fetch API


let file = "ajax_info.txt";


fetch(file)
.then(x => x.text())
.then(y => console.log(y))



// async function getText(file) {
//   let x = await fetch(file);
//   let y = await x.text();
//   console.log(y);
// }

getText("ajax_info.txt")



async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
   console.log(myText);
}