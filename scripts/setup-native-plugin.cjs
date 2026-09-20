#!/usr/bin/env node
// Optional native bridge kept for future SMS features. The current SARA UI uses
// Android tel:/sms: intents so messages remain editable and are never silently sent.
const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');const android=path.join(root,'android');
if(!fs.existsSync(android)) process.exit(0);
const manifest=path.join(android,'app/src/main/AndroidManifest.xml');
if(fs.existsSync(manifest)){let s=fs.readFileSync(manifest,'utf8');if(!s.includes('android.permission.SEND_SMS'))s=s.replace('<application','<uses-permission android:name="android.permission.SEND_SMS" />\n    <application');fs.writeFileSync(manifest,s)}
