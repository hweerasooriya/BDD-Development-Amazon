#!/bin/bash
while IFS=, read -r col1 col2
do
    var="$var$col1;"
done < input_file.csv
echo ${var::-1}
