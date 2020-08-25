### Sprint 1 - create a Nest.js application and "Employees" module

---

**To Do**
1. Bootstrap a new NestJS Application
2. Run the application and open the main route in browser
3. Create a new module „Employees“ and add "/employees" route returning an empty array
4. Build the production version and run it directly with Node.js

---

**Step 1**

To create a Nest.js application we will use Nest CLI tool. Install it globally:

```shell script
npm i -g @nestjs/cli
```

Create a new application:

```commandline
nest new api
```

---

**Step 2**

Run application in development mode:

```commandline
npm run start:dev
```

Open http://localhost:3000 in the browser

---

**Step 3**

Create a new module and controller:

```commandline
nest generate module Employees
nest generate controller Employees
```

In Employees Controller create a new function and add route "/employees". Return an empty array from the function.

---

**Step 4**

Stop the application. To create a production distribution run:

```commandline
npm run build
```

Run the built application:

```commandline
node dist/main.js
```
