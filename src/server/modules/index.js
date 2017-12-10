import entities from './entities';
// import auth from './auth';

import counter from './counter';
import post from './post';
import upload from './upload';

import mailer from './mailer';
import graphqlTypes from './graphqlTypes';
import apolloEngine from './apolloEngine';

import './debug';

import Feature from './connector';

// export default new Feature(entities, auth, counter, post, upload, mailer, graphqlTypes, apolloEngine);
export default new Feature(entities, counter, post, upload, mailer, graphqlTypes, apolloEngine);
