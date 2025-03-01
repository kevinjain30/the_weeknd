function submitPoll() {
    let pollOptions = document.getElementsByName('album');
    let selected = "";
    for (let option of pollOptions) {
        if (option.checked) {
            selected = option.value;
            break;
        }
    }
    if (selected) {
        document.getElementById("pollResult").innerText = `Thanks for voting! Your favorite album is ${selected}.`;
    } else {
        alert("Please select an option before voting!");
    }
}
