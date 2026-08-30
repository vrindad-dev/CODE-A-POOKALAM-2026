const pookalam = document.getElementById("pookalam");

const addButton = document.getElementById("addFlower");
const rotateButton = document.getElementById("rotate");
const clearButton = document.getElementById("clear");

let selectedColor = "#ffd21c";
let rotation = 0;


/* =====================================
   CREATE ONE PETAL
===================================== */

function createPetal(
    parent,
    angle,
    distance,
    width,
    height,
    color,
    type = "normal"
) {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.width = width + "px";
    petal.style.height = height + "px";

    petal.style.background = color;

    /*
       Start from exact center,
       move outward,
       then rotate.
    */

    petal.style.left = "50%";
    petal.style.top = "50%";

    petal.style.transform =
        `translate(-50%, -100%)
         rotate(${angle}deg)
         translateY(-${distance}px)`;


    if (type === "leaf") {

        petal.style.borderRadius =
            "100% 0 100% 0";

    }

    parent.appendChild(petal);

    return petal;
}


/* =====================================
   CREATE A COMPLETE FLOWER
===================================== */

function createFlower(
    parent,
    angle,
    distance,
    petalCount,
    petalLength,
    petalWidth,
    color
) {

    for (let i = 0; i < petalCount; i++) {

        const petalAngle =
            angle +
            (360 / petalCount) * i;

        createPetal(
            parent,
            petalAngle,
            distance,
            petalWidth,
            petalLength,
            color
        );
    }
}


/* =====================================
   OUTER MARIGOLD FLOWERS
===================================== */

const outer =
    document.querySelector(".outer-ring");

for (let i = 0; i < 32; i++) {

    createFlower(
        outer,

        i * (360 / 32),

        255,

        9,

        38,

        14,

        "#ff7114"
    );
}


/* =====================================
   SECOND ORANGE/YELLOW FLOWERS
===================================== */

const yellow =
    document.querySelector(".yellow-ring");

for (let i = 0; i < 28; i++) {

    createFlower(
        yellow,

        i * (360 / 28) + 6,

        205,

        8,

        40,

        15,

        i % 2 === 0
            ? "#ffd21c"
            : "#ff9f12"
    );
}


/* =====================================
   WHITE SMALL FLOWERS
===================================== */

const white =
    document.querySelector(".pink-ring");

for (let i = 0; i < 24; i++) {

    createFlower(
        white,

        i * (360 / 24),

        163,

        7,

        30,

        11,

        "#fff3bd"
    );
}


/* =====================================
   BIG PINK FLOWER
===================================== */

for (let i = 0; i < 12; i++) {

    createFlower(
        white,

        i * 30 + 15,

        120,

        7,

        70,

        20,

        "#ed3785"
    );
}


/* =====================================
   GREEN LEAF RING
===================================== */

const green =
    document.querySelector(".green-ring");

for (let i = 0; i < 12; i++) {

    const angle =
        i * 30;

    createPetal(
        green,
        angle,
        105,
        24,
        72,
        "#4d982d",
        "leaf"
    );

    createPetal(
        green,
        angle + 180,
        105,
        24,
        72,
        "#4d982d",
        "leaf"
    );
}


/* =====================================
   PURPLE FLOWERS
===================================== */

const purple =
    document.querySelector(".purple-ring");

for (let i = 0; i < 12; i++) {

    createFlower(
        purple,

        i * 30,

        73,

        8,

        48,

        15,

        "#7425a5"
    );
}


/* =====================================
   CENTER
===================================== */

const center =
    document.querySelector(".center-flower");

for (let i = 0; i < 10; i++) {

    createPetal(
        center,

        i * 36,

        35,

        22,

        45,

        "#ff8b0b"
    );
}


/* =====================================
   COLOR SELECTION
===================================== */

document.querySelectorAll(".color")
.forEach(color => {

    color.addEventListener("click", () => {

        selectedColor =
            color.dataset.color;

        document
        .querySelectorAll(".color")
        .forEach(c => {

            c.style.transform =
                "scale(1)";

        });

        color.style.transform =
            "scale(1.25)";
    });

});


/* =====================================
   MANUAL PETAL
===================================== */

function addExtraPetal(x, y) {

    const petal =
        document.createElement("div");

    petal.className =
        "extra-petal";

    petal.style.left =
        x + "px";

    petal.style.top =
        y + "px";

    petal.style.background =
        selectedColor;

    petal.style.transform =
        `translate(-50%, -50%)
         rotate(${Math.random() * 360}deg)`;

    pookalam.appendChild(petal);
}


/* =====================================
   CLICK
===================================== */

pookalam.addEventListener("click", event => {

    const rect =
        pookalam.getBoundingClientRect();

    const x =
        event.clientX - rect.left;

    const y =
        event.clientY - rect.top;

    addExtraPetal(x, y);

});


/* =====================================
   ADD PETALS
===================================== */

addButton.addEventListener("click", () => {

    for (let i = 0; i < 30; i++) {

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            30 + Math.random() * 245;

        const x =
            pookalam.clientWidth / 2 +
            Math.cos(angle) * distance;

        const y =
            pookalam.clientHeight / 2 +
            Math.sin(angle) * distance;

        addExtraPetal(x, y);
    }

});


/* =====================================
   ROTATE
===================================== */

rotateButton.addEventListener("click", () => {

    rotation += 45;

    pookalam.style.transform =
        `rotate(${rotation}deg)`;

});


/* =====================================
   CLEAR
===================================== */

clearButton.addEventListener("click", () => {

    document
    .querySelectorAll(".extra-petal")
    .forEach(petal => {

        petal.remove();

    });

});


/* =====================================
   BACKGROUND SPARKLES
===================================== */

const particles =
    document.querySelector(".particles");

for (let i = 0; i < 45; i++) {

    const spark =
        document.createElement("div");

    spark.className = "spark";

    spark.style.left =
        Math.random() * 100 + "%";

    spark.style.animationDelay =
        Math.random() * 5 + "s";

    spark.style.animationDuration =
        3 + Math.random() * 5 + "s";

    particles.appendChild(spark);
}

