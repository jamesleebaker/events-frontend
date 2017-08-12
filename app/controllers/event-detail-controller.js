import model from '../mock-models/event-detail-model';
import template from '../../templates/event-details.hbs';
import renderTemplate from '../utils/render-template';

const controller = {
  render(params, callback) {
   // TODO: make ajax request

   renderTemplate(template, model, callback);
 }
};

export default controller;
