install:
	npm install

run:
	npm run babel-node -- src/bin/brain-games.js

even:
	npm run babel-node -- src/bin/brain-even.js

calc:
	npm run babel-node -- src/bin/brain-calc.js

lint:
	npm run eslint -- src

build:
	npm run build

test:
	npm test

publish:
	npm publish

.PHONY: test
