import nextSession from 'next-session';

export default nextSession({
  // autoCommit: false,
  // cookie: {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === 'production',
  //   maxAge: 60 * 60 * 24 * 7,
  // },
});