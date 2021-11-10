.PHONY: build

include .env.production

build: convert-csv
	yarn run build

convert-csv: node_modules csv/listings.csv
	npx gulp convertToJson

node_modules:
	yarn install

csv/listings.csv:
	mkdir csv
	curl -L "https://docs.google.com/spreadsheets/d/e/${REACT_APP_SHEET}/pub?output=csv" > csv/listings.csv

clean:
	rm -rf build
	rm -rf node_modules
	rm -rf csv
