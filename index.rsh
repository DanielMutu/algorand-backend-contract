'reach 0.1';
'use strict';

export const main = Reach.App(() => {
  const ProjectFunded = Participant('ProjectFunded', {
    request: UInt,
    info: Bytes(128),
    startDate:  Bytes(128),
    endDate: Bytes(128)
  });
  const Funder = Participant('Funder', {
    want: Fun([UInt], Null),
    got: Fun([Bytes(128)], Null),
  });
  init();

  ProjectFunded.only(() => {
    const request = declassify(interact.request); });
  ProjectFunded.publish(request);
  commit();

  Funder.only(() => {
    interact.want(request); });
  Funder.pay(request);
  commit();

  ProjectFunded.only(() => {
    const info = declassify(interact.info); });
  ProjectFunded.publish(info);
  transfer(request).to(ProjectFunded);
  commit();

  Funder.only(() => {
    interact.got(info); });
  exit();
});