# 3.1 Pull Requests

### 1. Why are PRs important in a team workflow?
Pull Requests act as a "quality gate" for software projects. They allow team members to review changes, run automated tests, and discuss implementation details before code is merged into the stable `main` branch. This process facilitates knowledge sharing, catches bugs early, and ensures that the codebase maintains a high standard of quality.

### 2. What makes a well-structured PR?
A high-quality PR should include:
- **Clear Title & Description:** Explaining "the why" behind the change, not just "the what."
- **Small, Atomic Changes:** Focused on a single task to make reviewing easier.
- **Related Issue Links:** Using keywords like `Closes #123` to automate the workflow.
- **Evidence of Testing:** Screenshots or logs showing that the code works as expected.

### 3. What did you learn from reviewing an open-source PR?
While reviewing public repositories (like React or VS Code), I observed that maintainers prioritize clarity and consistency. The most effective reviewers use constructive language, often framing suggestions as questions rather than demands. I also noticed that automated CI/CD checks (like linting and unit tests) are the first line of defense, allowing human reviewers to focus on the high-level logic and architecture.

![New Branch](git_understanding_proof.png)

![CL](git_understanding_cl.png)


# 3.2 Writing Meaningful Commit Messages

### 1. What makes a good commit message?
A good commit message follows the **50/72 rule**: a concise subject line (under 50 characters) and a detailed body (wrapped at 72 characters) if necessary. It uses the **imperative mood** (e.g., "Fix bug" instead of "Fixed bug"), which treats the commit like a command that will be applied to the codebase. Using a prefix like `feat:`, `fix:`, or `docs:` (Conventional Commits) also helps categorize the history.

### 2. How does a clear commit message help in team collaboration?
Clear messages serve as a "logbook" for the team. When a developer runs `git blame` to see why a specific line of code exists, a clear message explains the *intent* behind the change. It reduces the need for meetings and allows reviewers to understand the context of a Pull Request without having to ask the author for a verbal explanation.

### 3. How can poor commit messages cause issues later?
Poor messages like "save" or "fixed" create a "dark" history. If a bug is discovered six months later, it becomes nearly impossible to use `git bisect` or `git log` to find when or why the error was introduced. It forces developers to waste time reading through every line of a diff to reverse-engineer the thought process of the original author.
Update on git rules
Added a newline for better spacing
