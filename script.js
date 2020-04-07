var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

//This is the added code that 
    li.addEventListener("click", function() {
        var finished = this.classList.toggle("done");
        var removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton");

        if (finished) {
            removeButton.appendChild(document.createTextNode("remove"));
            removeButton.classList = "deleteButton";
            li.appendChild(removeButton);

            removeButton.addEventListener("click", function() {
                this.parentElement.remove();
            });
        } else {
            this.getElementsByClassName("deleteButton")[0].remove();
        }
    })

    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.which === 13) {
            createListElement();
        }
    }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



// button.addEventListener("click", function() {
//     if (input.value.length > 0) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// })

// input.addEventListener("keypress", function() {
//     if (input.value.length > 0 && event.which === 13) {
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value = "";
//     }
// })

