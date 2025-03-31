
# Shut Up LEGS – Coming Soon Site

A high-altitude cycling challenge landing page built with React, Vite, TypeScript, Docker, and Material UI.

---

## Features

- Fully containerized development with Docker
- VSCode `.devcontainer` support
- Responsive "Coming Soon" landing page
- Email registration via Formspree
- Fixed full-screen Rocacorba background
- Logo and event branding

---

## Local Development Setup

### Prerequisites

- Docker
- VSCode with the **Dev Containers** extension

---

### Steps to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/shut-up-legs.git
   cd shut-up-legs
   ```

2. **Open in VSCode** and select:
   ```
   Dev Containers: Reopen in Container
   ```

3. Once inside the container, open a terminal and run:
   ```bash
   npm run dev
   ```

4. Open your browser to:
   ```
   http://localhost:5173
   ```

> **Troubleshooting (Safari or Chrome not loading)**:
> If the site doesn’t load, ensure `vite.config.ts` has `host: true` under `server`, which is already set in this project. This allows Safari to access the Vite server from outside the container.

---

## Environment Overview

- `/public` — static assets (logo, background image)
- `/src` — main app code
- `/email` — HTML confirmation email template
- Docker + DevContainer support
- Material UI for consistent design

---

## Deployment Guide

See `deployment_guide.pdf` for step-by-step AWS Amplify Hosting instructions including:
- Connecting GitHub
- Build settings
- Pointing domain
- AWS cost protection

---

## Form Handling

The form submits to Formspree. Replace `your-form-id` in `ComingSoon.tsx` with your actual Formspree endpoint.
