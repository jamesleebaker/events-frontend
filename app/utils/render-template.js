export default function renderTemplate(template, data, callback) {
  let html;

  try {
    html = template(data);
  } catch (err) {
    callback(err);
  }

  if (html) {
    callback(undefined, html);
  }
}
