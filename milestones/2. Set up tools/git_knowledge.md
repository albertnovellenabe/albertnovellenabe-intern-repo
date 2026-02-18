# g

## Git Setup & Knowledge Reflection

### 1. Verification of Installation

I have successfully installed and verified Git on my Fedora system.

- **Command:** `git --version`
- **Output:** `git version 2.x.x` (or your specific version)

### 2. Have you used Git before? If so, in what context?

Yes, but I am not that fluent yet in using it.

### 3. Which Git client (if any) did you choose? Why?

I chose to use the **Git CLI (Command Line Interface)** on Fedora, supplemented by **VS Code's built-in Git integration**.

- **CLI:** I prefer the terminal because it provides more control and visibility into errors (like authentication issues).
- **VS Code:** I use the built-in side panel to quickly stage changes and visualize "diffs" (differences) in my code before committing.

### 4. What was the most interesting thing you learned about Git today?

The most interesting thing I learned today was the requirement for **Personal Access Tokens (PATs)** for HTTPS authentication. I discovered that GitHub no longer accepts standard account passwords for command-line operations to improve security. Setting up a credential helper (`credential.helper store`) to manage these tokens was a practical lesson in streamlining my development workflow.
