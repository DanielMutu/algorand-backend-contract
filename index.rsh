'reach 0.1';

const Project = {
    putCredits: Fun([], UInt),
    getProject: Fun([], UInt),
}


export const main = Reach.App(()=>{

    //who make a donation
    const FundDonator = Participant('FundDonator', {
        ...Project,
        wager: UInt,
    });

    //who create a new Project
    const FundCreator = Participant('FundCreator',{
        ...Project, //share methods from contract
        wager: UInt,
    });

    const FundProject = Participant('FundProject',{
        ...Project, //share methods from contract
        acceptWager: Fun([UInt], Null),
        wager: UInt,
    });

    init();



    FundDonator.only(() => {
        const wager = declassify(interact.wager);
        const handFundDonator = declassify(interact.putCredits());
    });
    FundDonator.publish(wager, handFundDonator)
    .pay(wager);
    //FundDonator.publish(handFundDonator);
    commit();


    FundProject.only(() => {
        //interact.acceptWager(interact.wager);
        const getProjectFund = declassify(interact.getProject());
    });
    FundProject.publish(getProjectFund)

    commit();

    FundCreator.only(() => {
        const getProjectCredits = declassify(interact.getProject());
    });
    FundCreator.publish(getProjectCredits);
    const forCreator = 1;
    //transfer(wager).to(FundProject);


    commit();



});