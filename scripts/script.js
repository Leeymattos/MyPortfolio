
const ulSquares = document.querySelector('ul.squares');


for (let i = 0; i < 6; i++) {
    const li = document.createElement('li');

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 70));
    const position = Math.floor((random(5, 20)));
    const delay = random(5, 0.1);
    const duration = random(24, 12);

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`

    li.style.left = `${position}%`

    console.log(size, position)

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    //li.style.animationTimingFunction = `cubic-bezeir(${Math.random()}, ${Math.random()}, ${Math.random(), Math.random()})`;

    ulSquares.appendChild(li);
}

for (let i = 0; i < 6; i++) {
    const li = document.createElement('li');

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 70));
    const position = Math.floor((random(80, 95)));
    const delay = random(5, 0.1);
    const duration = random(24, 12);

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`

    li.style.left = `${position}%`

    console.log(size, position)

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    //li.style.animationTimingFunction = `cubic-bezeir(${Math.random()}, ${Math.random()}, ${Math.random(), Math.random()})`;

    ulSquares.appendChild(li);
}
