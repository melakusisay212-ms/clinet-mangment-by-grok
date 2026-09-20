# SARA Salon Manager

Real Android/Capacitor project for an Ethiopian women's hair salon. Local-first SQLite database, Ethiopian-calendar-first UI, client visit history, income tracking, reminders, independent leaderboards, insights and themes.

## Build locally

```bash
npm install
npm run build
npx cap add android
node scripts/setup-native-plugin.cjs
npx cap sync android
cd android
./gradlew assembleDebug
```

## GitHub Actions

Push to `main` or manually run **Build SARA Salon Manager APK**. The workflow creates `app-debug.apk` and uploads it as the `sara-salon-manager-debug-apk` artifact.

## Calendar

User-facing dates are Ethiopian Calendar. Database dates are ISO/Gregorian. The date picker supports all 13 Ethiopian months and correctly handles 5/6-day Pagume.

## Native communication

Call uses `tel:` and SMS uses the Android `sms:` intent with an editable prepared message. The app never silently sends SMS.
