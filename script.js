let val = 0; // Initialize the value

let span_text = document.querySelector("span");

document.getElementById('Decre').addEventListener('click', function() {
    val--;
    span_text.innerText = val;
    updateTextColor();
});

document.getElementById('Incre').addEventListener('click', function() {
    val++;
    span_text.innerText = val;
    updateTextColor();
});

document.getElementById('Res').addEventListener('click', function() {
    val = 0;
    span_text.innerText = val;
    updateTextColor();
});

function updateTextColor() {
    if (val > 0) {
        span_text.style.color = "green";
    } else if (val < 0) {
        span_text.style.color = 'red';
    } else {
        span_text.style.color = 'rgb(34, 34, 34)';
    }
}
