# Gestor de Tareas & Buscador Pokémon 🚀

Aplicación web desarrollada con **Spring Boot** en el backend y **HTML/CSS/JavaScript (Vanilla)** en el frontend. El proyecto integra un sistema de gestión de tareas junto con un explorador interactivo que consume la PokeAPI.

---

## 📌 Módulos del Proyecto

### 1. 📝 Gestor de Tareas
* Administración y control de tareas para organizar actividades diarias.
* Interfaz intuitiva y funcional conectada al backend en Spring Boot.

### 2. 🔴 Buscador Pokémon (PokeAPI)
* **Exploración por categorías:** Consulta de Pokémon, Berries (Bayas) e Items.
* **Scroll Infinito (Carga Progresiva):** Sistema dinámico que carga elementos en bloques conforme se desplaza la página, optimizando el rendimiento y evitando saturar la API.
* **Buscador con Debounce:** Filtrado de resultados en tiempo real tras una pausa en la escritura.
* **Modales de Información:** Ventanas emergentes con detalles específicos de cada elemento (imágenes en alta definición, tipos, peso, altura, costo, etc.).
* **Diseño Limpio:** Interfaz moderna y neutral desarrollada con Bootstrap 5.

---

## 🛠️ Tecnologías Utilizadas

* **Backend:** Java, Spring Boot.
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
* **Estilos:** Bootstrap 5.3.3.
* **API Externa:** PokeAPI (`https://pokeapi.co/`).

---

## ⚙️ Cómo Ejecutar la Aplicación

Para iniciar la aplicación desde la terminal, ejecuta el siguiente comando en la raíz del proyecto:

```bash
./mvnw spring-boot:run
