# First run

```console
npm i -g typescript
npx tsc --version // To see if everything is fine
```

create an index.ts file

Then compile typescript with
This will create a brand new file index.js (with the transpiled code) which can run on browser or Node.js

```console
tsc index.ts
```

# Compiler

We can pass options to the compile script but the better way is to create a tsconfig.json file to contain such configurations.

```json
{
	"compilerOptions": {
		"target": "ESNext", // Supports async code
		"watch": true, // Recompiles after save
		"lib": ["DOM", "ES2015"] // Could acces to dom and ES2015
	}
}
```

---

NOTE: if you get an error like "script execution not allowed..."

```console
Get-ExecutionPolicy -List
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ​
```
