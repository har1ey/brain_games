install: 
	npm install

run:
	npm run babel-node -- src/bin/brain-games.js

build:
	npm run build

test:
	npm test

publish:
	npm publish

.PHONY: test
