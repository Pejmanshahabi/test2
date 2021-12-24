var len = parseInt(prompt("تعداد اعدد را وارد نمایید"))

var arr = []

for (var i = 0; i < len; i++) {
    arr[i] = parseInt(prompt(" اعدد را وارد نمایید"))
}
console.log(arr)
var sum = 0
for (var j = 0; j < len; j++) {
    sum += arr[j]

}
console.log('sum =' + sum)
console.log(typeof(arr))

var arr1 = [1, 5, 9, 13];
var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
for (var i of arr) {
    for (var j of i) {
        if (j == 14)
            console.log(j + ' true')

    }
}

for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < arr[i].length; j++)
        console.log(arr[j][i])

}

function sum(...numb) {
    var s = 0
    for (i = 0; i <= numb.length; i++) {
        s += i
    }
    console.log(s)
    var s2 = 0
    numb.forEach(el => {
        s2 += el

    });
    console.log(s2)
}
funname("f", "4");
sum(1, 2, 3, 4)

var funname = (m, v) => (console.log(m, v))

document.querySelector('p')


document.writeln('<table style="color: antiquewhite;">')
for (var i = 1; i < 10; i++) {
    document.writeln("<tr>")
    for (var j = 0; j < 10; j++) {
        if (j % 2 == 0) {
            document.writeln("<td bgcolor=red> " + i % 2 + "</td>")
        } else document.writeln("<td bgcolor=black> " + i % 2 + "</td>")
    }
    document.writeln("</tr>")
}
document.writeln("</table>")

function todown() {
    for (var j = 1; j < 600; j++) {
        window.scroll(1, j)
    }
}

todown()

var obj = { 'nam': 'ali', 'family': 'ahmadi', 'age': '13', 'adress': 'hamedan' }
for (let i in obj) {
    console.log(i + " :")



}

for (let i of obj) {
    console.log(i)



}

let arr = ['red', 'green', 'blue']
for (let j of arr) {

    console.log(j)


}

for (var j = 1; j < 4; j++) {
    document.writeln("<ol>")
    for (var j = 1; j < 5; j++) {
        document.writeln("<li>" + window[j] + "</li>")
        document.writeln("<li>" + obj.nam + "</li>")
        document.writeln("<li>" + obj.age + "</li>")
        document.writeln("<li>" + obj.adress + "</li>")

    }
}
document.writeln("</ol>")
console.log('dd')

function sum(a, b) {
    return a + b
}

console.log(sum(2, 2))
console.log(2 ** 3)

let cir = {
    loc: { x: 1, y: 1 },
    r: 1,

    drw: function() { console.log('is draw  ' + cir.r); }
}
let cirarr = Object.keys(cir)
for (let k of cirarr)
    console.log('k =' + k)
let cirarr2 = Object.entries(cir)
for (let a of cirarr2)
    for (let aa of a)
        console.log(aa)
if ('r' in cir) {
    console.log('yesd')
}

function cirfunc(r, x, y) {
    return {
        r,
        loc: { x, y },
        drw() { console.log('is draw  ' + x); }


    }
}
let s = cirfunc(4, 5, 6)
let s1 = cirfunc(7, 8, 9)
let s2 = cirfunc(10, 11, 12)
let s3 = cirfunc(13, 14, 15)
cir.drw();
console.log(s)
console.log(s1)
console.log(s2)
console.log(s3)

function Cirfunc(r, x, y) {

    this.r = r,
        this.drw = function() { console.log('is draw  ' + x); }
}
let k = new Cirfunc(55, 65, 94)
console.log(k)


function randm(min, max) {
    return Math.random() * (max - min) + min
}
console.log(parseInt((randm(1, 7))))


console.log(String.fromCharCode(50, 13, 10, 1));

let nam = 'ahmad'
let msg = 'hi ' + nam + '\n \"good night\" '
let msg2 = `hi ${parseInt((randm(1, 7)))}
" good night"`
console.log(msg)
console.log(msg2)

const arr = [2, 3, 5, 6]
console.log(arr)
arr.push(1, 0)
console.log(arr)
arr.unshift(4)
console.log(arr)
arr.splice(arr.length, 0, 99)
arr.splice(arr.length, 0, 100, 55, 10)
console.log(arr)
var m = 97;
for (var i = 1; i <= 7; i++) {
    if (i % 2 != 0) {
        console.log(String.fromCharCode(m))
        m += 2
    } else
        console.log(i)
}

