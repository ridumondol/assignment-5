# 🚀 DevStack Builder

A React + TypeScript web app for exploring popular development technologies and building your own tech stack.

🔗 **Live Site:** https://my-devstack-builder.netlify.app/

📦 **Repository:** https://github.com/ridumondol/assignment-5

## 📖 About the Project

DevStack Builder is a simple website where users can explore different development technologies.

Users can add technologies to their own stack and remove them whenever they want.

This project helped me learn React components, props, state, and hooks.

## 📸 Project Screenshot

![DevStack Builder](./my-devstack.png)

## ✨ Features

- **Explore Technologies** — Browse different development technologies.
- **Build Your Stack** — Add and remove technologies from your own stack.
- **Toast Notifications** — Get notifications when adding or removing technologies.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React-Toastify

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ridumondol/assignment-5.git
   ```

2. Go to the project folder:

   ```bash
   cd assignment-5
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL in your browser.

## 📁 Project Structure

```text
assignment-5/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── App.css
├── index.html
├── package.json
└── README.md
```

## 🎯 React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript.
It helps us create UI easily.

### 2. What is the difference between props and state?

Props are data passed from a parent to a child.
State is data that can change inside a component.

### 3. What does the useState hook do, and where did you use it?

useState stores and updates data.
I used it in App.tsx to manage my technology stack.

### 4. What does the useEffect hook do, and why did you need it?

useEffect runs code after rendering.
I used it to load technology data when the app starts.

### 5. Why does every item in a .map() list need a unique key?

The key helps React identify each list item.
It helps React update the list correctly.

### 6. What is conditional rendering?

Conditional rendering shows different UI based on a condition.

Example:

```tsx
{selectedTechs.length === 0 ? (
  <p>No technologies added yet.</p>
) : (
  <p>Your stack has technologies.</p>
)}
```

### 7. How do you pass data from a parent to a child?

A parent passes data using props.
A child sends data back by calling a function passed through props.

## 📄 License

This project was created for educational purposes.

## 👨‍💻 Author

**Md Ridoy Mondol**

GitHub: [@ridumondol](https://github.com/ridumondol)

