let history = [];
let start = () => {
  let number;
  let arr = [];
  let i = document.querySelector("#amount").value;
  for (let index = 0; index < i; index++) {
    number = Math.floor(Math.random() * (document.querySelector("#max").value) + 1);
    if (arr.indexOf(number) == -1) {
      if (document.querySelector(".mui-switch").checked) {
        if (history.indexOf(number) == -1) {
          arr.push(number);
          history.push(number);
        } else {
          i++;
        }
      } else {
        arr.push(number);
        history.push(number);
      }
    } else {
      i++;
    }
  }
  document.querySelector("#result").style.display = "block";
  document.querySelector("#result").innerHTML = "抽到的学生学号为<br>" + arr;
}