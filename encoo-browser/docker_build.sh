#bash
docker run --rm -ti \
 --env ELECTRON_CACHE="/root/.cache/electron" \
 --env ELECTRON_BUILDER_CACHE="/root/.cache/electron-builder" \
 -v ${PWD}:/project \
 -v /mnt/c/Users/xckai/.cache:/root/.cache \
 electronuserland/builder