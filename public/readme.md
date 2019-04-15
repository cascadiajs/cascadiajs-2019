# Automagical `public` directory

The `public` directory is a great place to add (compiled) JS and CSS, images, gifs, or any other files you want to publicly accessible.

Each time your app deploys, the contents of this folder will automatically be published to S3 and our CDN.


## Use caution!

The full contents of this folder public will be copied to S3 with each deploy, overwriting any existing S3 files with the same name.


## Note

You should feel free to delete this file and directory!
