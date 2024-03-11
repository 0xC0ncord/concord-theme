function randomize() {
    subtitles = Array(
        "Cool subtitle pending.",
        "Make sure your servers always brush their teeth at least twice a day!",
        "Coming soon to an Electron app near y-<br>FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory",
        "Have you made a backup today?",
        "My secret ingredient is undefined behavior.",
        "<em>thicc</em> clients",
        "setcap > suid > USER_NS",
        "SELinux-aware since 2020.",
        "Universally unique!",
        "-ng",
        "Cawfee",
        "Better than Postal 3!",
        "Now with gaps!",
        "Safe for work!",
        "Syntax highlighting free with every purchase!",
        "Water soluble!",
        "WARNING: This blog contains chemicals known to the state of California to cause cancer or other reproductive harm."
    );
    document.getElementById("subtitle").innerHTML = subtitles[Math.floor(Math.random() * subtitles.length)];
}
randomize();
