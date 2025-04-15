# 🔗 Shorty URL

A URL shortener developed with **Node.js**, **Express**, and **MySQL**. It allows generating a short version of a long URL, redirecting when accessing the short link, and tracking the number of visits.

### 🛠 Technologies Used

- Node.js  
- Express  
- MySQL  

---

## 📡 Endpoints

### 🔗 **URL Shortener**
- `POST /shorten` → Creates a short URL from a long URL.
  - **Body:**  
    ```json
    { "originalUrl": "https://example.com/long-url" }
    ```
  - **Response:**  
    ```json
    { "shortUrl": "http://localhost:3000/abc123" }
    ```

- `GET /:shortId` → Redirects to the original URL associated with the `shortId` and increases the access count.
  - **Path Parameter:**  
    `shortId`  
  - **Example:**  
    Visiting `http://localhost:3000/abc123` redirects to the original URL.

- `GET /stats/:shortId` → Returns statistics for the short URL.
  - **Path Parameter:**  
    `shortId`  
  - **Response:**  
    ```json
    {
      "short_id": "abc123",
      "original_url": "https://example.com/long-url",
      "access_count": 5
    }
    ```
