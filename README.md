# YAML Contract Validator

A local Visual Studio Code extension that validates YAML contract files against a JSON schema.

## 🔍 Features

- Automatically validates YAML files that match:
  - `**/contract.yaml`
  - `**/contract.yml`
  - `**/contract/*.yaml`
  - `**/contract/*.yml`
  - `**/contracts/*.yaml`
  - `**/contracts/*.yml`
  - `**/*.contract.yaml`
  - `**/*.contract.yml`
- Supports custom file matching patterns via `.contract-validator.yaml`.
- Ensures contract files follow a strict structure defined in a local JSON schema.

## 📦 Installation Guide


### 1. Clone this repository

```bash
git clone https://github.com/your-org/yaml-contract-validator.git
cd yaml-contract-validator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Package the extension

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

### 4. Install the extension in VS Code

```bash
code --install-extension yaml-contract-validator-0.0.1.vsix
```

### 6. Install YAML from Red Hat
https://marketplace.visualstudio.com/items/?itemName=redhat.vscode-yaml

### 7. Restart VS Code
```
Cmd+Shift+P → Reload Window
```

### 8. Custom Configuration
To customize which files should be validated, create a .contract-validator.yaml file in the root of your workspace:

```
fileMatch:
  - "**/*.contract.yaml"
```
This overrides the default match patterns.

Restart VS Code
```
Cmd+Shift+P → Reload Window
```


Happy validating!
