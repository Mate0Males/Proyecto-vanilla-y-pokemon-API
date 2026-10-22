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
To start the application from the terminal, run the following command in the project root:
```bash
./mvnw spring-boot:run
