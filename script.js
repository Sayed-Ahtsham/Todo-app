function myFUN() {
    let textSpace = document.getElementById("textSpace");
    let unorderList = document.getElementById("list");

    let textSpaceValue = textSpace.value.trim();

    if (textSpaceValue !== "") {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let btn = document.createElement("button");
        let icon = document.createElement("i");


        unorderList.append(li);
        li.setAttribute("class", "li-list");
        li.append(span);
        li.append(btn)
        btn.append(icon);
        icon.setAttribute("class", "bi bi-trash3");
        btn.setAttribute("onClick", "deleteLi(this.parentNode)")
        btn.setAttribute("class", "delete");
        span.textContent = textSpaceValue;
        textSpace.value = "";
    }
}
function deleteLi(parentLI) {
    parentLI.remove();
}