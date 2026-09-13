# DevStack

DevStack is a modern and interactive web application that helps developers explore, compare, and build their ideal development stack. It provides a selected collection of popular technologies, libraries, frameworks, and tools, making it easier to discover the right technologies for different projects.

---

## Built Stack

* **Frontend:** React with TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS & DaisyUI
* **Notifications:** React-Toastify
* **Icons:** Custom SVG & PNG Assets

---

## Key Features

1. **Curated Technology Catalog:** Browse an extensive list of frontend frameworks, backend runtimes, databases, and DevOps tools, each presented with difficulty levels, user ratings, and dynamic brand-matching badges.
2. **Interactive Stack Builder (Sidebar Cart):** Seamlessly add tools to your personal stack sidebar in real time. The sidebar dynamically tracks your selected items and total count.
3. **Duplicate Prevention & Notifications:** Prevents duplicate technology additions with instant warnings powered by React-Toastify, while disabling the card button and switching the label to "Added to Stack".

---

## React Core Concepts & Q&A

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension that lets developers write HTML-like elements inside JavaScript 

### 2. What is the difference between props and state?
* **Props:** External, read-only data passed from  parent to a child component. A child component cannot modify the props it receives.
* **State:** Data managed inside the component and can be Changed/Updated it also use to manage dynamic data.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to store and update local state values. In this project, `useState` was used in `Main.tsx` to:
* (`techList`).
* (`selectedStack`).
* (`isLoading`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook fetching data from APIs . It was needed to fetch `/technologies.json` with an empty dependency array (`[]`) 

### 5. Why does every item in a `.map()` list need a unique `key` prop?
Without unique keys, React cannot pefectly track individual elements, performance issues and UI rendering bugs when items are added or removed.

### 6. What is conditional rendering? Show one place you used it.
It means rendering different UI elements based on certain conditions, or similar to an `if/else` statement 
In this project, conditional rendering was used in the **Your Stack** sidebar :
