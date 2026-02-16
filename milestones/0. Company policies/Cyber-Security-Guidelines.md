# Cyber Security Best Practices & Commitment

## Reflection

### My Current Baseline
Right now, I’m pretty solid with my authentication logic in code, but I can improve my personal "hygiene." I sometimes reuse variations of the same password for lower-stakes accounts. I need to move everything—no exceptions—into a password manager.

### Making Security a Habit
I’m treating security like "unit testing" for my life. It’s not an extra step; it’s part of the definition of "done." Every time I finish a coding session or leave my desk, the screen gets locked. No exceptions.

### Breach Protocol
If I ever see a "new login" notification I don't recognize or accidentally click a shady link:
1. **Isolate:** Disconnect the device from the internet immediately.
2. **Report:** Alert the Focus Bear team/supervisor. Don't wait to "be sure"—speed matters.
3. **Rotate:** Change credentials from a known clean device.

### 1. Account Hardening
* **Password Manager:** I’ve moved my Focus Bear and University credentials into an encrypted vault.
* **2FA Setup:** I have enabled 2FA on my GitHub, Gmail, and Discord accounts using an authenticator app.

### 2. Device Security
* **Auto-Lock:** My laptop is now set to sleep and require a biometric/password login after 2 minutes of inactivity.
* **Encryption:** Verified that FileVault (Mac) / BitLocker (Windows) is active on my primary work machine.

### 3. My New Security Habit
**"The Script-Check Rule"**
Before running any `npm install` or `pip install` from a new or obscure library, I will do a quick check on the package's reputation. Supply chain attacks (malicious code hidden in common libraries) are a major threat to developers, and I want to ensure I'm not importing a "Trojan horse" into Focus Bear's codebase.
