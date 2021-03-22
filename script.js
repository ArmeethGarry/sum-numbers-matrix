'use strict'

function sumNumMatrix ( matrix ) {
    let sum = 0,
        success = 'Invalid data type for matrix elements or invalid matrix!!!';

    computeSum: if ( matrix ) {  // метка для выхода в случае ошибки
        for ( let i = 0; i < matrix.length; i++ ) {
            let row = matrix[i];
            if ( !row ) break computeSum;

            for ( let j = 0; j < row.length; j++) {
                let num = row[j];
                if ( num !== num ) break computeSum;

                sum += num;
            }
        }
        return sum;

    }
    return success;
    
}