console.log(` index of ${i} =` +
    arr.indexOf(i))

console.log(` index of ${i} =` +
    arr.includes(i))

console.log(` index of ${i} =` +
    arr.lastIndexOf(1))

const arr = [1, 9, 5, 5, 2, 3, 2, 3, 4, 3, 1, 5, 1, 6, 6, 1, 9]
for (var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j])
            count++
    }
    console.log(arr[i] + ' =' + count)
}


//const arr = [1, 2, 3, 2, 3, 4, 3, 1, 5, 1, 6, 6, 1, 9]

console.log(' first arr :' + arr)

//function remov(arr) {

for (var i = 0; i < arr.length; i++) {

    console.log('i = ' + i)
    console.log('arr.length = ' + arr.length)
    for (var j = arr.length; j > i; j--) {
        if (arr[i] == arr[j])
            arr.splice(j, 1)
    }
    console.log('now arr : ' + arr)
}
return arr
}
console.log('last arr : ' + arr)

arr.splice(0, arr.length)

console.log('last last arr : ' + arr)

let first = [1, 2, 3]
const secend = [4, 5, 6, 1, 7, -1, 8]
first = first.concat(secend)
let arr = ['a', 5, 'g', ...first, 'h', 'u', ...secend, 'y']
console.log(first)
console.log(arr)
let arr2 = [...first, ...secend]
console.log(arr2)
let narr = first.slice(2, 6)
console.log(narr)

for (let i of secend)
    console.log(i)

secend.forEach((num, i) => console.log(i + ' = ' + num)) * /

let sec = secend
let cop = [...secend]
console.log('sec')
console.log(sec)
console.log('cop')
console.log(cop)
secend.push(9)
console.log('sec')
console.log(sec)
console.log('cop')
console.log(cop)
    //splice
    //slice
    //split

let joind = secend.join('-');
console.log(joind)

let str = 'ali is good boy'
let arr = str.split(' ')

console.log(arr)
console.log(' jon = ' + arr.join('-'))

let obj = [{ id: 1, nam: 'zaa' }, { id: 0, nam: 'czz' }, { id: 3, nam: 'java' }, { id: 4, nam: 'f' }, { id: 7, nam: 'v' }, { id: 6, nam: 'azzzzzzzz' }]
console.log(obj)
obj.sort(function(a, b) {
    if (a.id > b.id)
        return 1
    if (b.id > a.id)
        return -1
    return 0

})

const secend = ['h', 4, 5, 'd', 6, 1.6, 7, -1, 8]

let m = -1
let tru = secend.filter(function(value, index) {
    return (typeof(value) == "number")
})

console.log(tru)

let str = ['aa', 'b', 'c', 'f', 'h', 't', 'n', 'u']
console.log(str)
let st = str.map(function(value) {

    return String.fromCodePoint(value.charCodeAt() + 5)
})
console.log(st)

/**  start   *this *      */
// this   in  object  referd  to self object/*
let obj = {
    id: 10,
    nam: 'ali',
    tag: ['a', 'b'],
    show() {
        this.tag.push('k')
        console.log(this.nam)
        this.tag.forEach(function(element) {
            console.log(this.nam, element)
        }, this);
        this.tag.unshift('p')
        console.log(this)
    }
}
obj.show()

// this  in func referd to  window object
function play() {

    console.log(this)
}

play()

// creat a dynamic objec with this   moghe cal kardan  bayad as kaslme kelidi new estefade shavad
function objm(n, i, f, a) {
    this.nam = n;
    this.id = i
    this.famly = f
    this.age = a
}

let h = new objm('ali', 10, 'ahmadi', 20)
let k = new objm('hosein', 12, 'karimi', 21)
console.log(h)
console.log(k)


/** end of this */


/** hoisting */

//function declaration
show()
    // you can call evryvere  function declaration
function show() { console.log('show') }

// function experssion

let f = function() {
        console.log('f show')
    }
    // you should call  function experssion after that cod function
f()

//***************** end hositing */

//() // creat a function whit eny some parametr
// have tow instuction 
// one
function sum() {
    let s = 0
    for (k of arguments) {
        console.log(k)
        s += k
    }
    return s
}

