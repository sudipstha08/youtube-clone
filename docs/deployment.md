## How to deploy to firebase ?
- npm install -g firebase-tools
- firebase login
- firebase init
- firebase deploy

NOTE − If you have used a default configuration, the public folder will be created and the index.html inside this folder will be the starting point of your app or you can customize the folder name ie `build` and configure it in `firebase.json`

## Other Firebase Commands
- firebase login --reauth
- firebase projects:list
- firebase use --add
- firebase deploy --token "$FIREBASE_TOKEN"


## REFERENCES
- https://firebase.google.com/docs/hosting/quickstart
- https://cloud.google.com/docs/authentication/client-libraries