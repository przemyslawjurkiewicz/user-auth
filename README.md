# User-Auth  
Aplikacja Mongo, Express, React, Node  (MERN).
Pozwala użytkownikowi na:
- rejestrację
- logowanie
- dostęp do chronionych stron dostępnych tylko dla zalogowanych użytkowników
- pozostania zalogowanym po zamknięciu aplikacji lub odświeżeniu strony
- wylogowaniu 

## Live: 
https://user--auth.herokuapp.com/

## Inicjacja projektu:

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.
Po zainstalowaniu paczek servera uruchom komendę `npm run client-install`

Teraz możesz zacząć pracę, korzystając `npm run dev`.

## NPM Scripts
Dostępne są 4 główne skrypty przyspieszające pracę:

- `start`: uruchamiający serwer
- `client`: uruchamiający klienta
- `server`:  odpala `nodemon`, obserwuje zmiany w kodzie severa
- `dev`: uruchamiający za pomocą paczki <concurrently> serwer i klienta na różnych portach
  
## Zależności:
### Strona serwera:
- `express`: obsługa żądań i łatwiejsze pisanie routingu
- `is-empty`: globalna funkcja,używanaprzez `validatora`
- `jsonwebtoken`: używany do autoryzacji
- `mongoose`: używana do interakcji z MongoDB
- `passport`: służy do uwierzytelniania żądań, które wykonuje za pomocą rozszerzalnego zestawu wtyczek znanych jako strategie
- `passport-jwt`: strategia passport do uwierzytelniania za pomocą tokena WWW JSON (JWT); pozwala uwierzytelniać punkty końcowe za pomocą JWT
- `validator`: używany do sprawdzania poprawności danych wejściowych (np. format wiadomości e-mail, potwierdzanie dopasowania haseł)
- `bcryptjs`: używane do haszowania haseł przed ich zapisaniem w bazie
- `body-parser`: używany do analizowania przychodzących treści żądania w oprogramowaniu pośrednim
- `concurrently`: pozwala uruchamiać backend(serwer) i frontend(klient) jednocześnie i na różnych portach
### Strona klienta:
- `axios`: oparty na promise klient HTTP do tworzenia żądań do serwera
- `classnames`: używane dla klas warunkowych w JSX
- `jwt-decode`: używany do dekodowania jwt, aby uzyskać z niego dane użytkownika
- `react-redux`: pozwala nam korzystać z Redux z React
- `react-router-dom`: używany do celów routingu
- `redux`: używany do zarządzania stanem między komponentami (może być używany z React lub dowolną inną biblioteką widoku)
- `redux-thunk`: oprogramowanie pośrednie dla Redux, które pozwala nam na bezpośredni dostęp do metody wysyłania w celu wykonywania asynchronicznych wywołań
  
