# Task Manager & Advanced Modular Pokémon Explorer 🚀

An upgraded version of the web application featuring a clean, layered modular architecture using ES6 modules, now enhanced with **nested API endpoints** to fetch and display complete Pokémon evolution chains.

## 📌 Project Architecture & Features

### 1. 📝 Task Manager
* Core task organization system connected to the Spring Boot backend.

### 2. 🔴 Modular Pokémon Explorer (PokeAPI)
* **Layered Architecture (ES6 Modules):** Clean separation of concerns into `Model`, `Service`, `UI`, and `Controller` layers.
* **Nested API Endpoints (Evolution Chains):** Implements multi-level asynchronous requests (`Pokémon ➔ Species ➔ Evolution Chain`) to dynamically resolve and display accurate evolutionary paths inside the interactive modals.
* **Category Exploration:** Seamless browsing between Pokémon, Berries, and Items with dynamic sprite and asset handling.
* **Infinite Scroll:** Optimized progressive loading as users scroll down the page.
* **Debounce Search:** Precise search feature with a strict delay, partial name matching, and API fallback.
* **Interactive Modals:** Detailed views showing attributes like height, weight, types, and the dynamic evolution line.

## 🛠️ Technologies Used
* **Backend:** Java, Spring Boot.
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6 Modules).
* **Styles:** Bootstrap 5.3.3.
* **External API:** PokeAPI (https://pokeapi.co/).

## ⚙️ How to Run
To start the application from the terminal, run the following command in the project root:
```bash
./mvnw spring-boot:run
