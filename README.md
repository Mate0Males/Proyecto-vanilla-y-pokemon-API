# Task Manager & Modular Pokémon Explorer 🚀

An upgraded version featuring a clean, layered modular architecture using ES6 modules for the Pokémon Explorer, combined with a Spring Boot backend.

## 📌 Project Architecture & Features

### 1. 📝 Task Manager
* Core task organization system connected to the Spring Boot backend.

### 2. 🔴 Modular Pokémon Explorer (PokeAPI)
* **Layered Architecture (ES6 Modules):** Clean separation of concerns into `Model`, `Service`, `UI`, and `Controller` layers.
* **Category Exploration:** Seamless browsing between Pokémon, Berries, and Items with dynamic sprite and asset handling.
* **Infinite Scroll:** Optimized progressive loading as users scroll down the page.
* **Debounce Search:** Precise search feature with a strict 4-second delay, partial name matching, and API fallback.
* **Interactive Modals:** Detailed views showing attributes like height, weight, types, and stats.

## 🛠️ Technologies Used
* **Backend:** Java, Spring Boot.
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules).
* **Styles:** Bootstrap 5.3.3.
* **External API:** PokeAPI (https://pokeapi.co/).

## ⚙️ How to Run
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
