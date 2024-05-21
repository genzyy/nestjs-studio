# Build configuration
# -------------------

APP_NAME = `grep -m1 name package.json | awk -F: '{ print $$2 }' | sed 's/[ ",]//g'`
APP_VERSION = `grep -m1 version package.json | awk -F: '{ print $$2 }' | sed 's/[ ",]//g'`
GIT_REVISION = `git rev-parse HEAD`

PRETTIER_FILES_PATTERN = '{src,scripts}/**/*.{js,ts}' '**/*.md'
SCRIPTS_PATTERN = 'src/**/*.ts'

.PHONY: header
header:
	@echo "\033[34mEnvironment\033[0m"
	@echo "\033[34m---------------------------------------------------------------\033[0m"
	@printf "\033[33m%-23s\033[0m" "APP_NAME"
	@printf "\033[35m%s\033[0m" $(APP_NAME)
	@echo ""
	@printf "\033[33m%-23s\033[0m" "APP_VERSION"
	@printf "\033[35m%s\033[0m" $(APP_VERSION)
	@echo "\n"

# Commands

.PHONY: install
install: 
	yarn install

.PHONY: format
format:
	yarn lint

.PHONY: run
run:
	yarn start

.PHONY: gen-migration
gen-migration:
	yarn typeorm migration:generate $1 -d $2
