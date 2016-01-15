import 'source-map-support/register';

import 'babel-polyfill';

console.log([1,2,3].map(x => x * x));

throw new Error('Test!'); // line 8
