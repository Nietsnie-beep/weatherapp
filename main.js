const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const container = document.querySelector(".ajax-section");
/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
const apiKey = "4d8fb5b93d4af21d66a2948710284366";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputVal = input.value;

    console.log(inputVal);

    const listItems = list.querySelectorAll(".ajax-section");

    const listItemsArray = Array.from(listItems);

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    const getWeatherApi = async () => {
        await getCity(apiUrl);
    };

    const getCity = async (id) => {
        const res = await fetch(apiUrl);
        const ciudad = await res.json();
        console.log(ciudad);
        if (ciudad.name == undefined) {
            console.log('error');
            error()
        } else {
            createCardCity(ciudad);
        }
    }

    const error = () => {
        alert('eso no existe')
    }
    
    const createCardCity = (ciudad) => {
        const ciudadCard = document.createElement('div');
        const city = `<h1 style="color: aliceblue;">${ciudad.name}</h1>`;
        ciudadCard.innerHTML = city;

        console.log(ciudadCard);

        list.appendChild(ciudadCard);
    }

    getWeatherApi();
    form.reset();

});