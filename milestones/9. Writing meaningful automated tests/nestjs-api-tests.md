# nestjs-api-tests.md

## 9.8 Using Jest & Supertest for API Testing in NestJS 

### How does Supertest help test API endpoints?

Supertest acts as a virtual HTTP client. It allows you to simulate real HTTP requests (like `GET`, `POST`, `PATCH`) against your NestJS application without actually having to start up the server on a live port. It catches the HTTP response and provides clean methods to assert the status codes (e.g., `.expect(201)`), headers, and JSON body payloads.

### What is the difference between unit tests and API tests?

* **Unit Tests** call internal class methods directly (e.g., `service.create(dto)`) to ensure the raw logic works in isolation. They bypass the network entirely.
* **API Tests (Integration/E2E)** test the entire request lifecycle. They send an HTTP request to an endpoint (e.g., `POST /habits`) and verify that the Controller, Validation Pipes (DTOs), Authentication Guards, and Services all work together properly to format the final HTTP response.

### Why should authentication be mocked in integration tests?

If authentication is not mocked, every single test run would require a real network request to Auth0 to generate a fresh, valid JSON Web Token (JWT). This makes the test suite incredibly slow, introduces flakiness (tests will fail if your internet drops or Auth0 is down), and requires storing sensitive test-user credentials. By mocking the `AuthGuard`, we can instantly simulate a successfully authenticated user.

### How can you structure API tests to cover both success and failure cases?

You structure them using organized `describe` blocks based on the endpoints, grouping "Happy Paths" and "Sad Paths" together. 
For example, under `describe('POST /habits')`:
* **Success Case:** `it('should return 201 Created given valid data')`
* **Failure Case 1:** `it('should return 400 Bad Request if the title is missing')` (Testing the Validation Pipe)
* **Failure Case 2:** `it('should return 401 Unauthorized if no token is provided')` (Testing the AuthGuard)

### Jest Sample Test Output

![OUTPUT](nestjs-unit-tests_9_8_jestsuccessoutput.png)

### Jest Sample Test Code

![OUTPUT](nestjs-unit-tests_9_8_sampletestcode.png)
