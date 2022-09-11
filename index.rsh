'reach 0.1';

const Project = {
    putCredits: Fun([], UInt),
    getProject: Fun([UInt], Null),
    wager: UInt,
}


export const main = Reach.App(()=>{

    //who make a donation
    const FundDonator = Participant('NameFundDonator', {
        ...Project,
        wager: UInt,
    });

    //who create a new Project
    const FundCreator = Participant('NameFundCreator',{
        ...Project, //share methods from contract
    });

    init();



    FundDonator.only(() => {
        const wager = declassify(interact.wager);
        const handFundDonator = declassify(interact.putCredits());
    });
    FundDonator.publish(wager, handFundDonator)
    .pay(wager);
    commit();

    FundCreator.only(() => {
        const getProjectCredits = declassify(interact.getProject(1000));
    });
    FundCreator.publish(getProjectCredits);
    commit();

});