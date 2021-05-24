#!/usr/bin/env bash

NODE_ENV=production yarn build
mv build/public/ build-backup
rm -rf build
mv build-backup build
