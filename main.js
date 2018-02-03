var input_data = () => {

    let rows = "";
    const name = document.getElementById("name").value;
    const roll = document.getElementById("rollno").value;
    const year = document.getElementById("year").value;
    const stream = document.getElementById("stream").value;
    if(name!= null && name.trim() !== '' && roll!= null && roll.trim() !== '' && year!= null && year.trim() !== '' && stream!= null && stream.trim() !== '')
    {
        rows += `<tr><td>${roll}</td><td>${name}</td><td>${year}</td><td>${stream}</td></tr>`;
        $(rows).appendTo("#list tbody");
    }
    else alert("Cannot leave empty");

    document.getElementById("rollno").value = "";
    document.getElementById("name").value = "";
    document.getElementById("year").value = "";
    document.getElementById("stream").value = "";
}

var deleteRow = row => {
    const i = prompt("Enter the row you want to delete");
    document.getElementById("list").deleteRow(i);
}

var edit = () => {
    const roll = prompt("Enter the roll number you want to edit");
    const trs = document.getElementsByTagName('tr');
    let j = 0;
    for (let i of trs) {
        if (i.children[0].innerHTML == roll) {
            const o = prompt("Enter new passout year");
            const q = prompt("Enter new stream");

            if(o== null && o.trim()== '' && q== null && q.trim()== '')
            {
                return;
            }

            i.children[2].innerHTML = o;
            i.children[3].innerHTML = q;
            return;
        }
        j++;
    }
    if (j == trs.length) {
        alert("No such rollno");
        return;
    }
}