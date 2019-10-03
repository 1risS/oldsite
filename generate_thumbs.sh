#!/bin/bash

dir=$1

mkdir -p $dir/_thumbs
cp -a $dir/*.{jpg,JPG,png,PNG} $dir/_thumbs/ 2>/dev/null
mogrify -resize 370x $dir/_thumbs/*
