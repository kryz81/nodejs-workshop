### Sprint 3 - inform external systems about employee creation 

---

**To Do**
1. On employee creation send information to company internal systems (ERP, Profiler). For now use dummy proxies.
2. It should be easy to add further systems. Do not bloat the employees service with multiple proxy calls.
3. Use Node.js Event System to create an event emitter, register subscribers and emit an event on employee creation. 

---

**Step 1**

Create "proxies" directory in the employees module. Copy "erp.proxy.ts" and "profiler.proxy.ts" there.

---

**Step 2**

Create EventService in the utils module. The service extends Event Emitter.
Create two listeners for both proxies. Create "init" method and add listeners there.

---

**Step 3**



---

**Step 4**

Inject the service into the employees service and emit events after employee creation.

---

**Step 5**

Check if proxies are called
