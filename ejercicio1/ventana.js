function getColor() {
    console.log( window.opener.document.getElementById(
        "titulo-principal"));
    console.log(window.parent);
    var color = document.getElementById("color").value;
    window.opener.document.getElementById(
        "titulo-principal"
    ).style.color = color;
    window.parent.document.getElementById(
        "input"
    ).value = document.getElementById("color").text;
}
