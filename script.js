const output = document.getElementById("output");
const length = document.getElementById("length");

length.addEventListener("change", generate);

checkboxes.forEach((checkbox) => checkbox.addEventListener("change", generate));

function generate() {
    const len = parseInt(length.value);

    if(len < parseInt(length.min) || len > parseInt(length.max)) {
        output.textContent = "Invalid length";
        return;
    }

    output.textContent = this.id;
}