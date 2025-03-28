#!/bin/bash

# install
# sudo npm install --save-dev jsdoc-to-markdown -g

cp _README.md README.md
jsdoc2md jqgrid_utils.js >> README.md
