#!/usr/bin/env bash
#-------------------------------------------------------------------------------
#  Copyright 2019 Pax, Schweizerische Lebensversicherungs-Gesellschaft AG
#
#  Licensed under the Pax License, Version 1.0 (the "License");
#-------------------------------------------------------------------------------
#
# @Description
# build the styleguide distribution
#
#-------------------------------------------------------------------------------

# clean up distribution
npm install
npm run clean
mkdir -p static/pax

# build static stylesheet and generic CSS generation

# build web-components
cd web-components
npm install
npm run clean
npm run export.docs
#tar cf - dist | (cd ../distribution;tar xf -)
cd ..

npm run build-storybook

# create a distribution file
#tar cvfz dist.tgz distribution/
