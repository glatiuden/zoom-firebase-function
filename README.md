## Obtain Zoom API Key & Secrets

- Obtain it from https://marketplace.zoom.us/develop/create?source=devdocs
- Create a new app under JWT
- Copy the API Key and Secrets

## Setting up the Firebase Functions
- Step 1: Clone this repository and run `firebase init functions`
  - Choose your firebase project. For types, choose JavaScript.
- Step 2: Set your API Key and Secrets in your Firebase Config

```
firebase functions:config:set zoom.api_key=your-api-key zoom.api_secret=your-api-secret
```

- Step 3: Verify that it's set properly by running:

```
firebase functions:config:get
```

- Step 4: Run `npm install`, or you can manually install them by running `npm i --save express cors body-parser axios jsonwebtoken`

- Step 5: Run `firebase deploy --only functions`, there shouldn't be any error. You can try follow a tutorial to understand how to call a Firebase function via your frontend.

- Misc: For simplicity, I have hardcoded all the meeting options. You may want to take in the options from your frontend. All you have to do is to take in a request body.
