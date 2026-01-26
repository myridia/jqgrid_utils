#!/bin/bash
# Run this at the end of your dev cycle 
# sudo npm install --save-dev jsdoc-to-markdown -g 
#terser dist/jqgrid_utils.js  -o dist/jqgrid_utils.min.js -c -m

cp _README.md README.md
jsdoc2md jqgrid_utils.js >> README.md



