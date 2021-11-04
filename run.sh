#!/bin/bash
rm -vrf ./_notes/Public/CS/.git
rm -vrf ./_notes/Public/CS/.obsidian
rm -vrf *.lnk *.pdf *.pptx 
find . -name '*.jpg' -exec mv {} ./assets/img/ \;
find . -name '*.png' -exec mv {} ./assets/img/ \;
for file in ./assets/img/*; do mv "$file" `echo $file | tr ' ' '-'` ; done
find ./_notes/Public/ -name '*.md' | while read -r i; do  x=`echo -e "---\ntitle: Title\nnotetype : post\ndate : 07/10/2021\n---\n"; cat "$i"` && echo "$x" > "$i"; done
find ./_notes/Public/ -name '*.md' | while read -r i; do  x=`sed -E "s|[[][[]([^]]*)[ *]([^]]*)[ *]([^]]*)[ *]([^]]*)]]|[\1 \2 \3 \4](/Notes/notes/\1-\2-\3-\4.html)|g" "$i"` && echo "$x" > "$i"; done
find ./_notes/Public/ -name '*.md' | while read -r i; do  x=`sed -E "s|[[][[]([^]]*)[ *]([^]]*)[ *]([^]]*)]]|[\1 \2 \3](/Notes/notes/\1-\2-\3.html)|g" "$i"` && echo "$x" > "$i"; done
find ./_notes/Public/ -name '*.md' | while read -r i; do  x=`sed -E "s|[[][[]([^]]*)[ *]([^]]*)]]|[\1 \2](/Notes/notes/\1-\2.html)|g" "$i"` && echo "$x" > "$i"; done
find ./_notes/Public/ -name '*.md' | while read -r i; do  x=`sed -E "s|[[][[]([^]]*)]]|[\1](/Notes/notes/\1.html)|g" "$i"` && echo "$x" > "$i"; done
find ./_notes/Public/ -name '*.md' | while read -r i; do  x=`sed -E "s|/Notes/notes/([^]]*).png.html|/Notes/assets/img/\1.png|g" "$i"` && echo "$x" > "$i"; done
find ./_notes/Public/ -name '*.md' | while read -r i; do  x=`sed -E "s|/Notes/notes/([^]]*).jpg.html|/Notes/assets/img/\1.jpg|g" "$i"` && echo "$x" > "$i"; done
find ./_notes/Public/ -name '*.md' | while read -r i; do  x=`sed -E "s|![[](.*)\.html\)|[\1.html)|g" "$i"` && echo "$x" > "$i"; done
find ./_notes/Public/ -name '*.md' | while read -r i; do  x=`sed -E "s|[(](.*)#(.*)\.html\)|(\1#\L\2)|g" "$i"` && echo "$x" > "$i"; done