let start = () => {
  let number;
  let arr = [];
  let i = document.querySelector("#amount").value;
  for (let index = 0; index < i; index++) {
    number = Math.floor(Math.random() * (document.querySelector("#max").value) + 1);
    if (arr.indexOf(number) == -1) {
      arr.push(number);
    } else {
      i++;
    }
  }
  console.log(arr);
}