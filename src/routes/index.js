import StudentRoute from './StudentRoute';
const routes = (app) => {
  app.use('/api/v1/user', StudentRoute);
};

export default routes;
