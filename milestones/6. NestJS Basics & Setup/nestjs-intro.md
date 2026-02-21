# nestjs-intro.md

## 6.1 What is NestJS? (Framework Overview)

### 1. What are the key differences between NestJS and Express.js?

Express is a minimalist library where the developer decides the architecture. NestJS is a full framework that provides a rigid, out-of-the-box structure. NestJS uses TypeScript and is heavily inspired by Object-Oriented Programming (OOP) principles, making it much better for large-scale, enterprise applications.

### 2. Why does NestJS use decorators extensively?

Decorators (like `@Controller()` or `@Get()`) allow NestJS to use **Declarative Programming**. Instead of writing complex code to set up a route, I simply add a decorator above a class or method. This makes the code cleaner, more readable, and allows the framework to handle the "under-the-hood" setup automatically.

### 3. How does NestJS handle dependency injection?

In NestJS, classes are marked as `@Injectable()`. Instead of manually creating a new instance of a service (e.g., `const s = new Service()`), NestJS handles the "instantiation" for me. When I define a service in a class constructor, NestJS "injects" the required instance automatically. This makes the code easier to test and more decoupled.

### 4. What benefits does modular architecture provide in a large-scale app?

Modular architecture allows for **Encapsulation**. Each feature (like Authentication or Payments) is self-contained in its own module. This makes it easier to:

- **Reuse code:** A module can be easily moved or shared.
- **Collaborate:** Different developers can work on different modules without clashing.
- **Maintain:** It is much easier to find and fix bugs when the code is organized by feature rather than by file type.
