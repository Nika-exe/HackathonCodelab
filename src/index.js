let headerTag = document.getElementById('header')
let footerTag = document.getElementById('footer')

callTemplates();

async function callTemplates() {
  let templates = document.createElement('template');
  templates.innerHTML = await (
    await fetch('../public/templates.html')).text()

  let headerTemplate = templates.content.querySelector( '#header' )
  let footerTemplate = templates.content.querySelector( '#footer' )
  
  headerTag.innerHTML = headerTemplate.innerHTML
  footerTag.innerHTML = footerTemplate.innerHTML
}
