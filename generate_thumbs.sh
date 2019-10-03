#!/bin/bash
for imgdir in src/assets/images/*; do
  mkdir -p $imgdir/_thumbs
  cp -a $imgdir/*.{jpg,png} $imgdir/_thumbs/ 2>/dev/null
  mogrify -resize 370x $imgdir/_thumbs/*
done
