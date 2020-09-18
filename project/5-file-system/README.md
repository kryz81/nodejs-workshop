### Sprint 5 - import/export data to external systems

---

**To Do**
1. On employee creation save data to a file in ”out” directory
2. Check if file already exists, if it exists emit an error
3. Periodically check for files in “in” directory
4. If a new file appears in "in", read it and insert user into database
5. Remove already imported file

---

**Step 1**

Create file operations service in the utils module. Don't forger to register it in the module definition
```
filesystem.service.ts
```

Add "write" method. The method should return a promise! Don't use callbacks.  
You have three possibilities:
1. Wrap code into a promise and return the promise
2. Promisify the fs.writeFile function using utils.promisify
3. Use the promise part of the "fs" module

---

**Step 2**

Import the file operations service to the employees service and call it
after user creation. Saved data should be a string, stringify it with JSON.stringify.
All files should be saved in **out** directory in the application root.
