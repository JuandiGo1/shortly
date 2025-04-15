# 🔗 Shorty URL

Acortador de enlaces desarrollado con **Node.js**, **Express** y **MySQL**. Permite generar una versión corta de una URL larga, redireccionar al acceder al enlace corto y llevar un conteo de accesos.

### 🛠 Tecnologías utilizadas

- Node.js
- Express
- MySQL

---

## 📡 Endpoints

### 🔗 **Acortador de URL**
- `POST /shorten` → Crea una nueva URL corta a partir de una URL larga.
  - **Body:**  
    ```json
    { "originalUrl": "https://ejemplo.com/url-larga" }
    ```
  - **Respuesta:**  
    ```json
    { "shortUrl": "http://localhost:3000/abc123" }
    ```

- `GET /:shortId` → Redirige a la URL original asociada al `shortId` y aumenta el contador de accesos.
  - **Parámetro de ruta:**  
    `shortId`  
  - **Ejemplo:**  
    Acceder a `http://localhost:3000/abc123` redirige a la URL original.

- `GET /stats/:shortId` → Devuelve las estadísticas de la URL corta.
  - **Parámetro de ruta:**  
    `shortId`  
  - **Respuesta:**  
    ```json
    {
      "short_id": "abc123",
      "original_url": "https://ejemplo.com/url-larga",
      "access_count": 5,
    }
    ```
```
