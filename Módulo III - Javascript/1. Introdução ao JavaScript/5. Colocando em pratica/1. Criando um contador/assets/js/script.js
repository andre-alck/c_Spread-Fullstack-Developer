const btn_plus = document.getElementById("btn-plus");
const btn_minus = document.getElementById("btn-minus");

btn_plus.addEventListener("click", increment);
btn_minus.addEventListener("click", decrement);

var current_number = 0;
document.getElementById("current_number").innerHTML = current_number;

function increment() {
    current_number++;
    document.getElementById("current_number").innerHTML = current_number;
}

function decrement() {
    current_number--;
    document.getElementById("current_number").innerHTML = current_number;

    if (current_number < 0) {
        document.getElementById("current_number").style.color = "red";
    } else {
        document.getElementById("current_number").style.color = "black";
    }
}
