@echo off
echo Starting deployment...
echo.
echo 1. Deploying to Vercel...
vercel --prod
echo.
echo 2. After deployment completes, set up the environment variable:
echo    vercel env add RESEND_API_KEY
echo.
echo 3. Then redeploy with the environment variable:
echo    vercel --prod
echo.
echo Deployment script completed.