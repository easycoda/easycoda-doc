---
title: 'Workspace Management'
description: 'Learn how EasyCoda manages workspaces, and how to configure and manage your workspaces and the projects within them.'
order: 50
---

# Workspaces

Workspaces provide resource and permission isolation. A single workspace can contain multiple projects and multiple users. When you create an account, the system automatically generates a default workspace for you.

The workspace model makes it possible for AI agents to build large-scale distributed projects. For example, to build a Kubernetes-style system, you could have an Angular or React agent team handle the frontend UI, multiple Go agent teams handle API services, a scheduler, and other components — with each service communicating via workspace-internal addresses.

## Network Isolation

Projects within the same workspace can access each other over the network. For example, if a frontend project and a backend project share a workspace, the frontend can reach the backend using its workspace-internal address for testing purposes.

## Permission Isolation

When you invite a user to a specific project, that user is automatically added to the workspace that contains the project and gains access to all projects within that workspace.

## Inviting Users

Log in to the EasyCoda console and click **Workspaces** in the sidebar. Find the workspace you want to invite users to, click the **More Actions** button on the right, and select **Invite Users** from the dropdown to open the invitation dialog.

There are two ways to invite users:

- **By email or user ID:** Enter the invitee's email address or user ID, then click **Send Invitation**. The system will automatically send an invitation email to that user; they simply need to confirm to join.
- **Via a public URL:** Click **Generate Invite Link** to create a shareable public link. Anyone who accesses the link can join the workspace. There is currently no limit on the number of users per workspace.

Users who join a workspace have **read-only** access to all projects within it — they cannot modify project code, delete resources, or download project files; they can only view project resources. You can manage workspace members (e.g., remove users) from the workspace detail page by clicking the **Users** tab.

## Deleting a Workspace

You can delete a workspace at any time. When a workspace is deleted, all projects within it are permanently removed and cannot be recovered.