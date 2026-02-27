# nestjs-unit-tests.md

## 9.6 Writing Unit Tests for Services & Controllers in NestJS

### Why is it important to test services separately from controllers?

Separating these tests enforces the **Single Responsibility Principle**. 
* **Controllers** should only be responsible for receiving HTTP requests, validating the payload (DTOs), passing data to the service, and returning the correct HTTP status code. 
* **Services** should handle the actual heavy lifting (business logic, database calls, calculations). 
Testing them separately means that if a test fails, you know exactly where the bug is. If the controller test fails, your routing or validation is broken. If the service test fails, your core business logic is flawed.

### How does mocking dependencies improve unit testing?

Mocking creates a "sterile" testing environment. By replacing real databases, external APIs, or other services with fake versions (mocks), you achieve three things:
1. **Speed:** Tests run in milliseconds because there is no network latency.
2. **Isolation:** A test will never fail just because a third-party API is down or the local database wasn't seeded correctly. 
3. **Safety:** You can test destructive actions (like `user.delete()`) without accidentally wiping real data from a development database.

### What are common pitfalls when writing unit tests in NestJS?

* **Dependency Resolution Errors:** Forgetting to provide a mock for every single injected dependency in the `Test.createTestingModule` block. If a service requires a Logger and a Database, omitting either will crash the test before it starts.
* **Over-Mocking:** Creating mocks that are so rigid or detached from reality that the test basically just tests the mock itself, leading to a false sense of security.
* **Ignoring Asynchronous Code:** Forgetting to `await` a service call in the test assertion, causing the test to pass instantly before the actual error has a chance to be thrown.

### How can you ensure that unit tests cover all edge cases?

You must test beyond the "Happy Path" (where everything goes perfectly). You ensure coverage by deliberately writing tests for "Sad Paths":
* **Boundary Testing:** What happens if an empty array or `null` is passed to the service?
* **Error Handling:** Use `mockRejectedValueOnce()` to force your fake database to throw an error, then verify that your service catches it and throws the correct NestJS `HttpException`.
* **Coverage Tools:** Running Jest with the `--coverage` flag generates a report showing exactly which lines of code were never executed during the test suite, highlighting missing edge cases.

### Jest Sample Test Coverage

![OUTPUT](nestjs-unit-tests_9_6_test_cov.png)
