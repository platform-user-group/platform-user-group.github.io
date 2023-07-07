default:
	npm run dev

ci:
	npm ci

build:
	npm run build && npm run export && touch ./out/.nojekyll
