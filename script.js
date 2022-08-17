let text = document.getElementById('text');
let btn = document.getElementById('btn')
let btn1 = document.getElementById('btn1')
let root = document.getElementById('root')
let str;
btn.addEventListener('click', () => {
    let c = 0, v = 0, punc = 0,ws=0,digit=0;
    str = text.value
    if (str == "") {
        root.innerHTML = `<p>Nothing is Entered. Please enter a text!!!!</p>`
    }
    else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U') {
                v = v + 1;
            }
            else if (str[i] == '!' || str[i] == ',' || str[i] == ';' || str[i] == '.' || str[i] == '?' || str[i] == '-' ||
            str[i] == '\'' || str[i] == '\"' || str[i] == ':') {
            punc++;
        }
        else if(str[i]==" ")
        {
            ws++;
        }
        else if(str[i] == '0' || str[i] == '1' || str[i] == '2' || str[i] == '3' || str[i] == '4' || str[i] == '5' ||
        str[i] == '6' || str[i] == '7' || str[i] == '8'||str[i]=='9'){
            digit++;
        }
            else {
                c = c + 1;
            }
        }
        s = str.split(" ");
        //console.log(s)
        root.innerHTML = `<p>No. Of Letters:${v+c}</p><p>No. Of Digits:${digit}</p><p>No Of Words:${s.length}</p><p>No Of Punctuation Mark:${punc}</p><p>No Of WhiteSpaces:${ws}</p></p><p>No Of Vowels:${v}</p></p><p>No Of Consonants:${c}</p>`
    }
})

btn1.addEventListener('click', () => {
    text.value = ""
    root.innerHTML = ""
})
