const carsMain = document.querySelector(".cars");
const carsList = document.getElementById("cars-list");

const car = () => {
    carsList.style.display = "block";
};
carsMain.addEventListener("click", car);

const clothsMain = document.querySelector(".clothes");
const clothList = document.getElementById("clothes-list");

const cloth = () => {
    clothList.style.display = "block";
};
clothsMain.addEventListener("click", cloth);

const elecMain = document.querySelector(".elec");
const elecList = document.getElementById("elec-list");

const electr = () => {
    elecList.style.display = "block";
};
elecMain.addEventListener("click", electr);


const landMain = document.querySelector(".land");
const landList = document.getElementById("land-list");

const lnd = () => {
    landList.style.display = "block"
};
landMain.addEventListener("click", lnd);


