function randomize() {
    subtitles = Array(
        "Cool subtitle pending.",
        "Make sure your servers always brush their teeth at least twice a day!",
        "Coming soon to an Electron app near y-<br>FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory",
        "Have you made a backup today?",
        "My secret ingredient is undefined behavior.",
        "<em>thicc</em> clients",
        "setcap > suid > USER_NS"
    );
    document.getElementById("subtitle").innerHTML = subtitles[Math.floor(Math.random() * subtitles.length)];
}
randomize();
