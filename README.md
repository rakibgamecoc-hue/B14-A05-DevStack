# DevStack

<p align="center">
  <strong>Build your ideal development stack.</strong><br />
  A clean, modern web app where you explore frontend, backend, database, and tooling technologies — and pick the ones that fit your next project.
</p>

---

## About the Project

**DevStack** is a React application that helps developers decide which technologies to use. It displays a curated catalog of tools (HTML, React, Node.js, PostgreSQL, Docker, Git, and more) as cards. You can browse them, see their category, difficulty, and rating, and add the ones you like to a personal **stack** shown in a sticky sidebar.

The whole catalog is loaded from a local JSON file, and every action gives you instant feedback through toast notifications. The goal is simple: make it fun and fast to plan the stack for your next project.

---

## Technology Used

| Layer | Tools |
| --- | --- |
| **Core** | React 19, JavaScript (ES Modules) |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS v4 |
| **Components** | daisyUI |
| **Notifications** | React Toastify |
| **Data** | Local JSON (`src/data/technologies.json`) |
| **Tooling** | ESLint |

---

## Features

### 1. Explore a Curated Technology Catalog
All technologies are rendered as reusable `TechCard` components. Each card shows the logo, name, description, category, difficulty level, rating, and a badge — so you can compare options at a glance.

### 2. Build Your Own Stack
Click **Add to Stack** and the technology is pinned into the "Your Stack" sidebar. Already added items become disabled and show **Added to Stack ✓**, so you never add the same tool twice.

### 3. Sidebar Management with Live Feedback
The sidebar tracks how many technologies you have selected, lets you remove any item with a single click, and offers a **Remove All** button (which is automatically disabled when the stack is empty). Every add, remove, or duplicate action fires a toast notification so you always know what happened.

---


## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets you write HTML-like markup directly inside JavaScript. Instead of building the UI with long chains of `createElement` calls, you write it in a way that looks like HTML, which makes components easier to read and understand. React then converts that JSX into real JavaScript behind the scenes. In this project every component — like `TechCard.jsx` and `StackSidebar.jsx` — returns JSX.

### 2. What is the difference between props and state?
Props are data passed **into** a component from its parent. They are read-only, so the component itself cannot change them. State is data that a component **owns and manages internally**, and it can change over time, causing the component to re-render. In this project, `tech`, `isSelected`, and `onAdd` are props passed into `TechCard`, while `selectedStack`, `technologies`, and `loading` are state inside `App`.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets a functional component remember a value between renders and update it, which triggers a re-render when it changes. I used it three times in `App.jsx`:
- `selectedStack` – holds the list of technologies the user has added.
- `technologies` – holds the catalog loaded from the JSON file.
- `loading` – tracks whether the data has finished loading yet.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects — things that aren't just rendering, like fetching data — after the component renders. I needed it because reading the JSON file is an asynchronous operation: I had to wait for the data to arrive and then store it in state with `setTechnologies`. Passing an empty dependency array `[]` makes it run only once when the component first mounts. Once the data is stored, I set `loading` to `false` so the app shows the content instead of "Loading...".

### 5. Why does every item in a `.map()` list need a unique key prop?
React uses the `key` to identify which item is which when the list changes. Without unique keys, React can't tell whether an element was added, removed, or moved, which can lead to incorrect or buggy re-renders. In this project I use `key={tech.id}` when mapping over `technologies` and `selectedStack`, since each technology has a unique `id`.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition, using normal JavaScript like `&&`, `? :`, or `if`. One example is the empty stack message in `StackSidebar.jsx`:

```jsx
{selectedStack.length === 0 && (
  <p className="rounded-lg border border-dashed border-slate-200 px-3 py-8 text-center text-xs text-slate-400">
    Your stack is empty.
    <br />
    Add a technology to get started.
  </p>
)}
```

This message only appears when nothing has been added yet.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data **down** through props. For example, `App` renders `<TechCard tech={tech} isSelected={...} onAdd={handleAdd} />`, so `TechCard` receives the technology and related data as props.

A child sends data **back up** by calling a function that the parent passed down as a prop. When the user clicks the button in `TechCard`, it calls `onAdd(tech)`, which is actually `handleAdd` living in `App`. That's how the child "reports" the selected technology to the parent, and the parent updates its state in response. The same pattern is used with `onRemove` and `onRemoveAll` in `StackSidebar`.

---

<p align="center">Made with React, Tailwind, and a lot of ☕</p>
