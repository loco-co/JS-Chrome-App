const imgs = [
    "03712424832578407730.png",
    "25337689005706279322.png",
    "31521796070669573658.png",
    "33621171160959027994.png",
    "31550842077706214889.png",
    "29518490961972544627.png",
    "26824833998502591793.png",
]

const todayImage = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${todayImage}`;
bgImage.classList.add("bgImage");

const bodyElement = document.body.querySelector("div");

bodyElement.prepend(bgImage);
