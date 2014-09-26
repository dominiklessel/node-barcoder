
REPORTER = spec

test: deps test-unit

deps:
	npm install

test-unit:
	@NODE_ENV=test ./node_modules/.bin/tape ./test/*js

.PHONY: deps test test-unit
