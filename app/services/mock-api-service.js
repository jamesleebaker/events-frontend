import model from '../mock-models/index-model';

const service = {
  getFeatures: function() {
   // TODO: make ajax request
   let context = {};
   context.events = model.events.filter(event => event.featured)
   return context;
 },
 getToday: function() {
    let context = {};
    context.events = model.events.filter(event => event.date )
 }
};

export default service;
