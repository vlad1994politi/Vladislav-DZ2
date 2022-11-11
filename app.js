//Задание 1

var customer = {
    NumberCard: "4169585344585522",
    DateEnd: "22/02",
    Name: "VLadislav",
    TypeCard: "Visa",
    CVC: 056
};
console.log("customer => ", customer) 

// Задание 1

var bank = {
    Cod: 1456,
    Name: "DosCredoBank",
    WorkTime: "9:00-17:00",
    Evening: false,
    Addres : {
        Sity: "Bishkek",
        Street: "Shopokova",
        House: "5/a"
    }
};
console.log("bank => ", bank)

// Задание 3

var money = prompt("выберете одну из систем быстрых денежных переводов: Unistream, RIA, Contact, MoneyGram.");

switch (money) {
  case "RIA":
    console.log("Get balance from RIA");
    break;
  case "Unistream":
    console.log("Get balance from Unistream");
    break;
  case "Contact":
    console.log("Get balance from Contact");
    break;
  case "MoneyGram":
    console.log("Get balance from MoneyGram.");
    break;
  default:
    console.log("Invalid card processing");
}

// Задание 4

var nun = Number(prompt("ввидите число от 1 до 9"));
switch (nun) {
    case 1:
        console.log("результат = I")
        break;
    case 2:
        console.log("результат = II")
        break;
    case 3:
        console.log("результат = III")
        break;
    case 4:
        console.log("результат = IV")
        break;
    case 5:
        console.log("результат = V")
        break;
    case 6:
        console.log("результат = VI")
        break;
    case 7:
        console.log("результат = VII")
        break;
    case 8:
        console.log("результат = VIII")
        break;
    case 9:
        console.log("результат = IX")
        break;

    default: 
        console.log("Нужно было ввести числа от 1 до 9")
        break;
}

//Задание 5

var customerType = Number(prompt("выберете: 1=физ.лицо, 2=юр.лицо"))
customerType ===1 ? console.log("Физ.лицо") : customerType ===2 ? console.log("Юр.лицо") : console.log("выберете 1 или 2");