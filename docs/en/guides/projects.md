---
title: 'Project Management'
description: 'Learn how to manage, configure, and organize your projects in EasyCoda.'
order: 30
---

# Project Management

This guide helps you better understand and manage your projects. A project refers to the software you are developing — it may include only a frontend, only a backend, or both (e.g., a full-stack project).

After logging into the EasyCoda console, click the **Projects** button in the left sidebar to go to the project list page, which displays all your projects. The history section of the sidebar shows your most recent 30 project records.

## Project Details

On the project list page, click the **More Actions** button ` ⋮ ` on the right side of a project, then select **Settings** from the dropdown menu to enter the project detail page. Here you can view detailed information about the project, such as its name, agent team, and credit usage.

You can also edit the project description. The system generates a simple description by default, which you can modify at any time. This description is displayed on EasyCoda's [Explore page](https://easycoda.com/explore). When a user clicks on your project from the Explore page, they are taken to the project showcase page, where your description appears at the bottom.

When you create a new project, the system generates a random string as the project name, which cannot be changed. A human-readable display name is also generated, which you can rename at any time by clicking **Rename Project**.

## Project Permissions

Project visibility is set when you create the project and defaults to **Public**.

- **Public projects:** Visible to all logged-in users. Anyone can clone the project and build upon it. Cloning does not include your conversation history. You can change a project's visibility to Private at any time.
- **Private projects:** Only accessible to you and will not appear on the Explore page. You can also invite specific users to access your private project. Invited users can view all conversation history and access the project preview page, but cannot edit code files or interact with the agent — they can only observe.

Default accounts include a quota of one private project. To create more private projects, please upgrade your account.

## Project Status

On the project list page, if a project's preview image shows floating bubbles, it means the project's agent team is currently running. On the project detail page, you can view the agent team's working status. The supported status descriptions are as follows:

- `TASK_COMPLETED` — All agent tasks have been completed; no agents are running.
- `TASK_CANCELLED` — All agent tasks have been cancelled; no agents are running.
- `TASK_RUNNING` — The agent team is actively working.
- `TASK_ERROR` — The agent team encountered an error, such as a network error.

### Cancelling a Task

To cancel the current task, click the **Stop** button `⏹` in the bottom-right corner of the message input box on the project chat page. Task cancellation is asynchronous — after sending the stop signal, the task will not stop immediately and you may still see it running. Please refresh the project list page after a moment to check the agent task status.

You can also cancel a task from the project list page by clicking the **More Actions** button next to a project and selecting **Stop Agent** from the dropdown menu. All stop operations are asynchronous — please refresh the page after a moment to confirm whether the task has stopped successfully.

## Project Cloning

You can browse any project on the portal's [Explore page](https://easycoda.com/explore). Click a project's preview image to open its detail page, then click the **Clone** button to start building on top of that project. Cloned projects default to Public visibility, which you can change later if needed. Cloning copies only the source code, agent team configuration, and sandbox environment — conversation history is not included.

You can also clone one of your own existing projects from its detail page by clicking the **Clone** button.

## External Git Repository Integration

EasyCoda provides an internal Git repository for every project by default. Each completed agent task is automatically committed to this internal repository. If you want to sync your code to an external Git repository such as GitHub, you need to authorize access in your account settings.

Log into the console, click the **avatar** button in the bottom-left corner, select **Settings** from the popup menu, go to the **Integrations** tab, choose the external repository you want to connect, and click **Connect** to complete authorization.

Once authorized, every new project you create will automatically have a corresponding repository created on the external Git platform. Each completed agent task will be pushed to both the external repository and the internal one.

## Code Download

You are free to download the source code of any project you have built on EasyCoda and use it however you like — you retain full copyright. On the project chat page, click the **Download** button on the right side of the header bar to download a ZIP archive of the project's latest code. The downloaded source code comes from the `main` branch of the internal repository by default, so please ensure the code you need is on that branch.

## Project Deletion

On the project detail page, click the **Delete** button at the very bottom. Deletion permanently removes all resources associated with the project, including code, the sandbox environment, and conversation history — this action cannot be undone. Resources from projects that were cloned from this project will not be affected.