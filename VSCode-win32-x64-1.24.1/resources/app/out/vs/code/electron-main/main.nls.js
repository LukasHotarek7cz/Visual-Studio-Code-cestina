/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define(
	"vs/code/electron-main/main.nls"
	,{
		"vs/base/common/keybindingLabels":[
			"Ctrl"
			,"Shift"
			,"Alt"
			,"Windows"
			,"Control"
			,"Shift"
			,"Alt"
			,"Command"
			,"Control"
			,"Shift"
			,"Alt"
			,"Windows"
		]
		,"vs/base/common/severity":["Error","Warning","Info"]
		,"vs/code/electron-main/auth":["Proxy Authentication Required","The proxy {0} requires authentication."]
		,"vs/code/electron-main/logUploader":[
			"Invalid log uploader endpoint"
			,"Uploading..."
			,"Upload successful! Log file ID: {0}"
			,"You are about to upload your session logs to a secure Microsoft endpoint that only Microsoft's members of the VS Code team can access."
			,"Session logs may contain personal information such as full paths or file contents. Please review and redact your session log files here: '{0}'"
			,"By continuing you confirm that you have reviewed and redacted your session log files and that you agree to Microsoft using them to debug VS Code."
			,"Please run code with '--upload-logs={0}' to proceed with upload","Error posting logs: {0}","Error posting logs. Got {0} — {1}","Error parsing response"
			,"Error zipping logs: {0}"],"vs/code/electron-main/main":["Another instance of {0} is running but not responding","Please close all other instances and try again."
			,"A second instance of {0} is already running as administrator.","Please close the other instance and try again."
			,"&&Close"
		]
		,"vs/code/electron-main/menus":[
			"Soubor"/*"&&File"*/
			,"Výběr"/*,"&&Edit"*/
			,"&&Selection"
			,"&&View"
			,"&&Go"
			,"&&Debug"
			,"Window"
			,"Nápověda"/*,"&&Help"*/
			,"&&Tasks"
			,"New &&Window"
			,"About {0}"
			,"Services"
			,"Hide {0}"
			,"Hide Others"
			,"Ukázat Vše"/*,"Show All"*/
			,"Odejit {0}"/*,"Quit {0}"*/
			,"Nový Soubor"/*,"&&New File"*/
			,"Nový Soubor"/*,"&&New File"*/
			,"Otevřít..."/*,"&&Open..."*/
			,"Otevřít..."/*,"&&Open..."*/
			,"Otevřít Pracovní Prostor..."/*,"Open Wor&&kspace..."*/
			,"Otevřít Pracovní Prostor..."/*,"Open Wor&&kspace..."*/
			,"Open &&Folder..."
			,"Open &&Folder..."
			,"&&Open File..."
			,"&&Open File..."
			,"Open &&Recent"
			,"Save Workspace As..."
			,"A&&dd Folder to Workspace..."
			,"&&Save"
			,"Uložit Jako..."/*,"Save &&As..."*/
			,"Save A&&ll"
			,"Auto Save"
			,"New &&Window"
			,"Re&&vert File"
			,"Clos&&e Window"
			,"Close &&Workspace"
			,"Close &&Folder"
			,"&&Close Editor"
			,"E&&xit"
			,"&&Settings"
			,"&&Keyboard Shortcuts"
			,"&&Keymap Extensions"
			,"User &&Snippets"
			,"&&Color Theme"
			,"File &&Icon Theme"
			,"&&Preferences"
			,"&&Reopen Closed Editor"
			,"&&More..."
			,"&&Clear Recently Opened"
			,"&&Undo"
			,"&&Redo"
			,"Cu&&t"
			,"&&Copy"
			,"&&Paste"
			,"&&Undo"
			,"&&Redo"
			,"Cu&&t"
			,"&&Copy"
			,"&&Paste"
			,"&&Find"
			,"&&Replace"
			,"Find &&in Files"
			,"Replace &&in Files"
			,"Emmet: E&&xpand Abbreviation"
			,"E&&mmet..."
			,"&&Toggle Line Comment"
			,"Toggle &&Block Comment"
			,"Switch to Alt+Click for Multi-Cursor"
			,"Switch to Cmd+Click for Multi-Cursor"
			,"Switch to Ctrl+Click for Multi-Cursor"
			,"Přidat Kurzor Nahorů"/*,"&&Add Cursor Above"*/
			,"Přidat kurzor Dolů"/*,"A&&dd Cursor Below"*/
			,"Přidejte Kurzory na Konce Řádků"/*,"Add C&&ursors to Line Ends"*/
			,"Přidat Další Výskyt"/*,"Add &&Next Occurrence"*/
			,"Přidat Předchozí Výskyt"/*,"Add P&&revious Occurrence"*/
			,"Vybrat všechny Výskyty"/*,"Select All &&Occurrences"*/
			,"&&Copy Line Up"
			,"Co&&py Line Down",
			"Mo&&ve Line Up",
			"Move &&Line Down","&&Select All","&&Select All","&&Expand Selection"
			,"&&Shrink Selection","&&Explorer","&&Search","S&&CM","&&Debug"
			,"E&&xtensions","&&Output","De&&bug Console","&&Integrated Terminal"
			,"&&Problems"
			,"Příkazová Paleta..."/*,"&&Command Palette..."*/
			,"Otevři Pohled..."/*,"&&Open View..."*/
			,"Přepnout na Celou Obrazovku"/*,"Toggle &&Full Screen"*/
			,"Přepnout Zen Režim"/*,"Toggle Zen Mode"*/
			,"Toggle Centered Layout","Toggle Menu &&Bar"
			,"Split &&Editor","Toggle Editor Group &&Layout","&&Toggle Side Bar"
			,"&&Move Side Bar Right","&&Move Side Bar Left"
			,"Toggle &&Panel","&&Hide Status Bar","&&Show Status Bar","Hide &&Activity Bar","Show &&Activity Bar"
			,"Toggle &&Word Wrap","Toggle &&Minimap","Toggle &&Render Whitespace","Toggle &&Control Characters"
			,"&&Zoom In"
			,"Zoom O&&ut","&&Reset Zoom","&&Back","&&Forward"
			,"&&Next Editor","&&Previous Editor","&&Next Used Editor in Group"
			,"&&Previous Used Editor in Group","Switch &&Editor","&&First Group","&&Second Group","&&Third Group"
			,"&&Next Group","&&Previous Group","Switch &&Group","Go to &&File...","Go to &&Symbol in File..."
			,"Go to Symbol in &&Workspace...","Go to &&Definition"
			,"Go to &&Type Definition","Go to &&Implementation","Go to &&Line..."
			,"&&Start Debugging","Start &&Without Debugging","&&Stop Debugging","&&Restart Debugging"
			,"Open &&Configurations","Add Configuration...","Step &&Over"
			,"Step &&Into","Step O&&ut","&&Continue","Toggle &&Breakpoint"
			,"&&Conditional Breakpoint...","Inline Breakp&&oint","&&Function Breakpoint...","&&Logpoint..."
			,"&&New Breakpoint"
			,"Enable All Breakpoints","Disable A&&ll Breakpoints"
			,"Remove &&All Breakpoints","&&Install Additional Debuggers..."
			,"Minimize","Zoom","Bring All to Front","Switch &&Window...","Show Previous Tab"
			,"Show Next Tab"
			,"Move Tab to New Window","Merge All Windows","&&Toggle Developer Tools","Accessibility &&Options"
			,"Open &&Process Explorer","Report &&Issue","&&Welcome","&&Interactive Playground","&&Documentation"
			,"&&Release Notes"
			,"&&Keyboard Shortcuts Reference","Introductory &&Videos","&&Tips and Tricks","&&Join us on Twitter"
			,"&&Search Feature Requests","View &&License","&&Privacy Statement","&&About","&&Run Task..."
			,"Run &&Build Task..."
			,"Show Runnin&&g Tasks...","R&&estart Running Task...","&&Terminate Task...","&&Configure Tasks..."
			,"Configure De&&fault Build Task...","Accessibility Options","Check for Updates..."
			,"Checking For Updates..."
			,"Download Available Update"
			,"Downloading Update..."
			,"Install Update..."
			,"Installing Update..."
			,"Restart to Update..."
		]
		,"vs/code/electron-main/window":["You can still access the menu bar by pressing the Alt-key."]
		,"vs/code/electron-main/windows":[
			"OK","Path does not exist"
			,"The path '{0}' does not seem to exist anymore on disk."
			,"&&Reopen"
			,"&&Keep Waiting"
			,"&&Close"
			,"The window is no longer responding"
			,"You can reopen or close the window or keep waiting."
			,"&&Reopen"
			,"&&Close","The window has crashed"
			,"We are sorry for the inconvenience! You can reopen the window to continue where you left off."
			,"Otevřít"/*,"Open"*/
			,"Otevřít Složku"/*,"Open Folder"*/
			,"Otevřít Soubor"/*,"Open File"*/
			,"OK","Unable to save workspace '{0}'"
			,"The workspace is already opened in another window. Please close that window first and then try again."
			,"&&Open"
			,"Open Workspace"
			,"&&Save"
			,"Do&&n't Save"
			,"Cancel"
			,"Do you want to save your workspace configuration as a file?"
			,"Save your workspace if you plan to open it again."
			,"&&Save"
			,"Save Workspace"
		]
		,"vs/platform/configuration/common/configurationRegistry":[
			"Default Configuration Overrides"
			,"Configure editor settings to be overridden for {0} language."
			,"Configure editor settings to be overridden for a language."
			,"Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution."
			,"Cannot register '{0}'. This property is already registered."
		]
		,"vs/platform/dialogs/common/dialogs":["...1 additional file not shown","...{0} additional files not shown"]
		,"vs/platform/dialogs/node/dialogService":["Cancel"]
		,"vs/platform/environment/node/argv":[
			"Arguments in `--goto` mode should be in the format of `FILE(:LINE(:CHARACTER))`."
			,"Compare two files with each other."
			,"Add folder(s) to the last active window."
			,"Open a file at the path on the specified line and character position."
			,"Force to open a new window."
			,"Force to open a file or folder in the last active window."
			,"Wait for the files to be closed before returning."
			,"The locale to use (e.g. en-US or zh-TW)."
			,"Specifies the directory that user data is kept in. Can be used to open multiple distinct instances of Code."
			,"Print version."
			,"Print usage."
			,"Set the root path for extensions."
			,"List the installed extensions."
			,"Show versions of installed extensions, when using --list-extension."
			,"Installs an extension."
			,"Uninstalls an extension.","Enables proposed API features for an extension."
			,"Print verbose output (implies --wait)."
			,"Log level to use. Default is 'info'. Allowed values are 'critical', 'error', 'warn', 'info', 'debug', 'trace', 'off'."
			,"Print process usage and diagnostics information.","Start with the 'Developer: Startup Performance' command enabled."
			,"Run CPU profiler during startup"
			,"Disable all installed extensions."
			,"Allow debugging and profiling of extensions. Check the developer tools for the connection URI."
			,"Allow debugging and profiling of extensions with the extension host being paused after start. Check the developer tools for the connection URI."
			,"Disable GPU hardware acceleration."
			,"Uploads logs from current session to a secure endpoint."
			,"Max memory size for a window (in Mbytes)."
			,"Usage"
			,"options"
			,"paths"
			,"To read output from another program, append '-' (e.g. 'echo Hello World | {0} -')"
			,"To read from stdin, append '-' (e.g. 'ps aux | grep code | {0} -')"
			,"Options"
			,"Extensions Management"
			,"Troubleshooting"
		]
		,"vs/platform/extensionManagement/common/extensionManagement":[
			"Extensions"
			,"Preferences"
		]
		,"vs/platform/extensionManagement/node/extensionGalleryService":["Unable to download because the extension compatible with current version '{0}' of VS Code is not found."]
		,"vs/platform/extensions/node/extensionValidator":[
			"Could not parse `engines.vscode` value {0}. Please use, for example: ^1.22.0, ^1.22.x, etc."
			,"Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions before 1.0.0, please define at a minimum the major and minor desired version. E.g. ^0.10.0, 0.10.x, 0.11.0, etc."
			,"Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions after 1.0.0, please define at a minimum the major desired version. E.g. ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc."
			,"Extension is not compatible with Code {0}. Extension requires: {1}."
		]
		,"vs/platform/history/electron-main/historyMainService":["New Window","Opens a new window","Recent Workspaces","{0} {1}","Code Workspace"]
		,"vs/platform/issue/electron-main/issueService":["Issue Reporter","Process Explorer"]
		,"vs/platform/request/node/request":[
			"HTTP"
			,"The proxy setting to use. If not set will be taken from the http_proxy and https_proxy environment variables"
			,"Whether the proxy server certificate should be verified against the list of supplied CAs."
			,"The value to send as the 'Proxy-Authorization' header for every network request."
		]
		,"vs/platform/telemetry/common/telemetryService":["Telemetry","Enable usage data and errors to be sent to Microsoft."]
		,"vs/platform/update/node/update.config.contribution":["Update","Configure whether you receive automatic updates from an update channel. Requires a restart after change.","Enables Windows background updates."]
		,"vs/platform/windows/electron-main/windowsService":["Version {0}\nCommit {1}\nDate {2}\nShell {3}\nRenderer {4}\nNode {5}\nArchitecture {6}","OK","&&Copy"]
		,"vs/platform/workspaces/common/workspaces":["Code Workspace","Untitled (Workspace)","{0} (Workspace)","{0} (Workspace)"]
	}
);















//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/24f62626b222e9a8313213fb64b10d741a326288/core/vs\code\electron-main\main.nls.js.map












