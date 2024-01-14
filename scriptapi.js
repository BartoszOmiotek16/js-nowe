// Pobierz listę dostępnych walut
// Pobranie kursów walut z API NBP na podstawie tabeli A w formacie JSON
fetch("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
    .then(response => response.json())
    .then(data => {
        // Pobranie odniesienia do elementu HTML o id "currency"
        var currencySelect = document.getElementById("currency");

        // Iteracja przez kursy w danych i utworzenie opcji dla każdej waluty
        data[0].rates.forEach(rate => {
            var option = document.createElement("option");
            option.value = rate.code;
            option.textContent = `${rate.currency} (${rate.code})`;
            currencySelect.appendChild(option);
        });
    })
    .catch(error => {
        // Obsługa błędu w przypadku niepowodzenia pobierania listy walut
        console.error('Błąd pobierania listy walut:', error);
    });

// Funkcja do pobierania kursu wymiany dla wybranej waluty
function getExchangeRates() {
    // Pobranie wartości wybranej waluty z elementu o id "currency"
    var selectedCurrency = document.getElementById("currency").value;
    // Utworzenie URL do pobrania kursu wymiany dla wybranej waluty
    var apiUrl = `https://api.nbp.pl/api/exchangerates/rates/A/${selectedCurrency}/?format=json`;

    // Pobranie danych z API NBP dotyczących kursu wymiany
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Wywołanie funkcji do wyświetlenia kursu wymiany
            displayExchangeRate(data);
        })
        .catch(error => {
            // Obsługa błędu w przypadku niepowodzenia pobierania danych
            console.error('Błąd pobierania danych:', error);
            // Wyświetlenie komunikatu o błędzie
            document.getElementById("result").innerHTML = "Błąd pobierania danych.";
        });
}

// Funkcja do wyświetlania kursu wymiany
function displayExchangeRate(data) {
    // Pobranie kursu średniego i kodu waluty z danych
    var rate = data.rates[0].mid;
    var currencyCode = data.code;
    // Pobranie referencji do elementu HTML o id "result" i ustawienie wyniku
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `Kurs ${currencyCode}: ${rate}`;
}

