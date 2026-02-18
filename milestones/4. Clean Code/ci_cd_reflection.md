# 4.11 Static Analysis Checks in CI/CD

## 1. What is the purpose of CI/CD?

The purpose of CI/CD is to increase the speed and reliability of software delivery. CI ensures that new code doesn't break existing features, while CD ensures that the software is always in a deployable state, reducing the manual effort required to release updates.

## 2. How does automating style checks improve project quality?

Automation removes human error and bias. Instead of a reviewer manually checking for typos or formatting, the CI tool catches them instantly. This allows the team to focus on discussing high-level logic during PR reviews rather than pointing out small spelling mistakes.

## 3. What are some challenges with enforcing checks in CI/CD?

- **False Positives:** A spell checker might flag a technical term or a variable name as a typo.
- **Slower Development:** If a pipeline takes 20 minutes to run, it can slow down the team's momentum.
- **Complexity:** Maintaining the CI/CD scripts themselves requires time and technical knowledge.

## 4. How do CI/CD pipelines differ between small projects and large teams?

In small projects, CI/CD is often just a simple lint and test check. In large teams, pipelines are much more complex, involving security scans, performance benchmarking, multi-environment deployments (staging, UAT, Production), and automated rollbacks if a failure is detected.
