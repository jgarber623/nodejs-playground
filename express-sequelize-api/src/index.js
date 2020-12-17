'use strict';

const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Server is running at http://localhost:${app.get('port')} in ${app.get('env')} mode...`);
});
