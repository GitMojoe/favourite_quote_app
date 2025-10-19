#favourite_quote_app
# 📜 Favorite Quotes App

A simple web application that allows users to **add, view, and remove their favorite quotes** using the browser’s **Local Storage**.  
This app is built with **HTML, CSS, and JavaScript** — no backend required!

---

## 🚀 Features

- 🖊️ **Add Quotes** — Users can enter a quote and its author.
- 💾 **Persistent Storage** — Quotes are saved in `localStorage`, so they remain after reloading the page.
- 👀 **View All Quotes** — Displays all stored quotes in a neat list.
- 🗑️ **Remove Quotes** — Each quote has a remove button to delete it from storage and the list instantly.

---

## 🧱 Project Structure


---

## ⚙️ How It Works

1. **Adding a Quote**
   - The user types a quote and an author into input fields.
   - When the “Add Quote” button is clicked:
     - JavaScript validates that both fields are filled.
     - A `quote` object is created (`{ text, author }`).
     - The object is stored in `localStorage` as a JSON string using a unique key (`quote_<timestamp>`).
     - The list of quotes is refreshed and displayed.

2. **Displaying Quotes**
   - On page load (`DOMContentLoaded`), the app retrieves all keys from `localStorage`.
   - It filters out only the keys that start with `"quote_"`.
   - Each stored quote is parsed from JSON and rendered as a list item (`<li>`) with a remove button.

3. **Removing a Quote**
   - When the remove button is clicked, the corresponding key is deleted from `localStorage` using `removeItem()`.
   - The quote list updates immediately.

---

## 🧠 Code Overview

### JavaScript Functions

| Function | Description |
|-----------|--------------|
| `addQuote()` | Validates inputs, creates a quote object, saves it in localStorage, and refreshes the list. |
| `displayQuotes()` | Loads all quotes from localStorage and displays them as list items with remove buttons. |
| `removeQuote(key)` | Deletes a quote by key and re-renders the list. |

### Key Concepts Used
- **DOM Manipulation** (`document.getElementById`, `createElement`, `appendChild`)
- **Event Handling** (`addEventListener`)
- **Local Storage API** (`setItem`, `getItem`, `removeItem`, `key`, `length`)
- **JSON Serialization** (`JSON.stringify`, `JSON.parse`)

---

## 🧪 How to Run

1. Clone or download the project files.  
2. Open `index.html` in your browser.  
3. Add a few quotes using the input fields.  
4. Refresh the page — your quotes will still be there!  
5. Click **“remove”** to delete any quote.

---

## 🎨 Optional Enhancements

You can make this app even better by:
- Adding CSS styling for better visuals.
- Sorting quotes (e.g., newest first).
- Adding confirmation before deleting.
- Storing all quotes in a single array under one localStorage key.
- Adding fade-in animations when new quotes appear.

---

## 🧑‍💻 Example

**Input:**
Quote: "The only way to do great work is to love what you do."
Author: Steve Jobs
**Displayed Output:**
"The only way to do great work is to love what you do." - Steve Jobs [remove]


---

## 📚 Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Local Storage API  

---

## 🏁 License
This project is open-source and available for educational purposes.  
Feel free to modify, improve, and share it!

---
