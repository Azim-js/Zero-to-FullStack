## Mastering Flexbox

```
    1. What is Flexbox and why is it useful
    2. How to use justify-content
    3. What order properties are
    4. How to use align-self amd align-content
    5. How to handle flex-flow, flex-wrap and direction
    6. https://flexboxfroggy.com
```

# Getting Started with Tailwind CSS - Tailwind JIT(JUST-IN-TIME) - Dark Mode with Local Storage - Responsive Mobile First Design - Themes - Next.JS

```
    1. Introduction and Weekly Coaching Call
    2. Demonstrating a Question-Asking App
    3. Using Storybok
    4. Sharing Experiences and wins
    5. Applying Styling and Transitions
    6. Using Global Styles and linting
    7. Abstracting Components and Creating Profiles
    8. Responsive Design and Grid Systems
    9. Theming and Customizing UI
    10. Adding Interactive Elements and Animations
    11. Conclusion and Homework
```

# Reason to love Tailwind

```
    1. Compared to CSS for a media query -> the Time has been reduced (need not to be remmbered)
    2. Hover states (all CSS -> utility classes) (clean)
    3. Duplication ( abstraction to be used for many a times)
    4. Dark Mode
    5. Design Tools
    6. Grid (Transform , color  Gradients)
    7. Animations -> easy
    8. Tailwind uses native CSS ( which makes a user good at css)
    9. If you use Bootstrap (you will not become good in CSS)
    10. Storybook to be used for make life more easier (tool - suplimentary)
```

# Installation Guide

```
    1. Using Next.js

    nvm use --lts

    npx create-next-app@latest azim-todo-app

    npm install --global yarn

    yarn

    yarn dev

    yarn add -D tailwindcss postcss autoprefixer

    npx tailwindcss init -p

    yarn -D @tailwindcss/jit tailwindcss postcss autoprefixer
```

# Extensions

```
    1. Tailwind CSS IntelliSense
```

# How to use

```
    1. First is moble configs and then break points
    2. your child-items shouldnt have margins
    3. globals.css ( based on priority)
```

# example of tailwind rules for non repeating

```
/* ./styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* custom layer to apply for not repeating code */

@layer components {
  .btn {
    @apply p-10 rounded-2xl shadow-lg ring-2 ring-gray-200 focus:outline-none
    active:ring-red-600 hover:ring-gray-500;
  }

  .btn--primary {
    @apply shadow-lg;
  }
}
```

# Color Schemes and color pallete (curate your own colors in tailwind css)

```
    1. https://coolors.co/
```
