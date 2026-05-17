---
title: 'Agent Teams'
description: 'Learn about the Agent Teams available in EasyCoda and their configuration parameters.'
order: 40
---

# Agent Teams

EasyCoda provides agent teams for a variety of common programming languages and frameworks — including Angular, React, and Vue for frontend development, and Java, Go, Node.js, and Python for backend development. Each agent team consists of a **Team Leader**, an **Architect Agent**, and either a **Frontend Agent** or **Backend Agent** (or both), depending on the team type.

We model software engineering roles as AI agents, balancing cost and complexity so that each agent plays a distinct role and handles specific responsibilities throughout the development lifecycle. Industry best practices and standards are embedded into every agent, ensuring the final deliverables — code, documentation, and more — are maintainable, scalable, and high quality. Each agent team operates on a fixed technology stack. Once you select an agent team when creating a project, it cannot be changed afterward.

## Agent Roles

Every EasyCoda agent team is composed of the roles below. The **Team Leader** and **Architect Agent** are present in every team; the **Frontend Agent** and **Backend Agent** are included based on the team type. In practice, roles are not limited to a single instance — the **Team Leader** dynamically scales team members based on workload and task dependencies.

For example, when multiple independent frontend tasks exist simultaneously, the **Team Leader** may spin up several **Frontend Agent** instances in parallel to accelerate development.

### Team Leader (TL)
- Displayed as the `TL` avatar in the UI.
- Receives requirements from the user, communicates to clarify scope, and forwards a finalized requirements summary to the **Architect Agent** for architecture design, tech stack selection, project specification (Spec), and task planning (Task Plan).
- Presents the development spec to the user for review. If rejected, it collects further input and sends it back to the **Architect Agent** for revision. Once approved, it retrieves the task plan and dispatches tasks to the appropriate coding agents in dependency order. Tasks that can run in parallel are assigned to multiple coding agent instances simultaneously to speed up delivery.
- Aggregates task completion feedback from coding agents, decides whether to continue development or report interim progress to the user, and delivers a final project summary once all tasks are complete.
- Also handles bug-fix requests from the user: reviews project files, locates the issue, and dispatches fix tasks to the relevant coding agents.
- Permissions: read access to the file system, task management access. No command execution access.
- You can continuously send new tasks, bug fixes, or even full refactoring requests to the Team Leader.

### Architect Agent (AA)
- Displayed as the `AA` avatar in the UI.
- Generates the project development specification based on requirements received from the **Team Leader**, and saves it under the `spec` directory in the project folder. Users can review and edit the spec to meet their needs.
- Derives a series of development tasks from the generated spec. The **Team Leader** uses this task list to dispatch work to the appropriate coding agents.
- Permissions: read/write access to the file system, task management access. No command execution access.

### Frontend Agent (FA)
- Displayed as the `FA` avatar in the UI.
- Translates tasks received from the **Team Leader** into code, implementing frontend features according to the task details and the project specification.
- Each task must pass testing before it is marked complete.
- Each completed task is committed and pushed to the code repository.
- Permissions: full read/write access to the file system and command execution. Uses powerful tool-calling to write, debug, and functionally test code.

### Backend Agent (BA)
- Displayed as the `BA` avatar in the UI.
- Translates tasks received from the **Team Leader** into code, implementing backend features according to the task details and the project specification.
- Each task must pass testing before it is marked complete.
- Each completed task is committed and pushed to the code repository.
- Permissions: full read/write access to the file system and command execution. Uses powerful tool-calling to write, debug, and functionally test code.

---

## Supported Agent Teams

When creating a project, click the **Agent Team** dropdown to select the team that best fits your software development needs.

### React Web App Agent Team

Develops React-based frontend projects. Backend API and database integration are not supported. Technology stack:
- React 19
- Tailwind CSS 4
- Vite 7.3
- shadcn/UI components
- pnpm package manager

### Angular Web App Agent Team

Develops Angular-based frontend projects. Backend API and database integration are not supported. Technology stack:
- Angular 20
- Tailwind CSS 4
- pnpm package manager
- No built-in UI component library

### Vue Web App Agent Team

Develops Vue-based frontend projects. Backend API and database integration are not supported. Technology stack:
- Vue 3
- Tailwind CSS 4
- pnpm package manager
- No built-in UI component library

### Node Express Full-Stack Agent Team

Develops full-stack projects using Node.js and Express, supporting simultaneous development of the frontend, backend API, and database. Technology stack:
- Node.js Express 4
- Tailwind CSS 4
- pnpm package manager
- React 19 frontend
- shadcn/ui components
- PostgreSQL 17 database
- Prisma 7 ORM

### Golang Agent Team

Develops Golang-based backend API projects following a strict four-layer architecture (Model → DAO → Service → Handler). Frontend UI development is not supported. Technology stack:
- Go 1.22+
- Gin web framework
- GORM (ORM framework)
- SQLite (default database)
- Swaggo (auto-generated Swagger documentation)
- Viper (YAML configuration management)

### Python FastAPI Agent Team

Develops high-performance Python backend API projects following async programming best practices. Frontend UI development is not supported. Technology stack:
- Python 3.12
- FastAPI framework
- Pydantic v2 (data validation)
- SQLAlchemy 2.0 (ORM framework)
- `uv` package manager
- Pydantic-settings (environment variable management)

### Spring Boot Agent Team

Develops enterprise-grade Java backend projects following rigorous industry-standard layered architecture. Frontend UI development is not supported. Technology stack:
- Java 21
- Spring Boot 3.x
- Spring Data JPA (persistence layer)
- Lombok (boilerplate reduction)
- SpringDoc OpenAPI (Swagger API documentation)
- Maven (package management and build)

### Rust Agent Team

Develops high-performance, memory-safe Rust backend projects using a modular, decoupled design. Frontend UI development is not supported. Technology stack:
- Rust 2021 Edition
- Axum (web framework)
- Tokio (async runtime)
- Serde (serialization/deserialization)
- Utoipa (OpenAPI/Swagger documentation)
- Cargo (package management and build)

### Expo (Mobile) Agent Team

Develops cross-platform mobile applications (iOS/Android/Web) using Expo. Backend API implementation is not supported. Technology stack:
- Expo SDK (latest managed workflow)
- React Native
- NativeWind (Tailwind CSS for React Native)
- Lucide React Native (icon library)
- `expo-crypto` (unique ID generation; native `uuid` is disabled)
- `npx expo install` (version-aligned package installation)

### WeChat Mini Program (uni-app) Agent Team

Develops cross-platform mini programs using uni-app. Backend API development is not supported. Technology stack:
- uni-app (Vue 3 Composition API)
- TypeScript (strict mode)
- Tailwind CSS 4 (mini program–optimized build)
- Pinia (state management)
- uni-icons (official icon component library)
- Vite (build tool)

---

Additional agent teams will be added progressively based on user feedback and demand.