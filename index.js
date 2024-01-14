function pseudoregex() {
    // Pobranie wartości hasła z elementu o id "passwd"
    var dane = document.getElementById("passwd").value;

    // Sprawdzenie, czy dane są puste
    if (!dane) {
        // Ustawienie koloru tekstu na czerwony i wyświetlenie komunikatu "WPISZ HASŁO!"
        document.getElementById("wynik").style.color = "red";
        document.getElementById("wynik").innerHTML = "WPISZ HASŁO!";
    } else if (dane.search("[0-9]") > 0 && dane.search("[!@#$%^&*(),.?\":{}|<>]") > 0 && dane.length >= 7) {
        // Sprawdzenie, czy hasło zawiera co najmniej jedną cyfrę, jeden znak specjalny i ma długość co najmniej 7 znaków
        // Ustawienie koloru tekstu na zielony i wyświetlenie komunikatu "BARDZO DOBRE"
        document.getElementById("wynik").style.color = "green";
        document.getElementById("wynik").innerHTML = "BARDZO DOBRE";
    } else if (dane.search("[0-9]") > 0 && dane.length >= 7) {
        // Sprawdzenie, czy hasło zawiera co najmniej jedną cyfrę i ma długość co najmniej 7 znaków
        // Ustawienie koloru tekstu na niebieski i wyświetlenie komunikatu "DOBRE"
        document.getElementById("wynik").style.color = "blue";
        document.getElementById("wynik").innerHTML = "DOBRE";
    } else if (dane.search("[0-9]") > 0 && dane.length >= 4 && dane.length <= 6) {
        // Sprawdzenie, czy hasło zawiera co najmniej jedną cyfrę i ma długość od 4 do 6 znaków
        // Ustawienie koloru tekstu na pomarańczowy i wyświetlenie komunikatu "ŚREDNIE"
        document.getElementById("wynik").style.color = "orange";
        document.getElementById("wynik").innerHTML = "ŚREDNIE";
    } else {
        // Jeśli żadne z powyższych warunków nie jest spełniony
        // Ustawienie koloru tekstu na czerwony i wyświetlenie komunikatu "SŁABE"
        document.getElementById("wynik").style.color = "red";
        document.getElementById("wynik").innerHTML = "SŁABE";
    }
}