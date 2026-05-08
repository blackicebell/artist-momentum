# AGENTS.md

## Project Overview

Momentum is a mobile-first growth dashboard for independent music artists.

The app helps artists understand:

* audience growth
* engagement
* release traction
* cross-platform momentum

The experience should feel:

* premium
* motivating
* emotionally rewarding
* visually clean
* simple

Avoid:

* enterprise dashboard aesthetics
* spreadsheet-style UI
* overly technical language
* cluttered analytics layouts

---

# Tech Stack

## Frontend

* React Native
* Expo
* TypeScript

## Backend

* Firebase
* Firestore
* Firebase Auth
* Cloud Functions

---

# Architecture Rules

## Keep layers separated

Architecture should follow:

API Layer
→ Normalization Layer
→ Rules Engine
→ UI Layer

Do NOT mix:

* API logic
* scoring logic
* UI rendering

---

# Folder Structure

/components
Reusable UI components

/screens
Top-level app screens

/services
API integrations + Firebase services

/utils
Helpers + scoring logic

/hooks
Reusable hooks

/constants
Colors, typography, spacing, config

/docs
Project documentation

/assets
Images, icons, fonts

---

# UI/UX Philosophy

The app should feel closer to:

* Spotify Wrapped
* Cash App
* Apple Fitness

NOT:

* Google Analytics
* enterprise SaaS dashboards

Prioritize:

* clarity
* hierarchy
* emotional feedback
* rewarding interactions
* minimal friction

---

# Design System Rules

## Colors

Background:
#0B0B0F

Card Background:
#1B1B24

Primary Accent:
#8B5CF6

Secondary Accent:
#4F9CF9

Text:
White primary text
Muted gray secondary text

---

# Typography

Primary font:
Inter

Style:

* large bold headers
* strong hierarchy
* minimal clutter
* clean spacing

---

# Component Rules

Use reusable components for:

* cards
* buttons
* alerts
* score widgets
* charts
* navigation items

Avoid duplicated UI patterns.

---

# Animation Rules

Animations should feel:

* smooth
* lightweight
* premium
* rewarding

Use:

* fade-ins
* subtle scaling
* smooth transitions
* staggered loading

Avoid:

* excessive motion
* flashy effects
* distracting animations

---

# Momentum Score Rules

The Momentum Score is the primary retention mechanic.

Weighted scoring system:

* Audience Growth = 35%
* Engagement Growth = 30%
* Release Activity = 20%
* Cross-Platform Velocity = 15%

Score ranges:

0–25 = Low Momentum
26–50 = Growing
51–75 = Building Traction
76–100 = Strong Momentum

---

# Notification Philosophy

Notifications should feel:

* encouraging
* exciting
* validating

Never:

* spammy
* anxiety-inducing
* overly technical

Good examples:

* “Your audience is growing faster this week.”
* “Your latest upload is gaining traction.”
* “Momentum increased after your recent post.”

---

# Development Rules

## Start with frontend shell only

Use mock JSON data initially.

Do NOT integrate APIs until:

* navigation is stable
* onboarding feels polished
* reusable components exist
* dashboard UX is refined

---

# Coding Standards

* Use TypeScript strictly
* Prefer reusable components
* Keep functions small and focused
* Avoid unnecessary abstractions
* Keep code readable and modular
* Use descriptive naming conventions

---

# Done Means

A task is complete only if:

* UI matches product direction
* components are reusable
* TypeScript has no errors
* navigation works correctly
* code is modular and maintainable
* UX feels polished on mobile
