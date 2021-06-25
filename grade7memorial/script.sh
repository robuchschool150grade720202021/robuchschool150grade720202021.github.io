for i in $(seq 1 20)
do
    sed -i.backup s/"1_"/""/g $i.html
done
