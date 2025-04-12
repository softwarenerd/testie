import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
	console.log('Testie: Extension is now active.');

	let editMode: 'source' | 'visual' = 'source';
	await vscode.commands.executeCommand<string>('setContext', 'testie.editMode', editMode);

	let renderOnSave = false;
	await vscode.commands.executeCommand<boolean>('setContext', 'testie.renderOnSave', renderOnSave);

	context.subscriptions.push(vscode.commands.registerCommand('testie.toggleEditMode', async () => {
		editMode = editMode === 'source' ? 'visual' : 'source';
		await vscode.commands.executeCommand<boolean>('setContext', 'testie.editMode', editMode);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('testie.toggleRenderOnSave', async () => {
		renderOnSave = !renderOnSave;
		await vscode.commands.executeCommand<boolean>('setContext', 'testie.renderOnSave', renderOnSave);
	}));

	context.subscriptions.push(vscode.commands.registerCommand('testie.buttonWithLabel', () => {
		vscode.window.showInformationMessage('buttonWithLabel executed');
	}));
}

export function deactivate() {}
