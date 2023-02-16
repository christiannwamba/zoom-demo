import { getDeeplink, getToken } from '../../helpers/zoom-api';
import { withIronSessionApiRoute } from 'iron-session/next';
import { zoomApp } from '../../helpers/config';

export default withIronSessionApiRoute(
  async function handler(req, res) {
    console.log(req.session);

    try {
      const code = req.query.code;
      const verifier = req.session.verifier;
      // const state = req.session.state;

      req.session.state = null;
      req.session.verifier = null;

      // get Access Token from Zoom
      const { access_token: accessToken } = await getToken(code, verifier);

      // fetch deeplink from Zoom API
      const deeplink = await getDeeplink(accessToken);

      // redirect the user to the Zoom Client
      res.redirect(deeplink);
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  },
  {
    cookieName: 'zoom_session',
    password: zoomApp.sessionSecret,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  }
);
