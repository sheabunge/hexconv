var columnize=function(a,b){a=a.toString();for(var c=a.split("").reverse(),d=[],e=0;e<c.length;e++)d.push(c[e]),(e+1)%b===0&&d.push(" ");return d.reverse().join("").trim()},bin2dec=function(a){var b=0;a=a.replace(/\s/g,""),a=a.split("").reverse().join("");for(var c=a.length-1;c>=0;--c)"1"==a[c]&&(b+=Math.pow(2,c));return b},dec2bin=function(a){var b=[];if(a=parseInt(a),0===a)return 0;for(var c=Math.floor(Math.log(a)/Math.log(2));c>=0;)a-Math.pow(2,c)>=0?(a-=Math.pow(2,c),b[c]="1"):b[c]="0",--c;return b.reverse().join("")},hex_input=document.querySelector("[name=hex]"),dec_input=document.querySelector("[name=dec]"),bin_input=document.querySelector("[name=bin]"),update_dec=function(a){dec_input.value=columnize(a,3)},update_hex=function(a){hex_input.value=a.toString(16)},update_bin=function(a){bin_input.value=columnize(dec2bin(a),4)};update_dec(0),update_hex(0),update_bin(0),hex_input.oninput=function(){var a=parseInt(this.value,16);update_dec(a),update_bin(a)},dec_input.oninput=function(){var a=1*this.value;update_hex(a),update_bin(a)},bin_input.oninput=function(){var a=bin2dec(this.value);update_hex(a),update_dec(a)};