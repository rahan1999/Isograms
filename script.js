let string = window.prompt("Enter a word to check").toLowerCase().split("");

function isIsogram() {
  for (i = 0; i < string.length; i++) {
    const check = string.filter((element) => element == string[i]);

    if (check.length >= 2) {
      window.alert("Word is not a isogram");
      return;
    }
  }

  window.alert("Word is a isogram!");
}

isIsogram();
