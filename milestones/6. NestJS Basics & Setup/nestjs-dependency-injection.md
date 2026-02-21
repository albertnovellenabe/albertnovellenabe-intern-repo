# nestjs-dependency-injection.md

## 6.4 Dependency Injection in NestJS

### How does dependency injection improve maintainability?

Dependency Injection (DI) improves maintainability by promoting **loose coupling** between components. Instead of a class being responsible for creating its own dependencies (using the `new` keyword), the dependencies are "injected" from the outside. This makes the code:

* **Easier to test**: You can swap real services for "mock" versions during testing without changing the class code.
* **Flexible**: You can change the implementation of a service in one place without breaking all the controllers that use it.
* **Cleaner**: Classes focus only on their primary job rather than worrying about how to instantiate complex objects.

### What is the purpose of the `@Injectable()` decorator?

The `@Injectable()` decorator serves as a **metadata marker** for the NestJS compiler.

* It tells the Nest **Inversion of Control (IoC) container** that the class is a provider and can be managed by the framework.
* It allows Nest to use the **Reflect API** to identify which other dependencies this specific class needs by looking at the constructor's parameters.
* Without this decorator, Nest will not recognize the class as part of the DI system, resulting in an "Unknown Dependency" error.

### What are the different types of provider scopes, and when would you use each?

NestJS provides three scopes to control the lifecycle of a provider:

| Scope | Behavior | Best Use Case |
| :--- | :--- | :--- |
| **DEFAULT (Singleton)** | One instance is shared across the entire app. | Stateless services, database connections, and loggers. |
| **REQUEST** | A new instance is created for every incoming HTTP request. | Multi-tenant apps or accessing request-specific data like a JWT user ID. |
| **TRANSIENT** | A fresh instance is created for every component that injects it. | Stateful services that should not share data between different components. |

### How does NestJS automatically resolve dependencies?

NestJS resolves dependencies through a process involving a **Dependency Graph**:
**Scanning**: During bootstrap, Nest identifies all classes decorated with `@Injectable()`.
**Metadata Analysis**: It looks at the types defined in a class's constructor (e.g., `constructor(private service: UsersService)`).
**Graph Building**: Nest creates a "map" of which classes depend on which services.
**Instantiation**: The IoC container creates the instances in the correct order and "injects" them into the classes that need them.
