# YAML Contract Validator

A local Visual Studio Code extension that validates YAML contract files against a JSON schema.

## 🔍 Features

- Automatically validates YAML files that match:
  - `*/contract.yaml`
  - `*/contract.yml`
  - `*/contract/*.yaml`
  - `*/contract/*.yml`
  - `*/contracts/*.yaml`
  - `*/contracts/*.yml`
- Ensures contract files follow a strict structure defined in a local JSON schema.

## 📦 Installation Guide

You can either download yaml-contract-validator-0.0.1.vsix file directly. In this case move to step 5.
Otherwise first follow steps from 1 to 4.

### 1. Clone this repository

```bash
git clone https://github.com/your-org/yaml-contract-validator.git
cd yaml-contract-validator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Compile the extension

```bash
npm run compile
```

### 4. Package the extension

Install the VS Code Extension CLI if not already installed:

```bash
npm install -g vsce
```

Then package the extension:

```bash
vsce package
```

This will generate a file like:

```
yaml-contract-validator-0.0.1.vsix
```

### 5. Install the extension in VS Code

```bash
code --install-extension yaml-contract-validator-0.0.1.vsix
```

### 6. Install YAML from Red Hat
https://marketplace.visualstudio.com/items/?itemName=redhat.vscode-yaml

### 7. Restart VS Code

Happy validating!
