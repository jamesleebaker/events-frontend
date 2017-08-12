import model from '../mock-models/index-model';
import template from '../../templates/homepage.hbs';
import renderTemplate from '../utils/render-template';

const controller = {
  render(params, callback) {
   // TODO: make ajax request

   renderTemplate(template, model, callback);
 }
};

export default controller;
