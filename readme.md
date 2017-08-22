
### HOW TO RUN

```
npm install
npm run dev
```

To avoid Routing issues, run locally in a server:

With webpack, port 8080:

```
npm run server

```

With python, port 8000:

```
cd src/client/public 
python -m SimpleHTTPServer

```

For anchors to work and not stumble with React HashRouter, the project implements (React Router Hash Link)[https://github.com/rafrex/react-router-hash-link]. Every link that uses an anchor, should be declared as follows:

```
import { HashLink as Link } from 'react-router-hash-link';
<Link to="#some-anchor-id"> Name of Link </Link>
```