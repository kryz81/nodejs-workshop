### Sprint 4 - logging and authentication in one central place

---

**To Do**
1. Create the logger service in the utils module  
1.1 Create a NestJS middleware in the employees module and register it  
1.2 Call logger service in the middleware
2. Create a global middleware for token check    
2.1 Register it globally  
2.2 In the middleware check for request type and token  
2.3 Token should be stored in a request header  
2.4 Return "access denied" on invalid token

---

**Step 1**

Create employee logger middleware in the employees module.

---

**Step 2**

Register middleware in the employess module.
First you need to implement NestModule interface, then register the middleware
in the "configure" method:

```
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogEmployeeCreationMiddleware)
      .forRoutes({ path: 'employees', method: RequestMethod.POST });
  }
```

---

**Step 3**

Create "auth" middleware in the application root. It must be a function with three parameters:
"req", "res", "next". 

---

**Step 4**

In main.ts register global middleware.

---

**Step5**

In the middleware check for request type, if it's POST or PUT or DELETE check token. 
On invalid token break middleware chain and send 403 "access denied".
