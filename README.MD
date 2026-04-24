# Bacala

#### Framework: Next JS

#### Module: Donation Module

## Installation
Quick Setup Guide

* Node.js v18+ - Download from https://nodejs.org/
* Git (optional) - https://git-scm.com/
* Verify: Run node --version and npm --version in terminal

Installation (3 Steps)
1. Clone/Download the repository
    > git clone <your-repo-url>
    cd alumni-portal
    
2. Install dependencies
    > npm install

3. Start the development server
    > npm run dev

Access the App
Open your browser and go to localhost


### AI Tools:

1. Chat GPT
1. VS Code - Github CoPilot

### Prompt:

###### ChatGPT: 
create me a prompt to generate a simple web application version of the pdf document i sent, the document contain a mobile user screens using next js.
(PDF file is used)

###### VS Code - Github CoPilot: 
Create a simple mobile-first web application using Next.js (App Router) and Tailwind CSS based on the following product requirements.

The app is an “Alumni Donation Portal” with both Alumni and Admin roles. Focus on clean UI, reusable components, and simple state management (no backend required—mock data is fine).

GENERAL REQUIREMENTS:
- Use Next.js (App Router)
- Use Tailwind CSS for styling
- Mobile-first responsive design
- Use reusable components (Card, Button, Navbar, Tabs, etc.)
- Include a bottom navigation bar across main screens
- Use mock data (JSON)
- Keep logic simple (no authentication backend needed, just simulate flows)

CORE SCREENS & FEATURES:

1. AUTHENTICATION FLOW
- Login Screen:
  - Email/ID input
  - Password input with visibility toggle
  - “Forgot Password?” link
  - Login button
  - Sign up option

- Forgot Password Screen:
  - Input for email or student ID
  - “Continue” button
  - Simple confirmation state

- Role Selection Screen:
  - Two cards: Alumni and Admin
  - Navigate based on selection

---

2. ALUMNI SCREENS

- Home Dashboard:
  - Total donations summary
  - Donation progress chart (simple bar/progress)
  - Highest donors list
  - Updates/alerts section

- Events:
  - Calendar View (simple mock calendar grid)
  - List View:
    - Scrollable event cards
    - Each card shows date, title, time, location, description
    - RSVP button
  - Search + filter tabs (All, Reunions, Outreach, Donations)

- Giving & Impact:
  - Featured campaign card
  - Campaign list with progress bars
  - Quick donate buttons
  - Donation summary

- Campaign Details:
  - Banner image
  - Title, category, goal
  - Story section
  - Donor impact/testimonials
  - Fixed “Donate Now” button

- Donation Checkout:
  - Preset donation amounts
  - Custom amount input
  - Payment methods (GCash, Maya, Card)
  - Email for receipt
  - “Complete Donation” button

- Donation History:
  - Total donated summary
  - Simple chart (mock)
  - List of transactions

- Notifications:
  - Tabs (All, Donations, Events, System)
  - Notification list with timestamps and actions

- Profile:
  - Profile overview (name, program, batch)
  - Sections:
    - Academic Records
    - Past Donations
    - Settings
  - Edit Profile screen
  - Credential download button

- Certificate Vault:
  - Grid/list of certificate cards
  - Each card: image preview, campaign, amount, date
  - Download button
  - “Auto-share to profile” toggle

---

3. ADMIN SCREENS

- Admin Dashboard:
  - Metrics: total funds, campaigns, students supported
  - Campaign progress
  - “Create Donation” button

- Campaign Management:
  - List of campaigns
  - Status labels (Active, Ending Soon, Paused)
  - Progress bars

- Create Campaign (Multi-step):
  Step 1:
    - Title
    - Category
    - Story
    - Upload image

  Step 2:
    - Suggested donation amounts
    - Custom amount toggle
    - Campaign preview
    - Publish button

- Batch Leaderboard:
  - Ranking list of alumni batches
  - Donation totals per batch

---

TECHNICAL STRUCTURE:

- Use folder-based routing (app/)
- Create reusable components:
  - Navbar (bottom nav)
  - Card
  - Button
  - Input
  - Tabs
- Use mock JSON data for:
  - Events
  - Campaigns
  - Donations
  - Notifications

- Use simple state (useState/useContext)
- No need for backend or database

---

OUTPUT FORMAT:

- Provide full Next.js project structure
- Include key files:
  - app/page.tsx
  - components/*
  - sample data files
- Keep code clean and beginner-friendly
- Add comments explaining each section

---


## Screenshots

![Screenshot 182](screenshots/Screenshot%20(182).png)
![Screenshot 183](screenshots/Screenshot%20(183).png)
![Screenshot 184](screenshots/Screenshot%20(184).png)
![Screenshot 185](screenshots/Screenshot%20(185).png)
![Screenshot 186](screenshots/Screenshot%20(186).png)
![Screenshot 187](screenshots/Screenshot%20(187).png)
![Screenshot 188](screenshots/Screenshot%20(188).png)
![Screenshot 189](screenshots/Screenshot%20(189).png)
![Screenshot 190](screenshots/Screenshot%20(190).png)
![Screenshot 191](screenshots/Screenshot%20(191).png)


## Master prompt
- you are a developer that develope firstattempt2026_Bacala, a static framework-based project into a high-performance, offline-ready Progressive Web Application. The goal is to generate a valid manifest.json with university branding which consist of color blue and white and this logo. after that, implement Registering a Service Worker. Next, implementing cashing strategies so the app loads instantly and works offline. Finaly, manage the app icons.

(UniversitySeal240px.png is uploaded in the prompt)

- change the text color of login and password from gray to black

## hallucinations
- The color of the font, i have to manually change it.
- Logo of the university
- login function
