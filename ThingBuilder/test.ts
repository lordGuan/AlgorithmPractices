import {Thing} from "./index";

describe('Thing', () => {
    const jane = new Thing('Jane');

    test('constructor', () => {
        expect(jane).toBeTruthy();
        expect(jane.name).toBe('Jane');
    })

    test('#is_a', () => {
        jane.is_a.man
        expect(jane.is_a_man).toBe(true)
    })

    test('#is_not_a', () => {
        jane.is_not_a.woman
        expect(jane.is_a_woman).toBe(false)
    })

    test('#is_the', () => {
        jane.is_the.parent_of.joe
        expect(jane.parent_of).toBe('joe')
    })

    describe('#has', () => {
        jane.has(2).arms

        test('jane.has(2).arms', () => {
            expect(Array.isArray(jane.arms)).toBe(true)
        })

        test('jane.arms should contain two Things', () => {
            expect(jane.arms.length).toBe(2);
            expect(jane.arms.every(arm => arm instanceof Thing)).toBe(true);
        })

        describe('jane.having(2).arms', () => {
            test('works like #has', () => {
                const jane = new Thing('Jane');
                jane.having(2).arms;
                expect(jane.arms.length).toBe(2);
                expect(jane.arms[0].name).toBe('arm');
            })
        })
    })

    describe('#each', () => {
        jane.has(2).hands.each(hand => hand.having(5).fingers)

        test('should create 2 hands, each having 5 fingers', () => {
            expect(jane.hands.length).toBe(2);
            expect(jane.hands[0].fingers.length).toBe(5);
            expect(jane.hands[1].fingers.length).toBe(5);
            expect(jane.hands[1].fingers[0].name).toBe('finger');
        })
    });

    describe('#being_the', () => {
        const being_the = {color: {green: '1'}}
        describe('jane.has(1).head.having(2).eyes.each(eye => being_the.color.green)', () => {
            const jane = new Thing('Jane');
            jane.has(1).head.having(2).eyes.each(eye => being_the.color.green);

            it('jane\'s eyes should both be green', () => {
                expect(jane.head.eyes[0].color).toBe('green');
                expect(jane.head.eyes[1].color).toBe('green');
            });
        });
    });

    describe('#and_the', () => {
        describe('jane.has(2).eyes.each(eye => being_the.color.blue.and_the.shape.round)', () => {
            const jane = new Thing('Jane');
            jane.has(1).head.having(2).eyes.each(eye => eye.being_the.color.blue.and_the.shape.round);

            it('jane\'s eyes should both be blue and round', () => {
                expect(jane.head.eyes[0].color).toBe('blue');
                expect(jane.head.eyes[0].shape).toBe('round');
            });
        });
    });


    describe('#can', () => {
        describe('jane.can.speak(phrase => `${name} says: ${phrase}!`)', () => {
            const jane = new Thing('Jane');
            jane.can.speak(phrase => `${name} says: ${phrase}!`);

            it('should create a speak method on jane', () => {
                expect(jane.speak('hello')).toBe('Jane says: hello!');
            });
        });

        describe('jane.can.speak("spoke", phrase => `${name} says: ${phrase}!`)', () => {
            const jane = new Thing('Jane');
            jane.can.speak('spoke', phrase => `${name} says: ${phrase}!`);

            it('jane.spoke should track the results of all calls to jane.speak(...)', () => {
                jane.speak('hi');
                expect(jane.spoke).toBe(['Jane says: hi!']);
            });
        });
    });
})
