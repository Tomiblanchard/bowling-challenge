describe ("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe ("scoring", function() {

    it("has no score to start", function() {
       expect(frame.score).toBe(0);
     });

     it("can record first roll", function() {
       frame.roll(1);
       expect(frame.rollOne).toBe(1);
     });

     it("can record second roll", function() {
       frame.roll(1, 2);
       expect(frame.rollOne).toBe(1);
       expect(frame.rollTwo).toBe(2);
     });

     it("can calculate score after 2 rolls", function() {
       frame.roll(2, 3);
       expect(frame.score).toBe(5);
     });

     it("can recognize when a spare has been scored", function() {
       frame.roll(7, 3);
       expect(frame.isSpare()).toBe(true);
       expect(frame.isStrike()).toBe(false);
     });

     it("can recognize when a strike has been scored", function() {
       frame.roll(10, 0);
       expect(frame.isSpare()).toBe(false);
       expect(frame.isStrike()).toBe(true);
     });

     it("can add the score from the next roll after a spare as a bonus", function() {
       frame.roll(7,3);
       frame.addBonus(4);
       expect(frame.score).toBe(14);
     });

     it("can add the score from the next two rolls after a strike as a bonus", function() {
       frame.roll(10,0);
       frame.addBonus(5);
       frame.addBonus(6);
       expect(frame.score).toBe(21);
     });
  });
});
