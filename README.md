# `eth-ens-shellscripts`

You need to patch dnssecoracle.js package (it does not contain the necessary published dist on npm)

unzip the folder in the repo (contains the dist)

- 1: yarn install

- 2: go to  https://github.com/sambacha/dnssecoraclejs/

- 3: in `output` take the entire folder and put it in `node_modules/@ensdomains/dnssecoracle/dist/`

- 4: node src/index.js


