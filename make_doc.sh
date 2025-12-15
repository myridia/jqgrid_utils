#!/bin/bash

terser dist/jqgrid_utils.js  -o dist/jqgrid_utils.min.js -c -m

cp _README.md README.md
jsdoc2md jqgrid_utils.js >> README.md



