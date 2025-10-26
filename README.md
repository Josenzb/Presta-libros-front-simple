# 📚 Prestamos_libros_app

Aplicación web desarrollada en **Node.js + Express + EJS** para gestionar el **préstamo de libros** en una biblioteca o laboratorio académico.  
Permite registrar préstamos, ver la lista de libros prestados y resaltar en rojo aquellos cuyo plazo de devolución ya expiró.

---

## 🚀 Objetivo del proyecto

Brindar una solución sencilla y accesible para el **control de préstamos de material**, evitando pérdidas o confusiones sobre qué estudiante tiene cada libro y cuándo debe devolverlo.

---

## 🧩 Características principales

- 📘 Registro de préstamos mediante un formulario con los siguientes campos:
  - Nombre del estudiante
  - ID del estudiante
  - ISBN del libro
  - Nombre del libro
  - Fecha de préstamo
  - Fecha de devolución

- 📋 Visualización de todos los préstamos registrados en una lista.
- 🔴 Los libros con **fecha de devolución vencida** se muestran resaltados en rojo.
- 🌐 Interfaz limpia y amigable construida con **EJS** y **CSS**.

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **EJS (Embedded JavaScript templates)**
- **HTML / CSS**
- **SQLITE**

---

## ⚙️ Instalación y ejecución


```bash
git clone https://github.com/<tu_usuario>/Prestamos_libros_app.git
cd Prestamos_libros_app
npm install
node server.js

