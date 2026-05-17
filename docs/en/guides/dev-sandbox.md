---
title: 'Sandbox Environment'
description: 'Learn about the sandbox environment provided by EasyCoda and its lifecycle.'
order: 60
---

# Sandbox Environment

EasyCoda provides a cloud-based sandbox environment for each agent team. Team members can execute commands, debug programs, and more within this sandbox.

## Environment Initialization

When you create a new project and submit your requirements, the system automatically provisions a sandbox environment. The sandbox is based on a Linux virtual machine and comes with a web-based terminal for direct access. You can open the terminal by clicking the **Terminal** button on the project chat page.

When system resources are available, the sandbox is typically ready within **15–20 seconds**. Startup time may be slightly longer during periods of high resource demand.

## Sandbox Lifecycle

Once your agent tasks are complete, the sandbox will automatically shut down if it has not been accessed for **30 minutes**. Your data and files are not deleted — only the virtual machine is stopped so that compute resources can be reclaimed for other users. The next time you open the project chat, the sandbox will start up automatically and all your code and environment data will be restored.

> **Note:** While the sandbox is shut down, the preview URL for your project will be inaccessible.

## Sandbox Resource Specifications

| Project Type | vCPU | Memory | Disk |
|---|---|---|---|
| Frontend | 2 vCPU | 2 GB | 10 GB |
| Backend / Full-Stack | 2 vCPU | 4 GB | 10 GB |