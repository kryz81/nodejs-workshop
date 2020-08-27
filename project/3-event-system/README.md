### Sprint 3 - inform external systems about employee creation 

---

**To Do**
1. On employee creation send information to company internal systems (ERP, Profiler). For now use dummy proxies.
2. It should be easy to add further systems. Do not bloat the employees service with multiple proxy calls.
3. Use Node.js Event System to create an event emitter, register subscribers and emit an event on employee creation. 

---

**Step 1**

Add all routes to the employees controller.

---

**Step 2**

We will use lowDB to mock real database. lowDB is a json database and stores data in a local file.

Install lowDB and declarations for Typescript:
```
npm i lowDB
npm i -D @types/lowdb
```

Copy db.json, lowdb-adapter.ts and employee.model.ts to the employees module.

---

**Step 3**

Create the employees service and use it in the controller.

```
nest generate service Employees
```

---

**Step 4**

Create repository interface and lowdb repository, 
import lowdb-adapter.ts and implement all actions in the repository.
Register adapter and repository in the module declarations. 

---

**Step 5**

Generate unique ID on employee creation.

Install UUID:
```
npm i uuid
```

Create "Utils" module, implement "generate id" service, export it, 
import it in the "employees" module and use in the employees service.

---

**Step 6**

Add validation to the "create employee" route. We will use NestJS validation pipeline.

Enable NestJS global validation in main.ts:
```
app.useGlobalPipes(new ValidationPipe({ transform: true }));
```

We need two additional non-NestJS packages:
```
npm i class-validator class-transformer
```

class-validator will validate our DTOs, class transformer will transform JSON from reuqest body to DTO instance.

Add validation rules, example:
```
@IsNotEmpty()
@IsString()
firstname: string;
```

---

**Step 7**

Add DTO and validation to the PUT route.

---

**Step8**

BONUS: add filtering feature in the "/employees" route. Use query params for filtered fields.
