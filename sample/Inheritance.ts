class ReserveBank{
    roi(){
        console.log('ROI comes from Reserve bank with 6%');    
    }
    loan(){
        console.log('loan comes from Reserve bank');
        
    }
}

class ICICI extends ReserveBank{
    claim(){
        console.log('claim comes from ICICI');
        
    }
    roi(){  // Overriding 
       console.log('ROI comes from Reserve bank but icici rate of interset is 7%');  
    }
}

const obj1 = new ICICI();
obj1.roi();
obj1.claim();
obj1.loan();