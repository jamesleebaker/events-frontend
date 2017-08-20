import service from '../services/mock-api-service';
import template from '../../templates/event-details.hbs';
import renderTemplate from '../utils/render-template';

const controller = {
  render(params, callback) {
   // TODO: make ajax request
   console.log(params);
   let model = service.getEvent(params.eventId);
   console.log(model);
   renderTemplate(template, model, callback);
 }
};

export default controller;
