SHELL=/bin/bash -o pipefail
BUILD_PRINT = \e[1;34mSTEP:

install:
	@ echo -e "$(BUILD_PRINT)Installing the dev environment requirements$(END_BUILD_PRINT)"
	@ sudo apt install npm
	@ mkdir -p ~/.npm
	@ npm config set prefix ~/.npm
	@ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
	@ nvm list-remote
	@ nvm install lts/gallium
	@ source ~/.bashrc
	@ npm i -g @antora/cli@3.1 @antora/site-generator@3.1

# Optionally add the line below to ~/.bashrc
# export PATH="$PATH:$HOME/.npm/bin"

build-site:
	@ echo -e "$(BUILD_PRINT)Build site$(END_BUILD_PRINT)"
	@ npx antora --fetch antora-playbook.yml


