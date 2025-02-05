
let tovarlar = [
    {
        nomi: "Mars rug",
        coin: "100 coin",
        qancha: "12-dona",
    },
    {
        nomi: "Keyboard sticker",
        coin: "49 coin",
        qancha: "7-dona",
    },
    {
        nomi: "Smart witch",
        coin: "899",
        qancha: "4-dona",
    },
    {
        nomi: "Wireless keyboard",
        coin: "350 coin",
        qancha: "0-dona",
    },
    {
        nomi: "Mouse",
        coin: "359 coin",
        qancha: "24-dona",
    },
    {
        nomi: "Airpods",
        coin: "499 coin",
        qancha: "11-dona",
    },
    {
        nomi: "Powerbank",
        coin: "899 coin",
        qancha: "5-dona",
    },
    {
        nomi: "USB flash drive",
        coin: "299 coin",
        qancha: "21-dona",
    },
    {
        nomi: "Smartphone",
        coin: "3699 coin",
        qancha: "2-dona",
    },
    {
        nomi: "Playstation 5",
        coin: "7449 coin",
        qancha: "0-dona",
    },
    {
        nomi: "Yandex station",
        coin: "1999 coin",
        qancha: "4-dona",
    },
    {
        nomi: "Planshet samsung",
        coin: "4999 coin",
        qancha: "24-dona",
    },
]



const cardBox = document.getElementById("box-cards")
const input = document.getElementById("input")

function product(tovar) {
    cardBox.innerHTML = '';
    tovar.map(t => {
        const div = document.createElement("div")
        div.classList.add("card");
        div.innerHTML = `
          <img src="./img/latta.png" alt="logo">
                <h3 class="card__text">${t.nomi}</h3>
                <div class="coins">
                    <i class="fa-brands fa-bitcoin"></i>
                    <p>${t.coin}</p>
                </div>
                <p class="playstation__text">${t.qancha}</p>
        `
        cardBox.appendChild(div);
    })
}
product(tovarlar);


input.addEventListener("input", () => {
    const qidiruv = tovarlar.filter(e => 
    e.nomi.toLowerCase().includes(input.value.toLowerCase()));
    product(qidiruv);
})



