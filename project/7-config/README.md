### Sprint 7 - read configuration items from environment

---

**To Do**
1. Find candidates for environment variables
2. Create config file, read environment variables and export them as constants
3. Refactor code to use constants
4. Use dotenv package for easier management

---

**Step 1**

Find candidates for enviroment variables.

---

**Step 2**

Create config.ts in the application root, create needed variables there, read them
from process.env, export them and use it.

---

**Step 3**

Refactor code to use variables from config.ts.

---

**Step 4**

Install **dotenv** module

```
npm i dotenv
```

---

**Step 5**

Create .env and .env.dist files. Add .env file to .gitignore. Put all variables with values into .env.
Put all variables without value into .env.dist

---

**Step 6**

Load variables from .env

```
import { config } from 'dotenv';
config();
```
