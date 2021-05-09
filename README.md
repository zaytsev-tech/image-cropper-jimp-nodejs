# image-cropper-jimp-nodejs
Script for cropping images. Works with jimp package

It's the simply script which the crop images to fit your parameters.
///////
In script using package JIMP to work with images.
**Install this package: npm istall jimp**
Possible types: jpeg, png, bmp, tiff, gif.
///////
In image-croppper.js use function "cropper".

Variable "directoryPath" - it's path to directory storing images.
1 argument of function - directoryPath;
2, 3 arguments of function - it's width and height cropping area;
4, 5 arguments of function - it's X, Y coordinates where to start trimming. Default 0, 0 that is left top angle.