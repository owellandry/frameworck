// Importamos los módulos necesarios
const vscode = require('vscode');

// Esta es la función que se llamará cuando se active la extensión
function activate(context) {
  console.log('La extensión "code-wc" ha sido activada.');

  // Registramos un comando que se puede ejecutar desde el menú o con una combinación de teclas
  let disposable = vscode.commands.registerCommand('code-wc.saludar', function () {
    // Mostramos un mensaje de saludo en un cuadro de diálogo
    vscode.window.showInformationMessage('Hola, mundo!');
  });

  // Registramos el comando para que esté disponible
  context.subscriptions.push(disposable);
}

// Esta es la función que se llamará cuando se desactive la extensión
function deactivate() {
  console.log('La extensión "code-wc" ha sido desactivada.');
}

// Exportamos las funciones `activate` y `deactivate` para que puedan ser utilizadas por VS Code
module.exports = {
  activate,
  deactivate
};
