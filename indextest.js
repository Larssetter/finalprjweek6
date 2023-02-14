

//test file  mocha chai 

//understand the concept of mocha and chai by my syntax/setup is wrong 
var expect = chai.expect;

describe("determine a winner", function(){
    describe("#determineWinner",  function(){
        it ("should check to see who is a winner", function() {
            if (player1.score > player2.score) {

                expect(player1.score).to.equal("is a winner");
            }
             
            
        

           
             
        });
            it("should check to see if player2 is a winner", function(){

                if (player2.score > player1.score) {

                    expect(player2.score).to.equal("is a winner");
                }
            })

        
       
            
 
        })

    });

 



