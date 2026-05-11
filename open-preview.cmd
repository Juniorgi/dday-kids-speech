@echo off
cd /d "%~dp0"
echo Building preview...
call npm.cmd run build
if errorlevel 1 (
  echo.
  echo Build failed. Press any key to close.
  pause > nul
  exit /b 1
)

echo.
echo Opening preview at http://127.0.0.1:4173
start "" http://127.0.0.1:4173
node preview-server.mjs
