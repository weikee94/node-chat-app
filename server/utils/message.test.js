// let us make our assertions about the retun
// value from our generate message function

var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    // synchronous test not need put done
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some msg';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from: from,
            text: text
        })

        // store res in variable
        // assert from match
        // assert text match
        // assert createdAt is number
    })
})