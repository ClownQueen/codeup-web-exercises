"use strict";

/** Create a while loop that uses console.log() to create the output shown below.
 2
 4
 8
 16
 32
 64
 128
 256
 512
 1024
 2048
 4096
 8192
 16384
 32768
 65536
*/

let counter = 2

while (counter <= 65536){
    console.log(counter)
    counter *= 2
}
