let incrementButton = document.createElement('button');
incrementButton.id = 'btn';
incrementButton.innerHTML = 0;
document.body.appendChild(incrementButton);
incrementButton.addEventListener("click", function() {
    incrementButton.innerHTML++;
}
);