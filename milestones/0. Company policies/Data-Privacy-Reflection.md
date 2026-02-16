# Data Privacy & My Role at Focus Bear

## 📝 Reflection

### My Daily Security Checklist
* **Environment Variables:** I'm making it a hard rule to check my `.gitignore` before every single push. No API keys or DB credentials should ever see the light of a remote repo.
* **Locked Screen:** If I'm working in a cafe or a library, I'm hitting `Win+L` (or `Cmd+Ctrl+Q`) every time I stand up to grab a coffee. Physical security is data security.

### Handling Sensitive Info
* **Sharing:** If I need to send a snippet of sensitive data to a teammate, I won't use plain Slack or Discord. I'll use a self-destructing link or an encrypted vault.
* **Disposal:** Old logs or local DB exports get wiped, not just moved to the "Trash" bin.

### Common Pitfalls to Avoid
* **"It's just a test":** Using real user data in a staging/dev environment. It's a huge risk. I'll stick to generated "fake" data for testing my real-time monitoring features.
* **Shadow IT:** Using random third-party "JSON formatters" or "Base64 decoders" online. Those sites can log whatever you paste. I'll use local IDE plugins instead.

---

## ask Documentation

### 1. The New Security Habit
* **Habit:** Multi-Factor Authentication (MFA) on everything. If an account holds Focus Bear data and it doesn't have 2FA enabled, I'm fixing that today.
* **Practice:** I'm also going to start using a password manager for all work-related tools so I'm not tempted to reuse the same "strong" password across different platforms.

### 2. Key Learning / Measure
* **The Takeaway:** I've realized that **"Data Minimization"** is the best security. If we don't store it, we can't lose it.
* **Implementation:** When I'm designing database schemas (like for the PostgreSQL work I've been doing), I'll ask: *"Do we actually need to store this specific field, or can we function without it?"*

### 3. Verification
* I have reviewed the Focus Bear Privacy Policy and understand that my responsibility isn't just to write code that works, but to write code that protects.
