### Sprint 9 - child process

---

**To Do**
1. Preparation step: in the "9-child-process" directory you will find "tool.js". Copy it to the application parent directory 
2. Create route ”report/:employeeId” in app module
3. Run external tool (tool.js) in separate process (use fork)
4. Send employee id to the tool
5. Get the output of the tool and send it in response
6. Use a service, do not directly create a process in the controller
7. Keep in mind that the external tool sometimes crashes (reason unknown), catch error and inform the user

---

**Step 1**

Copy tool.js to the application root directory

---

**Step 2**

```
@Get('report/:employeeId')
```

---

**Step 3**

Use "fork" to create a child process.

```
const child = fork(toolPath, { silent: true });
```

---

**Step 4**

Send employee id to the tool. Return promise and handle process management inside the promise.

```
child.send(...)
```

---

**Step 5**

```
child.on('message', () => {...})
```

---

**Step 6**

Create report.service.ts

---

**Step 7**

```
child.on('exit', (code, signal) => {...})
```

---
