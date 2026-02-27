# nestjs-mocking.md

## 9.7 Mocking Dependencies & Database Interactions in NestJS

### Why is mocking important in unit tests?

Mocking is essential for creating a controlled testing environment. When you unit test a function, you only want to evaluate the logic *inside* that specific function. If your service relies on a third-party API (like Auth0 or Stripe) or an email client, a real network request could fail, causing your test to fail even if your code is perfect. Mocking eliminates these variables, ensuring tests run reliably, safely, and in milliseconds.

### How do you mock a NestJS provider (e.g., a service in a controller test)?

You use the `@nestjs/testing` module to create a fake testing environment. Instead of passing the real service into the `providers` array, you use custom provider syntax with `provide` and `useValue`. 
For example, to mock a `HabitsService` inside a controller test:
```typescript
providers: [
  {
    provide: HabitsService,
    useValue: {
      create: jest.fn().mockResolvedValue({ id: 1, name: 'Read' }),
      findAll: jest.fn().mockResolvedValue([]),
    },
  },
]
