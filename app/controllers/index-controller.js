import service from '../services/mock-api-service';
import template from '../../templates/homepage.hbs';
import renderTemplate from '../utils/render-template';

const controller = {
  render(params, callback) {
   // TODO: make ajax request
   let model = {};
   console.log(params)
   model.featured = service.getFeatures();
   switch (params.show) {
    case 'tomorrow':
      model.events    = service.getTomorrow();
      model.tomorrow = "active"
      break; 
    case 'thisweek':
      model.events = service.getThisWeek();
      model.thisweek = "active"
      break;
    case 'today':
    default:
      model.today = "active"
      model.events    = service.getToday();
  };

   
   renderTemplate(template, model, callback);
 }
};

export default controller;
