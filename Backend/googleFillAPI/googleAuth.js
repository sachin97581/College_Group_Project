import dotenv from "dotenv";
dotenv.config();
import { google } from "googleapis";
import fs from "fs";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_AUTH_REDIRECT_URL; // use the same name as .env

if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
  console.warn("Google OAuth env vars missing:", {
    CLIENT_ID: !!CLIENT_ID,
    CLIENT_SECRET: !!CLIENT_SECRET,
    REDIRECT_URI: !!REDIRECT_URI,
  });
}

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

console.log("Google OAuth Redirect URI in use →", REDIRECT_URI);

// Function to generate the Google authorization URL
export const getAuthUrl = () => {
  const scopes = [
    "https://www.googleapis.com/auth/fitness.activity.read",
    "https://www.googleapis.com/auth/fitness.heart_rate.read",
  ];

  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: scopes,
  });
};

// Function to exchange authorization code for tokens
// export const getTokens = async (code) => {
//   const { tokens } = await oauth2Client.getToken(code);
//   oauth2Client.setCredentials(tokens);
//   return tokens;
// };

export const getTokens = async (code) => {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  // Save to file (for dev only)
  fs.writeFileSync("tokens.json", JSON.stringify(tokens, null, 2));

  return tokens;
};

// Export oauth2Client so other files can use it
export { oauth2Client };
