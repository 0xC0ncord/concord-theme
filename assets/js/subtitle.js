function randomize() {
    subtitles = Array(
        "Cool subtitle pending.",
        "Make sure your servers always brush their teeth at least twice a day!",
        "Coming soon to an Electron app near y-<br><span class='code'>FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory</span>",
        "Have you made a backup today?",
        "My secret ingredient is undefined behavior.",
        "<em>thicc</em> clients",
        "<span class='code'>setcap</span> > <span class='code'>suid</span> > <span class='code'>USER_NS</span>"
    );
    document.getElementById("subtitle").innerHTML = subtitles[Math.floor(Math.random() * subtitles.length)];
}
randomize();
