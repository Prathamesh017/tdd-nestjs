import { Test, TestingModule } from '@nestjs/testing';
import { TweetsService } from './tweets.service';

//describe block basically helps to us to wrap a bunch of tests 
describe('TweetsService', () => {
  let service: TweetsService;

  //this will run after each test as name suggest
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsService],
    }).compile();

    service = module.get<TweetsService>(TweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //try to breakdown the function is supposed to do and write test cases accordingly
  describe("TestService", () => {

    //define what should it do
    it("Create a new tweet", () => {
      service.tweets = [];
      let payload = "this is my first tweet"
      const tweet = service.createTweet(payload);
      //expect tweet to have a return value
       expect(tweet).toBe(payload);
       expect(service.tweets).toHaveLength(1);
    })
    it("should give a error if tweet is larger than 100",()=>{
      let payload = "this is my first tweet now so it would be greater than 100 so please contiue unit testing with nestjs and jest"
       expect(()=>{service.createTweet(payload)}).toThrow();
  
    })
    it("Update A Tweet",()=>{
      service.tweets=["First Tweet"]
      let id=0;
      let newTweet="First Updated Tweet";
      expect(id).toBeLessThanOrEqual(service.tweets.length);
      const updatedTweet=service.updateTweet(newTweet,id);
      expect(service.tweets[id]).toBe(updatedTweet);
      expect(service.tweets).toHaveLength(1);

    })
    // also write cases to check if a test handle fail conditons or not
    it("show an error if id doesn't exist",()=>{
      let id=2;
      let newTweet="First Updated Tweet";
      expect(()=>{service.updateTweet(newTweet,id)}).toThrow("This Tweet does not exist");
    })
    it("Get a tweet",()=>{
      service.tweets=["A Tweet"];
      let id=0;
      let tweet=service.getTweet(id);
      expect(typeof tweet).toBe("string");
    })
    it("Throw a error if id is invalid",()=>{
      service.tweets=["A Tweet"];
      let id=1;
      expect(()=>{service.getTweet(id)}).toThrow();
    })
    it("delete a tweet",()=>{
      service.tweets=["My New Tweet","My ToBeDeleted Tweet"];
      let id=0;
      let currentTweetsLength=service.tweets.length;
      let deleteTweet=service.deleteTweet(id);
      expect(service.tweets.length).toBe(currentTweetsLength-1);
    })
  })

  
});
