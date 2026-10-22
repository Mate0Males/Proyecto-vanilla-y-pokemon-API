# Task Manager & Pokémon Searcher 🚀

Web application developed with Spring Boot in the backend and HTML/CSS/JavaScript (Vanilla) in the frontend. The project integrates a task management system along with an interactive explorer that consumes the PokeAPI.

## 📌 Project Modules

### 1. 📝 Task Manager
* Administration and control of tasks to organize daily activities.
* Intuitive and functional interface connected to the Spring Boot backend.

### 2. 🔴 Pokémon Searcher (PokeAPI)
* **Category Exploration:** Query Pokémon, Berries, and Items.
* **Infinite Scroll (Progressive Loading):** Dynamic system that loads elements in blocks as the page scrolls, optimizing performance and avoiding API overload.
* **Search with Debounce:** Real-time result filtering after a pause in typing.
* **Information Modals:** Pop-up windows with specific details of each element (high-definition images, types, weight, height, cost, etc.).
* **Clean Design:** Modern and neutral interface built with Bootstrap 5.

## 🛠️ Technologies Used
* **Backend:** Java, Spring Boot.
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
* **Styles:** Bootstrap 5.3.3.
* **External API:** PokeAPI (https://pokeapi.co/).

## ⚙️ How to Run the Application
To start the application from the terminal, run the following command in the project root:
```bash
./mvnw spring-boot:run
