.PHONY: deploy

deploy:
	git pull
	npm install
	npm run build
	rm -rf ./docs
	cp -R build ./docs

convert-donors-csv:
	npx gulp convertToJson
