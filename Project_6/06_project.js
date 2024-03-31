const strange = document.querySelector('h5')
var check = 0

const add = document.querySelector("#add")
add.addEventListener("click", function () {
    if (check == 0) {
        strange.innerHTML = "Friends"
        strange.style.color = "green"
        add.innerHTML = "Remove Friend"
        alert("Friend Request Accept")
        check ++;

    }
    else{
        strange.innerHTML = "Stranger"
        strange.style.color = "red"
        add.innerHTML = "Add Friend"

        check --;
    }
})


