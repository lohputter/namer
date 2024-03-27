if (localStorage.getItem("mode") == "1") {
    document.body.id = "light";
} else {
    document.body.id = "";
}
function randomGenerate(n) {
    let name = document.getElementById("name").value;
    let length = document.getElementsByTagName("span").length;
    let animations = ["square", "wave", "rainbow", "snake", "diamond"];
    let animation = animations[Math.floor(Math.random() * animations.length)];
    if (n != 0) {
        animation = animations[n-1];
    }
    let cooldowns = [1, 2, 2, 2, 2];
    let cooldown = cooldowns[animations.indexOf(animation)];
    for (let i=0; i<length; i++) {
        document.getElementsByTagName("span")[0].remove();
    }
    if (document.getElementsByTagName("span").length == 0) {
        for (let i=0; i<name.length; i++) {
            setTimeout(function() {
                let letter = document.createElement("span");
                document.getElementById("styled").appendChild(letter);
                letter.innerHTML = name[i];
                letter.style.display = "block";
                if (animation == "wave") {
                    letter.style.animation = `0.5s ${animation} linear infinite`;
                } else {
                    letter.style.animation = `${cooldown}s ${animation} linear infinite`;
                }
                if (animation == "wave" || animation == "rainbow") {
                    letter.style.left = `${i * (100/name.length)}%`;
                }
            }, i * (cooldown/name.length) * 1000);
        }
    }
}
function pause() {
    let length = document.getElementsByTagName("span").length;
    for (let i=0; i<length; i++) {
        document.getElementsByTagName("span")[i].style.animation = "none";
        document.getElementsByTagName("span")[i].style.display = "none";
    }
}
function mode(n) {
    if (n == 1) {
        localStorage.setItem("mode", "1");
        document.body.id = "light";
    } else {
        localStorage.setItem("mode", "2");
        document.body.id = "";
    }
}