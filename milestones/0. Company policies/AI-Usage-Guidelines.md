# My Personal Guidelines for AI Usage

## Reflection

### When to Use vs. When to Think

I use AI for "low-stakes" tasks: writing boilerplate, generating unit tests for Kotlin, or brainstorming marketing taglines for my projects. However, I rely on my own skills for architectural decisions—like how my PostgreSQL tables should relate—and for any security-critical logic. If I can't explain the code to a teammate, I shouldn't be using it.

### Avoiding Over-Reliance

To keep my skills sharp, I try to solve a problem for at least 15 minutes before asking an AI. This ensures I’m actually learning and not just "copy-pasting" my way through the internship. I treat AI output like a draft from a junior developer: it always needs a thorough peer review.

### Privacy First

Before I paste anything into an LLM, I do a "sanitization pass." I replace project-specific names with generic ones and I never include real database strings or secrets.

### 1. Task Improvement Test

* **Task:** Writing a complex GraphQL schema for the real-time monitoring project.
* **AI Tool:** Gemini Pro
* **Result:** It helped me structure the types quickly, but it tried to use a deprecated library for the resolvers. I had to manually update it to match our current Express.js environment.

### 2. Critical Review

The AI-generated code was about 80% correct. The 20% it got wrong would have caused a runtime error. This reminded me that AI is great at "syntax" but sometimes struggles with "context."

### 3. My Best Practice for Focus Bear

**"The Sanitization Rule"**
I will never paste more than 20 lines of code at a time into an AI tool, and I will strictly scrub all variable names that hint at internal Focus Bear infrastructure. If I'm using AI to help with a bug, I will recreate the bug in a generic "sandbox" environment first so no proprietary code is uploaded.
