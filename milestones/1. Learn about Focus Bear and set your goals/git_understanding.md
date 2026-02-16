# Git Understanding: Merge Conflicts

## The Conflict Experience

### What caused the conflict?
The conflict occurred because I edited the same line of the same file in two different branches. When I tried to merge the `conflict-test` branch back into `main`, Git didn't know whether to keep the version from `main` or the version from my branch, so it paused the merge and asked me for help.

### How did I resolve it?
I used my Git desktop client to compare the two versions. I realized that the version in my feature branch was actually the more updated one, so I selected **"Accept Incoming Changes"**. After the markers were removed and the file looked correct, I finalized the merge with a "Resolve merge conflict" commit.

### What did you learn?
* **Communication is Key:** Conflicts often happen because two people are working on the exact same logic without talking.
* **Pull Frequently:** To avoid massive, scary conflicts, I should pull from `main` into my feature branch often. This allows me to resolve small conflicts as they happen rather than all at once at the end of a week.
* **Markers are helpful:** The `<<<<<<<`, `=======`, and `>>>>>>>` markers might look messy, but they are exact guides on where the disagreement is happening.

---

## Best Practices for Focus Bear
1. **Keep PRs Small:** Small pull requests mean fewer chances for conflicts.
2. **Atomic Commits:** I'll commit small, logical chunks of work. If a conflict happens, it’s much easier to see *what* logic is actually clashing.
3. **Daily Syncs:** By keeping my local repo synced with the remote `main`, I catch conflicts early.
