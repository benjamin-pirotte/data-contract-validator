import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

export async function activate(context: vscode.ExtensionContext) {

  const defaultFileMatches = [
    `**/contract.yaml`,
    `**/contract.yml`,
    `**/contract/*.yaml`,
    `**/contract/*.yml`,
    `**/contracts/*.yaml`,
    `**/contracts/*.yml`,
    `**/*.contract.yaml`,
     `**/*.contract.yml`
  ];

  const workspaceFolders = vscode.workspace.workspaceFolders;
  const workspaceRoot = workspaceFolders?.[0]?.uri?.fsPath;

  let fileMatch = defaultFileMatches;

  // Load config if available
  if (workspaceRoot) {
    const configPath = path.join(workspaceRoot, '.contract-validator.yaml');
    if (fs.existsSync(configPath)) {
      try {
        const configContent = fs.readFileSync(configPath, 'utf-8');
        const config = yaml.load(configContent) as any;

        if (Array.isArray(config?.fileMatch)) {
          fileMatch = config.fileMatch;
          vscode.window.showInformationMessage('Contract Validator activated using patterns from contract_validator.yaml');
        } else {
          vscode.window.showWarningMessage('⚠️ "fileMatch" not found or invalid in contract_validator.yaml, using defaults.');
        }
      } catch (err) {
        vscode.window.showWarningMessage('⚠️ Failed to parse contract_validator.yaml, using defaults.');
      }
    } else {
      vscode.window.showInformationMessage('Contract Validator activated using default file match patterns.');
    }
  }

  const schemaUri = vscode.Uri.joinPath(context.extensionUri, 'schema', 'contract-schema.json');

  // Update the workspace YAML settings
  const config = vscode.workspace.getConfiguration();
  const yamlSchemas = config.get<{ [key: string]: string[] }>('yaml.schemas') || {};

  yamlSchemas[schemaUri.toString()] = fileMatch;

  await config.update('yaml.schemas', yamlSchemas, vscode.ConfigurationTarget.Workspace);

}

export function deactivate() {}
