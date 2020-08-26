### Sprint 2 - create employees endpoint

---

**To Do**
1. Create 5 routes:  
1.1 Get employees  
1.2 Get employee by ID  
1.3 Add a new employee  
1.4 Update employee  
1.5 Delete employee
  
2. Requirements:  
2.1 It hasn't been decided yet which database to use, we will use lowDB package to mock DB calls. 
All DB operations should be implemented in a repository not a service, so we can easily add another 
repository and switch later on to a real database.
2.2 For employee ID use UUID v4.    
2.3 For POST and PUT requests use NestJS DTO object to get body payload and add validation to each field.   
2.4 BONUS: Add "filter by field" option in the "/employees" route.  

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
