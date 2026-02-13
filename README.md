
---

# Experiment 3 – Multi-Page React Application using React Router

## 1. Title

**Development of a Responsive Multi-Page Portfolio Website using React and React Router**

---

## 2. Objective

* To understand and implement client-side routing using React Router.
* To create multiple interconnected pages within a React application.
* To maintain consistent UI/UX across different pages.
* To build a fully responsive web interface adaptable to various screen sizes.

---

## 3. Tools & Technologies Used

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| React JS         | Frontend UI development           |
| React Router DOM | Client-side routing               |
| HTML5            | Structure                         |
| CSS3             | Styling and responsiveness        |
| Vite             | Build tool and development server |

---

## 4. Project Description

This project is a responsive portfolio website developed using React.
It consists of multiple pages connected using React Router for seamless navigation without page reloads.

The website includes:

* **Home Page** – Introduction, About section, Skills section, Call-to-action.
* **Projects Page** – Displays multiple project cards with image placeholders.
* **Contact Page** – Contact form UI for user interaction.

The application maintains consistent navigation and footer components across all pages.

---

## 5. Folder Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   └── ProjectCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 6. Implementation Steps

### Step 1 – Project Setup

* Created a new React project using Vite.
* Installed React Router DOM.

```
npm create vite@latest experiment3
npm install
npm install react-router-dom
```

---

### Step 2 – Router Configuration

* Wrapped the App component with `BrowserRouter`.
* Used `Routes` and `Route` for page mapping.
* Used `NavLink` for navigation between pages.

Example:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

---

### Step 3 – Component Reusability

Created reusable components:

* Navbar
* Footer
* Hero Section
* Project Card

This ensured consistency and modularity.

---

### Step 4 – Responsive Design

* Used Flexbox and CSS Grid.
* Implemented media queries for mobile responsiveness.
* Ensured layout adapts to different screen sizes.
* Applied `min-height: 100vh` layout structure to keep footer at bottom.

---

### Step 5 – Project Cards with Image Support

Each project card includes:

* Image container
* Title
* Description

Images are stored in:

```
public/images/
```

Used as:

```jsx
<ProjectCard
  title="AI Chatbot"
  description="NLP-based chatbot."
  image="/images/project1.jpg"
/>
```

---

## 7. Key Features

* Client-side routing without page reload.
* Active navigation highlighting.
* Fully responsive layout.
* Structured UI with proper spacing and alignment.
* Sticky footer layout.
* Clean and modern design.
* Reusable and modular components.

---

## 8. Learning Outcomes

After completing this experiment, I learned:

* How React Router manages client-side routing.
* Difference between `Link` and `NavLink`.
* Importance of layout structure using Flexbox.
* How to maintain consistent UI across multiple pages.
* Implementation of responsive design using CSS Grid and media queries.

---

## 9. Conclusion

The experiment successfully demonstrates the implementation of a multi-page React application using React Router. The project fulfills all required objectives including routing, responsiveness, UI consistency, and component reusability.

The application structure is scalable and can be extended further with additional features such as authentication, backend integration, or state management.

---

## 10. Future Improvements

* Add backend integration for contact form submission.
* Add animations and transitions.
* Implement dark mode toggle.
* Add dynamic project data using API.
* Deploy using Netlify or Vercel.

---

