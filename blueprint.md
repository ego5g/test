# Project Blueprint

## Overview

This document outlines the plan for migrating the Next.js project from the `pages` router to the `app` router, and to establish a clean, modern, and maintainable project structure.

## Current State

The project is currently using the `pages` router, which is the older way of routing in Next.js. The goal is to move to the `app` router, which is the new standard and offers benefits like server components, layouts, and improved data fetching.

## Migration Plan

1.  **Create `blueprint.md`:** Establish this document as the single source of truth for the project's architecture and design.
2.  **Remove `pages` directory:** The existing `pages` directory will be removed.
3.  **Create `app` directory:** A new `app` directory will be created to house the new `app` router structure.
4.  **Create Root Layout:** A root layout will be created at `app/layout.tsx`. This will be the main layout for the entire application.
5.  **Create Home Page:** The home page will be created at `app/page.tsx`.
6.  **Update `next.config.mjs`:** The `next.config.mjs` file will be updated to remove any configuration that is no longer needed.
7.  **Install Dependencies:** Any missing dependencies required for the `app` router will be installed.
8.  **Create `tsconfig.json`:** A `tsconfig.json` file will be created to configure TypeScript.
9.  **Linting:** The project will be linted to ensure code quality.
10. **Error Checking:** The project will be checked for any errors after the migration.