console.log(sum(10, 1, 15, 20, 45, 16))

console.log(sum('k', 'h'))

// tow

function add(off /** yek takhfif */ , ...a /**  ...param name */ ) {
    let t = a.reduce(function(a, c) {
        return a + c

    }, 0)

    return t * (1 - off)
}
console.log(add(0.5, 12, 2, 3, 6))


sum of arry reduce

function*/

let arr = [1, 2, 3, 4, 5]
let sum = arr.reduce(function(a, c) {
            return a + c
        }, 0 /**defult valus of a */

        console.log(sum)

        delful valu in param have tow instraction

        function sum(a, b, c = 0 /** param=defalt val */ ) {
            b = b || 0 // or heere paramname=paramname || defaultvall
            a = a || 0
            let s = 0
            s = a + b + c
            return s
        }

        console.log(sum(5, 69, 8))

        /************************************** setter getter */
        //html mohamadi 100


        let obj = {
            title: 'css',
            auther: 'ahmadi',
            page: 400,
            get info() {
                return `${this.title}  ${this.auther} ${this.page}`
            },
            set info(val) { //set and get is used to in calling don use() 
                if (typeof val != String) {
                    throw new Error(' value is not string ')
                }
                let arr = val.split(' ')
                this.title = arr[0]
                this.auther = arr[1]
                this.page = arr[2]

            }
        }
        console.log(obj.info) try {
            obj.info = 'vb mohamadi 100'
            console.log(obj.info)
        } catch (e) {
            console.log(e)
        }


        function g() {
            for (let i = 0; i < 5; i++)
                console.log(i)
        }


        /********************* taghire this */

        function fun() {
            console.log(this)
        }
        let f = fun.bind(
            [{ nam: 'sa', id: 1 }], [{ t: 's', id: 4 }]
        )
        fun() f() let r = new f()
        console.log(Object.getPrototypeOf(r)) let person = { name: 'mohamad', faml: 'ahmadi' }
        console.log(person) console.log(Object.keys(person)) for (let key in person) {
            console.log(key)
            console.log(key)
        }
        Object.defineProperty(person, 'name', {
            writable: false,
            configurable: false,
            enumerable: false,
        }) person.name = 'ali'
        person.faml = 'hose'

        let pty = Object.getPrototypeOf(person)
        let dop = Object.getOwnPropertyDescriptor(pty, 'toString')
            //console.log(pty)
        console.log(dop) console.log(person)

        function shape(n, l) {
            this.name = n;
            this.loc = l

        }
        shape.prototype.draw = function() {
            console.log("draw shape  ")
        }

        let s = new shape('n')
        s.draw()

        function circle(r, n, f) {

            this.radius = r
            shape.call(this, n, f)

        }

        circle.prototype = Object.create(shape.prototype); circle.prototype.constructor = circle circle.prototype.draw = function() {

            console.log("draw shape 2 ")
        }
        let c = new circle(5, 'circ', 5)
        console.log(c.draw()) import { circle } from './circle.js'

        let c = new circle(5)

        console.log(c)

        function bull1(callback) {
            setTimeout(() => {
                callback(true)
            }, 4000)
        }

        function bull2(callback) {
            setTimeout(() => {
                callback(true)
            }, 2000)
        }

        function bull3() {
            setTimeout(() => { console.log('bl3') }, 3000)
        }
        bull1((res) => {
            if (res) {
                console.log('b1')
                bull2((res) => {
                    if (res) {
                        console.log('b2')
                        bull3()
                    }
                })
            }
        })

        async function ball1() {
            if (true) {
                return ('BALL1')
            } else
                throw new Error('ball1off')

        }

        async function ball2() {
            if (true) {
                return ('BALL2')
            } else
                throw new Error('ball2off')
        }

        async function ball3() {
            if (true) {
                return ('BALL3')
            } else
                throw new Error('ball3off')
        }


        async function exe() {
            try {
                console.log(await ball1())
                console.log(await ball2())
                console.log(await ball3())
            } catch (er) {
                console.log(er)
            }
        }

        exe()




















        While(alive == true) {
            Sad()
            Happy()
            If(person.age == maxage) {
                alive = false
                death()
            }
        }
        death() {
            If(good == false)
            Hell()
            If(good == true)
            Paradise()
        }