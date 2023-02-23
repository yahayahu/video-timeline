#!/bin/bash
tsc -p tsconfig.esm.json

MAIN_STYLES="import '..\/styles\/index.scss';"

sed -i -e "s/${MAIN_STYLES}//g" dist/esm/timeline.js
