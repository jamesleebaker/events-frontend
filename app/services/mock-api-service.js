import { model, today, tomorrow } from '../mock-models/index-model';
// TODO make ajax request
const service = {
  getFeatures: function() {
   let context = model.events.filter(event => event.featured);
   return context;
 },
 getToday: function() {
    let context = model.events.filter(event => event.date == today );
    return context;
 },
 getTomorrow: function() {
  let context = model.events.filter(event => event.date > today );
  return context;
},
getThisWeek: function(){
  return model.events;
},
getEvent: function(id) {
  return  model.events.filter(event => event.eventId == id)[0];
},
newEvent: function() {
  return model.newModel();
},
saveEvent: function(newModel) {
  let newEventId = model.events.reduce((event1, event2) => Math.max(event1.eventId, event2.eventId), 0);
  newModel.eventId =  newEventId + 1;
  model.events.push(newModel);
}
};

export default service;
