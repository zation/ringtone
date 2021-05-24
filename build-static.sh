#!/usr/bin/env bash

NODE_ENV=production yarn build-static
mv build/public/ build-backup
mv build/.git build-backup/.git
rm -rf build
mv build-backup build
mv build/ringtone-demo build
rm -rf build/ringtone-demo
