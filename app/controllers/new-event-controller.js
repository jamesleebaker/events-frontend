import service from '../services/mock-api-service';
import template from '../../templates/create-event.hbs';
import renderTemplate from '../utils/render-template';

const controller = {
  newModel: {},

  render(params, callback) {
   // TODO: make ajax request
   switch (params.action) {
     case 'save':
      service.saveEvent(this.newModel);
      this.newModel.new = false;
      break;
    default:
      this.newModel = service.newEvent();
      this.newModel.new = true;

   }
   renderTemplate(template, this.newModel, callback);
 }
};

export default controller;
