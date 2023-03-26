let remove = document.getElementById("delete");
let typed = document.getElementById("typed");

// remove.addEventListener("click", deleteChar(typed.value));


function deleteChar(a) {
  a = a.substring(0 , a.length-1);
  return a;
}

console.log(deleteChar(typed.value));