<h1 align="center">Gitex-Nigeria</h1>

---

## 🚀 Overview

This section is where you can briefly describe what your `gitex-nigeria` project is all about!

---

## 🛠️ Installation

To get this project up and running on your local machine, follow these simple steps:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/shamsheedali/gitex-nigeria.git](https://github.com/shamsheedali/gitex-nigeria.git)
    ```

2.  **Navigate into the project directory:**

    ```bash
    cd gitex-nigeria
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This command will typically launch the application in your browser, often at `http://localhost:3000` or a similar address.

---

## 📂 Project Structure

Here's a detailed breakdown of the project's directory and file structure, explaining what each part contains:
```bash
.
└───src/                   # Contains the main source code for the application
│   App.tsx            # The root component of the React application
│   index.css          # Global CSS styles for the application
│   main.tsx           # The entry point of the application, rendering the App component
│   vite-env.d.ts      # TypeScript declaration file for Vite environment variables
│
├───assets/            # Holds static assets like images and other media
│   │   react.svg      # React logo or similar general asset
│   │
│   └───images/        # Dedicated directory for all image assets
│       ├───cards/     # Images specifically used for card components
│       │   │   card-1.png
│       │   │   card-2.png
│       │   │
│       │   └───header/ # Background images for card headers
│       │           card-head-bg-1.png
│       │           card-head-bg-2.png
│       │           card-head-bg-3.png
│       │           card-head-bg-4.png
│       │           card-head-bg-5.png
│       │           card-head-bg-6.png
│       │
│       └───common/     # General-purpose images used across the application
│               all-partners-logo.png
│               Allowed.png
│               grid-bg.png
│               layout-bg.png
│               login.png
│               logo.png
│               mini-logo.png
│
├───components/        # Reusable UI components built from smaller parts
│   ├───forms/         # Components related to forms and user input
│   │       LoginForm.tsx
│   │       RegistrationSummary.tsx
│   │
│   ├───layout/        # Components defining the overall page structure (header, footer, main layout)
│   │       Footer.tsx
│   │       Header.tsx
│   │       Layout.tsx
│   │
│   └───ui/            # Generic, atomic UI components (e.g., buttons, inputs, cards)
│       │   Checkbox.tsx
│       │   FeatureBadge.tsx
│       │   Input.tsx
│       │   Label.tsx
│       │   Modal.tsx
│       │   PhoneSelector.tsx
│       │   Select.tsx
│       │   Stepper.tsx
│       │
│       ├───button/    # Button component and its variations
│       │       Button.tsx
│       │
│       └───card/      # Card components, often composed of header, body, and footer
│               Card.tsx
│               CardBody.tsx
│               CardFooter.tsx
│               CardHeader.tsx
│               index.tsx  # Exporting point for card components
│
├───data/              # Contains static data or configuration files
│       cardData.ts    # Data used for rendering cards
│
├───pages/             # Top-level components representing distinct application pages or views
│       Home.tsx
│       Login.tsx
│       NotFound.tsx
│       Success.tsx
│
├───styles/            # Additional stylesheets specific to certain modules or features
│       ticket.css     # Styles related to ticket display or functionality
│
└───utils/             # Utility functions or helper modules
fontawesome.ts # Configuration or helper for FontAwesome icons
```
---
## 🛣️ Available Routes

The application uses React Router to manage navigation. Below are the primary routes and the components they render:

1.  **/ (Home Page):**


    Renders the Home component within the main Layout. This is the landing page of the application.


2.  **/login (Login Page):**

    Renders the Login component, providing an interface for user authentication.


3.  **/success (Success Page):**

    Renders the Success component, likely displayed after a successful action.

4.  *** (Not Found):**

    Any unhandled or invalid URL path will render the NotFound component.

    All these routes are nested within the <Layout /> component, ensuring a consistent header, footer, and overall page structure across the application.

---

## ✉️ Contact

Got questions or just want to connect? Feel free to reach out!

* **📧 Email:** shamsheedali0786@gmail.com
* **📌 GitHub:** [shamsheedali](https://github.com/shamsheedali)

---
