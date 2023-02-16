import { getInstallURL } from '../../helpers/zoom-api';
import { zoomApp } from '../../helpers/config';
import getSession from '../../helpers/session';
import { withIronSessionApiRoute } from 'iron-session/next';

export default withIronSessionApiRoute(
  async function handler(req, res) {
    await getSession(req, res);
    const { url, state, verifier } = getInstallURL();
    req.session.state = state;
    req.session.verifier = verifier;
    await req.session.save();
    console.log(req.session);
    res.redirect(url.href);
  },
  {
    cookieName: 'zoom_session',
    password: zoomApp.sessionSecret,
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  }
);
