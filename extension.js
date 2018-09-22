let vscode = require('vscode'),
    opener = require('opn');

function activate(context) {
    let disposable = vscode.commands.registerCommand('xiaoletao.openInLocalWeb', function (e) {
        const preferences = vscode.workspace.getConfiguration('local-web-opener');
        const pathPatten = preferences.get('pathPatten');
        const URLPatten = preferences.get('URLPatten');
        var URL = e._fsPath.replace(pathPatten, URLPatten);
        opener(URL);
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;
