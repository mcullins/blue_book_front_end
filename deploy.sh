#/bin/bash

#upload files
aws s3 cp ./dist s3://dem-bb-angular --recursive --acl public-read
