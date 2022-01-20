import { app, ipcMain, Menu } from 'electron';
import { AppWindow } from './app-window';

export class ApplicationBuilder {
  public static build() {
    return Application.getInstance();
  }
}
export class Application {
  public static getInstance() {
    return new Application();
  }
  public appWin: AppWindow;
  public async start() {
    await app.whenReady();
    this.appWin = new AppWindow();
    this.appWin.show();
    app.on('window-all-closed', function() {
      if (process.platform !== 'darwin') app.quit();
    });
  }
}
