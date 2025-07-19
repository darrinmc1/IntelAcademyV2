@echo off
echo Building static export...
call npm install
call npm run build
echo.
echo Static export complete! Files are in the "out" directory.
echo You can deploy these files to any static hosting service.
