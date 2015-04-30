describe ("Game", function() {

  beforeEach(function(){
    game = new Game;
    frame = jasmine.createSpyObj('frame', ['score']);
  });

  it("has no frames to start", function(){
    expect(game.allFrames).toEqual([]);
  });

  it("can add frames", function(){
    game.addFrame(frame);
    expect(game.allFrames).toEqual([frame]);
  });

  it("can calculate total score of frames added", function(){
    frame1 = new Frame;
    frame2 = new Frame;
    frame1.roll(1,2);
    frame2.roll(3,4);
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(game.totalScore()).toEqual(10);
  });


  it("can add bonuses when a spare has been rolled", function(){
    frame1 = new Frame;
    frame2 = new Frame;
    frame1.roll(6,4);
    frame2.roll(3,3);
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(frame1.score).toEqual(13);
    expect(game.totalScore()).toEqual(19);
  });

  it("can add bonuses when a strike has been rolled", function(){
    frame1 = new Frame;
    frame2 = new Frame;
    frame1.roll(10,0)
    frame2.roll(3,4)
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(frame1.score).toEqual(17);
    expect(game.totalScore()).toEqual(24);
  });
});
