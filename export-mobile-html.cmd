@echo off
cd /d "%~dp0"
echo Building single-file mobile preview...
call npm.cmd run build
if errorlevel 1 (
  echo.
  echo Build failed. Press any key to close.
  pause > nul
  exit /b 1
)

node export-single-html.mjs
echo.
echo Done. The shareable file is:
echo %~dp0share\dday-kids-speech-mobile-preview.html
echo.
pause
