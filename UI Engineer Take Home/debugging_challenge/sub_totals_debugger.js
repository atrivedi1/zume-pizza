/*
- Please either fork this fiddle or copy the code.
- Please write a test suite for the 'subtotal' function. The subtotal should be the sum of each item's price times the count of each item.

e.g.:
 subtotal([{price:1,count:3}]) === 3

*/

mocha.setup("bdd");
chai.should();

// function to test.
function subtotal(items) {
    //throws error if no data provided
    if(!items) {
        console.log("no items provided");
        return -1;
    }

    //throws error if incompelte data provided (might be superfluous but added it just in case)
    for(var i = 0; i < items.length; i++) {
        if(items[i].price === undefined || items[i].count === undefined) {
            console.log("issue with item at index " + i + ",incomplete data provided");
            return -1;
        }
    }

    var subtotal = items.reduce(function(acc,item) {
        return acc + (item.price * item.count);
    },0);

	return subtotal;
}

//test suite
describe('Test Suite for subtotal ', function(){
// Example test
    it('subtotal([{ price: 1, count: 3 }]) === 3', function() {
    	subtotal([{ price: 1, count: 3}]).should.equal(3);
    });
    
// *** Please add additional tests below. Try to think of different edge cases.
    it('handles empty input', function() {
    	subtotal().should.equal(-1);
    });

    it('handles incomplete input', function() {
    	subtotal([{ price: 1 }]).should.equal(-1);
    });

    it('handles multiple inputs', function() {
    	subtotal([{ price: 1, count: 3}, { price: 2, count: 4} ]).should.equal(11);
    });
    
    it('handles count of 0', function() {
    	subtotal([{ price: 1, count: 0}, { price: 2, count: 4} ]).should.equal(8);
    });

    it('handles price of 0', function() {
    	subtotal([{ price: 0, count: 1}, { price: 2, count: 4} ]).should.equal(8);
    });
});

mocha.run();