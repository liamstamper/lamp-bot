<p align="center">
 <img width="100px" src="public/favicon.png" align="center" alt="GitHub Readme Stats" style="border-radius: 50px;" />
 <h1 align="center" style="border-radius: 10px; overflow: hidden;">Lamp</h1>
 <p align="center" style="border-radius: 10px; overflow: hidden;">An AI-Powered Code Review Bot for your Pull Requests</p>
</p>
<p align="center">
    <img src="https://img.shields.io/badge/License-MIT-green.svg"/>
    <img src="https://img.shields.io/badge/Hosted%20on-Vercel-black?logo=vercel"/>
</p>





## Description

Lamp is a GitHub App that automatically reviews Pull Requests and posts AI-generated feedback. Built with Next.js Hono, it listens for webhook events, fetches changed files, and generates comments on open PRs—helping teams quickly review and refine their code.

## Getting Started

1. **Install the App**  
   Head over to the [Lamp PR Bot App Page](https://github.com/apps/lamp-pr-bot).  
   - Click **Install** to grant Lamp access to your desired repositories.  
   - Choose whether to limit installation to specific repos or all repos in your account.

2. **Open a Pull Request**  
   - Once installed, open (or update) a PR in any repo where Lamp is installed.  
   - Lamp automatically listens for the `pull_request` event.

3. **Receive AI-Generated Feedback**  
   - The bot reviews the PR’s changed files and posts a comment with AI-based suggestions.  
   - Collaborators can then refine and merge with greater confidence.
