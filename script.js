const Имя = prompt("Ismingizni kiriting");
const Число = prompt("Bironta harf kiriting");

if (Имя && Число) {
    if (Имя.toLowerCase().includes(Число.toLowerCase)) {
        alert(`Ismingizda '${Число}' harf mavjud.`);
    } else {
        alert(`Ismingizda ${Число} harf mavjud emas.`);
    }
}