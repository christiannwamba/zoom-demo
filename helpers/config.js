console.log(process.env.ZM_HOST)
export const zoomApp = {
  host: process.env.ZM_HOST || 'https://zoom.us',
  clientId: process.env.ZM_CLIENT_ID,
  clientSecret: process.env.ZM_CLIENT_SECRET,
  redirectUrl: process.env.ZM_REDIRECT_URL,
  sessionSecret: process.env.SESSION_SECRET,
};