# AI Tools Learning: Anti Gravity

### 1. Which tool you used
I chose to experiment with **Google Anti Gravity**. Unlike a traditional plugin, this is a standalone "agent-first" IDE (a fork of VS Code) designed to let AI agents handle complex, multi-step tasks autonomously.

### 2. What you used it for
I used the tool for two specific tasks in my internship repository:
- **Understanding Existing Code:** I ran an agent to analyze my current project structure and explain how my Express.js backend interacts with my PostgreSQL database.
- **Writing Documentation:** I tasked an agent with generating a `CONTRIBUTING.md` file by scanning my git history and folder structure.

### 3. What it helped with
- **Context Awareness:** Anti Gravity’s agents were excellent at "reading" the whole project. Instead of just looking at one file, the agent used the "Manager View" to understand relationships between the client and server folders.
- **Planning:** Before writing a single line of code, the tool generated a "Plan Artifact." This allowed me to see exactly what files it intended to touch, which prevented accidental overwrites.
- **Terminal Integration:** It automatically suggested terminal commands (like `npm install` or `ls`) and waited for my permission before executing them.

### 4. What it struggled with
- **Over-Engineering:** Occasionally, the agent tried to create complex directory structures for simple documentation tasks.
- **Latency:** Because it uses high-level reasoning (Gemini 3 Pro), some "Planning" phases took longer than just writing the code myself would have.
- **"What" vs. "Why":** In code comments, it tended to explain *what* the code was doing (which is obvious) rather than *why* a specific architectural choice was made. I had to add custom instructions to reduce the "noise."
