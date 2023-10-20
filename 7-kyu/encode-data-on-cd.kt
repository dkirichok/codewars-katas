fun main() {
    encodeCd(5u)
}

fun encodeCd(n: UByte): String {
    var result = ""
    ('P' + n.toString(radix = 2).padStart(UByte.SIZE_BITS, '0').reversed()).toList().apply {
        mapIndexed {index, value -> result += when(value) {
            '0' -> if (result[index - 1] == 'P') 'P' else 'L'
            '1' -> if (result[index - 1] == 'P') 'L' else 'P'
            else -> 'P'
            }
        }
    }
    return result
}

/*
Description: 
"Pits" and "lands" are physical features on the surface of a CD that represent binary data. Pits are small depressions or grooves on the surface of the CD, while lands are flat areas between two adjacent pits.

The pits and lands themselves do not directly represent the zeros and ones of binary data. Instead, Non-return-to-zero, inverted encoding is used: a change from pit to land or land to pit indicates a one, while no change indicates a zero.

In this Kata, you should implement a function, that takes integer in range [0..255] (8 bits), and returns combination of pits and lands that encode the number. Result should have format of string: PLLPL... where P represents pit and L represents land. Combination should always start with pit. Numbers should be encoded in little-endian, which means you start from least significant bit.

Rank: 7 kyu

Link: https://www.codewars.com/kata/643a47fadad36407bf3e97ea
*/
